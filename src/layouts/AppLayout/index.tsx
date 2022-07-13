import * as React from "react";
import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import NavigationBarContainer from "./containers/NavigationBarContainer";
import SidebarContainer from "./containers/SidebarContainer";
import Spinner from "../../components/Spinner";
import { Box } from "@mui/material";

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden"
});

const MainStyle = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(2),
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  [theme.breakpoints.up("lg")]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
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
