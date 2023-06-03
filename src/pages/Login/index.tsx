import * as React from "react";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";
import LoginFormContainer from "../../containers/auth/login/LoginFormContainer";
import LoginIllustrationsContainer from "../../containers/auth/login/LoginIllustrationsContainer";

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex"
  }
}));

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0)
}));

export default function Login() {
  return (
    <RootStyle>
      <LoginIllustrationsContainer />
      <Container maxWidth="sm">
        <ContentStyle>
          <LoginFormContainer />
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
