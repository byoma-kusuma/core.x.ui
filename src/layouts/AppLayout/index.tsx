import * as React from "react";
import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import NavigationBarContainer from "./containers/NavigationBarContainer";
import SidebarContainer from "./containers/SidebarContainer";
import Spinner from "../../components/Spinner";
import { Box } from "@mui/material";
import { APPBAR_DESKTOP, APPBAR_MOBILE } from "../../components/NavigationBar";

const RootStyle = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden"
});

const MainStyle = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APPBAR_MOBILE + 24,
  [theme.breakpoints.up("lg")]: {
    paddingTop: APPBAR_DESKTOP + 24
  }
}));

export default function DashboardLayout() {
  const [open, setOpen] = React.useState(false);
  return (
    <RootStyle>
      <NavigationBarContainer onHamburgerClick={() => setOpen(true)} />
      <SidebarContainer
        isOpenSidebar={open}
        onCloseSidebar={() => setOpen(false)}
      />
      <MainStyle>
        <React.Suspense
          fallback={
            <Box mt="25vh">
              <Spinner isModuleLoader />
            </Box>
          }
        >
          <Outlet />
        </React.Suspense>
      </MainStyle>
    </RootStyle>
  );
}
