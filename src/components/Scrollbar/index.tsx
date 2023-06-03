import * as React from "react";
import PropTypes from "prop-types";
import SimpleBarReact from "simplebar-react";
import { alpha, styled } from "@mui/material/styles";
import { Box, BoxProps, SxProps } from "@mui/material";

const RootStyle = styled("div")(() => ({
  flexGrow: 1,
  height: "100%",
  overflow: "hidden"
}));

const SimpleBarStyle = styled(SimpleBarReact)(({ theme }) => ({
  maxHeight: "100%",
  "& .simplebar-scrollbar": {
    "&:before": {
      backgroundColor: alpha(theme.palette.grey[600], 0.48)
    },
    "&.simplebar-visible:before": {
      opacity: 1
    }
  },
  "& .simplebar-track.simplebar-vertical": {
    width: 10
  },
  "& .simplebar-track.simplebar-horizontal .simplebar-scrollbar": {
    height: 6
  },
  "& .simplebar-mask": {
    zIndex: "inherit"
  }
}));

Scrollbar.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.object
};

export interface ScrollbarProps extends BoxProps {
  children: React.ReactNode;
  sx?: SxProps;
}

export default function Scrollbar(props: ScrollbarProps) {
  const { children, sx, ...other } = props;

  const userAgent =
    typeof navigator === "undefined" ? "SSR" : navigator.userAgent;

  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent
    );

  if (isMobile) {
    return (
      <Box sx={{ overflowX: "auto", ...sx }} {...other}>
        {children}
      </Box>
    );
  }

  return (
    <RootStyle>
      <SimpleBarStyle timeout={500} clickOnTrack={false} sx={sx}>
        {children}
      </SimpleBarStyle>
    </RootStyle>
  );
}
