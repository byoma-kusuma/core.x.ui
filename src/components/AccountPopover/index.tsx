import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { alpha } from "@mui/material/styles";
import {
  Box,
  Divider,
  Typography,
  Stack,
  MenuItem,
  Avatar,
  IconButton
} from "@mui/material";
import MenuPopover from "../../components/MenuPopover";

const MENU_OPTIONS = [
  {
    label: "Home",
    icon: "eva:home-fill",
    linkTo: "/app/dashboard"
  },
  {
    label: "Profile",
    icon: "eva:person-fill",
    linkTo: "#"
  },
  { label: "Settings", icon: "eva:settings-2-fill", linkTo: "#" }
];

interface AccountPopoverProps {
  photoUrl: string;
  user: string;
  userName: string;
}

export default function AccountPopover(props: AccountPopoverProps) {
  const { photoUrl, user, userName } = props;

  const [anchorEl, setAnchorlEl] =
    React.useState<HTMLButtonElement | null>(null);

  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorlEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorlEl(null);
  };

  return (
    <>
      <IconButton
        className="hello"
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open
            ? {
                "&:before": {
                  zIndex: 1,
                  content: "''",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  position: "absolute",
                  bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8)
                }
              }
            : {})
        }}
      >
        <Avatar src={photoUrl} alt="photoURL" />
      </IconButton>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={anchorEl}
        onClose={handleClose}
        sx={{
          p: 0,
          mt: 1.5,
          ml: 0.75,
          "& .MuiMenuItem-root": {
            typography: "body2",
            borderRadius: 0.75
          }
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {user}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            {userName}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem
              key={option.label}
              to={option.linkTo}
              component={RouterLink}
              onClick={handleClose}
            >
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: "dashed" }} />

        <MenuItem onClick={handleClose} sx={{ m: 1 }}>
          Logout
        </MenuItem>
      </MenuPopover>
    </>
  );
}
