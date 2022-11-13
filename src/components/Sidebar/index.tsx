import * as React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Box, Link, Drawer, Typography, Avatar } from "@mui/material";
import useResponsive from "../../hooks/useResponsive";
import Scrollbar from "../../components/Scrollbar";
import NavSection from "../NavSection";
import { NavigationItem } from "../../schemas/navigation";

const DRAWER_WIDTH = 280;

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    flexShrink: 0,
    width: DRAWER_WIDTH
  }
}));

const AccountStyle = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.grey[500_12]
}));

interface SidebarProps {
  isOpenSidebar: boolean;
  onCloseSidebar: () => void;
  navigationSchema: Array<NavigationItem>;
  currentUser: { fullName: string; role: string; link: string; avatar: string };
  menuLogoUrl: string;
}

export default function Sidebar(props: SidebarProps) {
  const {
    isOpenSidebar,
    onCloseSidebar,
    navigationSchema,
    currentUser,
    menuLogoUrl
  } = props;

  const { pathname } = useLocation();

  const isDesktop = useResponsive("up", "lg");

  React.useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column"
        }
      }}
    >
      <Box sx={{ px: 2.5, py: 3, display: "inline-flex" }}>
        <img src={menuLogoUrl} height="40px" width="40px" />
      </Box>

      <Box sx={{ mb: 4, mx: 2.5 }}>
        <Link underline="none" component={RouterLink} to="#">
          <AccountStyle>
            <Avatar src={currentUser.avatar} alt="photoURL" />
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: "text.primary" }}>
                {currentUser.fullName}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {currentUser.role}
              </Typography>
            </Box>
          </AccountStyle>
        </Link>
      </Box>

      <NavSection navConfig={navigationSchema} />
    </Scrollbar>
  );

  return (
    <RootStyle>
      {!isDesktop && (
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH }
          }}
        >
          {renderContent}
        </Drawer>
      )}

      {isDesktop && (
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: "background.default",
              borderRightStyle: "dashed"
            }
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </RootStyle>
  );
}
