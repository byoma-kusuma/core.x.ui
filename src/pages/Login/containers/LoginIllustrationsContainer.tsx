import { Card, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import * as React from "react";
import useResponsive from "../../../hooks/useResponsive";

const SectionStyle = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: 464,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: theme.spacing(2, 0, 2, 2)
}));

export default function LoginIllustrationsContainer() {
  const mdUp = useResponsive("up", "md");

  return (
    <>
      {mdUp && (
        <SectionStyle>
          <Typography
            variant="h4"
            sx={{ px: 5, mt: 10, mb: 5 }}
            color="primary.main"
          >
            Byoma Kusuma Admin Portal
            <img
              src="/static/illustrations/bk-logo.png"
              alt="login"
              height="378px"
              width="300px"
            />
          </Typography>
        </SectionStyle>
      )}
    </>
  );
}
