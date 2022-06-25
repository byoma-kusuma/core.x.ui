import { useState } from "react";
import PropTypes from "prop-types";
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
  BoxProps
} from "@mui/material";
import Iconify from "../Iconify";
import { NavigationItem } from "../../types/Navgiation";

const ListItemStyles = (theme: Theme) => ({
  ...theme.typography.body2,
  height: 48,
  position: "relative",
  textTransform: "capitalize",
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius
});

const ListItemIconStyle = styled(ListItemIcon)({
  width: 22,
  height: 22,
  color: "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

NavItem.propTypes = {
  item: PropTypes.object,
  active: PropTypes.func
};

interface NavItemProps {
  item: NavigationItem;
  active: (path: string) => boolean;
}

function NavItem(props: NavItemProps) {
  const { item, active } = props;
  const theme = useTheme();

  const isActiveRoot = active(item.path);

  const { title, path, icon, info, children } = item;

  const [open, setOpen] = useState(isActiveRoot);

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
    >
      <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
      <ListItemText disableTypography primary={title} />
      {info && info}
    </ListItemButton>
  );
}

interface NavSectionProps extends BoxProps {
  navConfig: Array<NavigationItem>;
}

export default function NavSection(props: NavSectionProps) {
  const { navConfig, ...other } = props;

  const { pathname } = useLocation();

  const match = (path: string): boolean =>
    path ? !!matchPath({ path, end: false }, pathname) : false;

  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {navConfig.map((item) => (
          <NavItem key={item.title} item={item} active={match} />
        ))}
      </List>
    </Box>
  );
}
