import * as React from "react";
import {
  Box,
  CircularProgress,
  CircularProgressProps,
  Typography
} from "@mui/material";

interface SpinnerProps {
  isModuleLoader?: boolean;
  circularProgressProps?: CircularProgressProps;
  optionalNode?: React.ReactNode;
}

export default function Spinner(props: SpinnerProps) {
  const {
    isModuleLoader = false,
    circularProgressProps,
    optionalNode = <></>
  } = props;
  return (
    <Box
      height="100%"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <CircularProgress {...circularProgressProps} />
      {isModuleLoader && (
        <Typography sx={{ mt: "32px" }}>
          This section is being generated! Please wait!
        </Typography>
      )}
      {isModuleLoader && (
        <img
          src="/static/bk.png"
          height="80px"
          width="80px"
          style={{ marginTop: "16px" }}
        />
      )}
      {optionalNode}
    </Box>
  );
}
