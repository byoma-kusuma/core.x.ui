import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Container, TextField, Typography } from "@mui/material";
import { useRequestPasswordResetMutation } from "generated/graphql";
import GqlApiHandler from "services/GqlApiHandler";
import { LoadingButton } from "@mui/lab";

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

export default function RequestResetPassword() {
  const [userName, setUserName] = React.useState("");
  const [{ fetching }, requestResetPasswordMut] =
    useRequestPasswordResetMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    new GqlApiHandler(await requestResetPasswordMut({ userName }))
      .onError(({ notiErr }) => {
        notiErr();
      })
      .onSuccess(({ notiSuccess }) => {
        notiSuccess("Reset password link has been sent to your email!");
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
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                placeholder="Your username"
                fullWidth
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
