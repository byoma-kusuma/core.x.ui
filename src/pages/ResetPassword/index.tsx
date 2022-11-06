import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Container, TextField, Typography } from "@mui/material";
import GqlApiHandler from "../../services/GqlApiHandler";
import { LoadingButton } from "@mui/lab";
import { useResetPasswordMutation } from "../../generated/graphql";
import { useNavigate } from "react-router-dom";

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex"
  }
}));

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 320,
  margin: "auto",
  textAlign: "center",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0)
}));

export default function ResetPassword() {
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const [{ fetching }, resetPasswordMut] = useResetPasswordMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token") || "";
    const userId = Number(params.get("userId") || "");
    new GqlApiHandler(
      await resetPasswordMut({
        userId,
        token,
        password
      })
    )
      .onError(({ notiErr }) => {
        notiErr();
      })
      .onSuccess(({ notiSuccess }) => {
        notiSuccess(
          "Password successfully reset! \n Redirecting to login page..."
        );
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      });
  };

  return (
    <RootStyle>
      <Container maxWidth="sm">
        <ContentStyle>
          <Typography variant="body1" sx={{ fontSize: "24px" }}>
            Reset Password
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box sx={{ mt: "24px" }}>
              <TextField
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Type new password"
                fullWidth
                type="password"
              />
              <TextField
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                placeholder="Confirm your new password"
                fullWidth
                type="password"
                onPaste={(e) => {
                  e.preventDefault();
                }}
              />
            </Box>

            <LoadingButton
              fullWidth
              sx={{ mt: "16px" }}
              variant="contained"
              size="large"
              type="submit"
              loading={fetching}
            >
              Submit
            </LoadingButton>
          </form>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
