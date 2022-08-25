import * as React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Button, Typography, Container, Box } from "@mui/material";

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(6, 0)
}));

export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <Container>
      <ContentStyle sx={{ textAlign: "center", alignItems: "center" }}>
        <Typography variant="h3" paragraph>
          Sorry, page not found!
        </Typography>
        <Typography sx={{ color: "text.secondary" }}>
          Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
          mistyped the URL? Be sure to check your spelling.
        </Typography>

        <Box
          component="img"
          src="/static/illustrations/404.svg"
          sx={{ height: 180, mx: "auto", my: { xs: 5, sm: 10 } }}
        />

        <Box sx={{ display: "flex" }}>
          <Button
            onClick={() => navigate("/")}
            size="large"
            variant="contained"
          >
            Go to Home
          </Button>
        </Box>
      </ContentStyle>
    </Container>
  );
}
