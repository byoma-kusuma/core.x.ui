import { Box, Typography } from "@mui/material";
import AvatarPopover from "components/AvatarPopover";
import { useMeQuery } from "generated/graphql";
import { hardLogout } from "services/auth";
import { getMemberFullName } from "utils/member";

import * as React from "react";

const MENU_OPTIONS = [
  {
    label: "Home",
    icon: "eva:home-fill",
    linkTo: "/app"
  }
  // {
  //   label: "Profile",
  //   icon: "eva:person-fill",
  //   linkTo: "#"
  // },
  // { label: "Settings", icon: "eva:settings-2-fill", linkTo: "#" }
];

export default function AccountPopoverContainer() {
  const [{ data: user }] = useMeQuery({
    requestPolicy: "cache-only"
  });

  if (!user) return null;

  return (
    <AvatarPopover
      photoUrl={user.me.member.photo ?? "/static/bk-logo-small.png"}
      schema={[
        {
          type: "custom",
          element: (
            <Box sx={{ my: 2, px: 2.5 }}>
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
