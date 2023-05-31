import * as React from "react";
import AccountPopover from "../../../components/AvatarPopover";
import ContactsPopover from "../../../components/ContactsPopover";
import LanguagePopover from "../../../components/LanguagePopover";
import NavigationBar from "../../../components/NavigationBar";
import NotificationsPopover from "../../../components/NotificationsPopover";
import { useMeQuery } from "../../../generated/graphql";
import { hardLogout } from "../../../services/auth";
import { getMemberFullName } from "../../../utils/member";
import { Box, Typography } from "@mui/material";

interface NavigationBarContainerProps {
  onHamburgerClick: () => void;
}

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

export default function NavigationBarContainer(
  props: NavigationBarContainerProps
) {
  const { onHamburgerClick } = props;

  const [{ data: user }] = useMeQuery({
    requestPolicy: "cache-only"
  });

  return (
    <div>
      <NavigationBar
        onHamburgerClick={onHamburgerClick}
        onSearch={(s) => console.log(s)}
        stackItemsRenderer={() => (
          <>
            <LanguagePopover />
            <NotificationsPopover />
            <ContactsPopover />
            {user && (
              <AccountPopover
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
            )}
          </>
        )}
      />
    </div>
  );
}
