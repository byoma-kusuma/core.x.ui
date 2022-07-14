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
import GqlErrHandler from "../../../services/gqlErrorHandler";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email must be a valid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required")
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
      new GqlErrHandler(
        await loginMut({
          userName: values.email,
          password: values.password
        })
      )
        .onError(({ notiErr }) => {
          notiErr();
        })
        .onSuccess(() => {
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
        Sign in to BK Administrative Portal
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
              label="Email address"
              {...getFieldProps("email")}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
            />

            <TextField
              fullWidth
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
              to="#"
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
