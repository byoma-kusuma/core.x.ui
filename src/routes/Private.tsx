import { Box, styled, Typography } from "@mui/material";
import React from "react";
import Spinner from "../components/Spinner";
import { useMeQuery } from "../generated/graphql";
import { hardLogout } from "../services/auth";

const Errored = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  width: "100%"
}));

export default function Private({ children }: { children: React.ReactNode }) {
  const [{ data, fetching, error }] = useMeQuery();

  if (fetching)
    return (
      <Box height="100vh">
        <Spinner
          optionalNode={
            <Typography mt="16px">
              Data is being fetched from the server!
            </Typography>
          }
        />
      </Box>
    );

  if (error) {
    return (
      <Errored>
        Something went wrong! Please contact system administrator!
      </Errored>
    );
  }

  if (!data) {
    hardLogout();
    return null;
  }

  return <>{children}</>;
}
