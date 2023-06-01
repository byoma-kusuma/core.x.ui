import * as React from "react";
import AvatarPopover from "../../../components/AvatarPopover";
import { useMeQuery } from "../../../generated/graphql";
import { Box, Typography } from "@mui/material";
import { hardLogout } from "../../../services/auth";
import { getMemberFullName } from "../../../utils/member";

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

export default function AccountPopoverContainer() {
  const [{ data: user }] = useMeQuery({
    requestPolicy: "cache-only"
  });
  if (!user) return null;
  return (
    <AvatarPopover
      photoUrl={user.me.avatar}
      schema={[
        {
          type: "custom",
          element: (
            <Box sx={{ my: 1.5, px: 2.5 }}>
              <Typography variant="subtitle2" noWrap>
                {getMemberFullName(user.me.member)}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
                noWrap
              >
                {user.me.userName}
              </Typography>
            </Box>
          )
        },
        {
          type: "divider"
        },
        ...MENU_OPTIONS.map((opt) => ({
          ...opt,
          type: "menu" as const
        })),
        {
          type: "divider"
        },
        {
          type: "menu",
          label: "Logout",
          onClick: hardLogout
        }
      ]}
    />
  );
}
