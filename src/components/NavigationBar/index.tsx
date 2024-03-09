import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import { Box, Stack, AppBar, Toolbar, IconButton } from "@mui/material";
import Iconify from "components/Iconify";

const DRAWER_WIDTH = 200;
export const APPBAR_MOBILE = 0;
export const APPBAR_DESKTOP = 0;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)", // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  [theme.breakpoints.up("lg")]: {
    width: `calc(100% - ${DRAWER_WIDTH + 1}px)`
  }
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  margin: theme.spacing(0, 1, 0, 1),
  padding: theme.spacing(0, 1, 0, 1),
  [theme.breakpoints.only("sm")]: {
    padding: theme.spacing(0, 5)
  }
}));

export interface NavigationBarProps {
  onHamburgerClick: () => void;
  stackItemsRenderer: () => React.ReactNode;
}

export default function NavigationBar(props: NavigationBarProps) {
  const { onHamburgerClick, stackItemsRenderer } = props;
  return (
    <RootStyle>
      <ToolbarStyle>
        <IconButton
          onClick={onHamburgerClick}
          sx={{ mr: 1, color: "text.primary", display: { lg: "none" } }}
        >
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>

        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          alignItems="center"
          spacing={{ xs: 0.5, sm: 1.5 }}
        >
          {stackItemsRenderer()}
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  );
}
