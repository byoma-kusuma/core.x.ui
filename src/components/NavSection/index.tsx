import * as React from "react";
import {
  NavLink as RouterLink,
  matchPath,
  useLocation
} from "react-router-dom";
import { alpha, useTheme, styled } from "@mui/material/styles";
import {
  Box,
  List,
  Collapse,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Theme,
  BoxProps,
  Typography
} from "@mui/material";
import Iconify from "../Iconify";
import { NavigationItem } from "../../schemas/navigation";

const ListItemStyles = (theme: Theme) => ({
  ...theme.typography.body2,
  height: 48,
  position: "relative",
  textTransform: "capitalize",
  color: theme.palette.text.secondary,
  borderRadius: "8px"
});

const ListItemIconStyle = styled(ListItemIcon)({
  width: 22,
  height: 22,
  color: "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

interface NavItemProps {
  item: NavigationItem;
  active: (path: string) => boolean;
}

function NavItem(props: NavItemProps) {
  const { item, active } = props;
  const theme = useTheme();

  const isActiveRoot = active(item.path);

  const { title, path, icon, info, children } = item;

  const [open, setOpen] = React.useState(isActiveRoot);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const activeRootStyle = {
    color: "primary.main",
    fontWeight: "fontWeightMedium",
    bgcolor: alpha(
      theme.palette.primary.main,
      theme.palette.action.selectedOpacity
    )
  };

  const activeSubStyle = {
    color: "text.primary",
    fontWeight: "fontWeightMedium"
  };

  if (children) {
    return (
      <>
        <ListItemButton
          disableGutters
          onClick={handleOpen}
          sx={(theme) => ({
            ...ListItemStyles(theme),
            ...(isActiveRoot && activeRootStyle)
          })}
          data-testid={`sidebar=${title}`}
        >
          <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
          <ListItemText disableTypography primary={title} />
          {info && info}
          <Iconify
            icon={
              open
                ? "eva:arrow-ios-downward-fill"
                : "eva:arrow-ios-forward-fill"
            }
            sx={{ width: 16, height: 16, ml: 1 }}
          />
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children.map((item) => {
              const { title, path } = item;
              const isActiveSub = active(path);

              return (
                <ListItemButton
                  key={title}
                  component={RouterLink}
                  to={path}
                  sx={(theme) => ({
                    ...ListItemStyles(theme),
                    ...(isActiveSub && activeSubStyle)
                  })}
                  data-testid={`sidebar-children-${title}`}
                >
                  <ListItemIconStyle>
                    <Box
                      component="span"
                      sx={{
                        width: 4,
                        height: 4,
                        display: "flex",
                        borderRadius: "50%",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "text.disabled",
                        transition: (theme) =>
                          theme.transitions.create("transform"),
                        ...(isActiveSub && {
                          transform: "scale(2)",
                          bgcolor: "primary.main"
                        })
                      }}
                      data-testid="helloworld"
                    />
                  </ListItemIconStyle>
                  <ListItemText disableTypography primary={title} />
                </ListItemButton>
              );
            })}
          </List>
        </Collapse>
      </>
    );
  }

  return (
    <ListItemButton
      disableGutters
      component={RouterLink}
      to={path}
      sx={(theme) => ({
        ...ListItemStyles(theme),
        ...(isActiveRoot && activeRootStyle)
      })}
      data-testid={"sidebar-${title}"}
    >
      <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
      <ListItemText disableTypography primary={title} />
      {info && info}
    </ListItemButton>
  );
}

export interface NavSectionProps extends BoxProps {
  navConfig: Array<NavigationItem>;
}

export default function NavSection(props: NavSectionProps) {
  const { navConfig, ...other } = props;

  const { pathname } = useLocation();

  const match = (path: string): boolean =>
    path ? !!matchPath({ path, end: false }, pathname) : false;

  return (
    <Box {...other}>
      <List disablePadding sx={{ px: 2 }}>
        {navConfig.map((item) => (
          <Box key={item.title}>
            {item.type === "grouper" ? (
              <Box pt="16px" ml="20px" pb="4px">
                <Typography variant="overline">{item.title}</Typography>
              </Box>
            ) : (
              <Box py="4px">
                <NavItem item={item} active={match} />
              </Box>
            )}
          </Box>
        ))}
      </List>
    </Box>
  );
}
