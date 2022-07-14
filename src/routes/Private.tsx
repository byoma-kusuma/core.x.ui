import { Box, Typography } from "@mui/material";
import React from "react";
import Spinner from "../components/Spinner";
import { useMeQuery } from "../generated/graphql";
import { hardLogout } from "../services/auth";

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
      <Box
        display="flex"
        height="100vh"
        width="100%"
        alignItems="center"
        justifyContent="center"
      >
        Something went wrong! Please contact system administrator!
      </Box>
    );
  }

  if (!data) {
    hardLogout();
    return null;
  }

  return <>{children}</>;
}
