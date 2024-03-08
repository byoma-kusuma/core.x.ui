import * as React from "react";
import * as Yup from "yup";
import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useFormik, Form, FormikProvider } from "formik";
import {
  Link,
  Stack,
  TextField,
  IconButton,
  InputAdornment,
  Typography
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Iconify from "../../../components/Iconify";
import useResponsive from "../../../hooks/useResponsive";
import { useLoginMutation } from "../../../generated/graphql";
import { setLocalToken, setRefreshToken } from "../../../services/auth";
import GqlApiHandler from "../../../services/GqlApiHandler";

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Username is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password should be minimum of 8 characters")
});

export default function LoginFormContainer() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [, loginMut] = useLoginMutation();

  const smUp = useResponsive("up", "sm");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      new GqlApiHandler(
        await loginMut({
          userName: values.email,
          password: values.password
        })
      )
        .onError(({ notiErr }) => {
          notiErr();
        })
        .onSuccess(({ res }) => {
          setLocalToken(res.data?.login.accessToken);
          setRefreshToken(res.data?.login.refreshToken);
          navigate("/app/dashboard", { replace: true });
        });
    }
  });

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Sign In
      </Typography>

      <Typography sx={{ color: "text.secondary", mb: 5 }}>
        Enter your details below.
      </Typography>

      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              fullWidth
              autoComplete="username"
              type="email"
              inputProps={{
                "data-testid": "login-username"
              }}
              label="Email address"
              {...getFieldProps("email")}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
            />

            <TextField
              fullWidth
              inputProps={{
                "data-testid": "login-password"
              }}
              autoComplete="current-password"
              type={showPassword ? "text" : "password"}
              label="Password"
              {...getFieldProps("password")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword} edge="end">
                      <Iconify
                        icon={
                          showPassword ? "eva:eye-fill" : "eva:eye-off-fill"
                        }
                      />
                    </IconButton>
                  </InputAdornment>
                )
              }}
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
            />
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{ my: 2 }}
          >
            <Link
              component={RouterLink}
              variant="subtitle2"
              to="/password-reset/request"
              underline="hover"
            >
              Forgot password?
            </Link>
          </Stack>

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
            data-testid="login-submit-button"
          >
            Login
          </LoadingButton>
        </Form>
      </FormikProvider>

      {!smUp && (
        <Typography variant="body2" align="center" sx={{ mt: 3 }}>
          Don’t have an account?{" "}
          <Typography component="span" color="primary.main" variant="subtitle2">
            Contact Site Administrator
          </Typography>
        </Typography>
      )}
    </>
  );
}
