import * as React from "react";
import AccountPopover from "../../../components/AccountPopover";
import ContactsPopover from "../../../components/ContactsPopover";
import LanguagePopover from "../../../components/LanguagePopover";
import NavigationBar from "../../../components/NavigationBar";
import NotificationsPopover from "../../../components/NotificationsPopover";
import { useMeQuery } from "../../../generated/graphql";
import { hardLogout } from "../../../services/auth";
import { getMemberFullName } from "../../../utils/member";

interface NavigationBarContainerProps {
  onHamburgerClick: () => void;
}

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
        stackItemsRenderer={() => (
          <>
            <LanguagePopover />
            <NotificationsPopover />
            <ContactsPopover />
            {user && (
              <AccountPopover
                photoUrl={user.me.avatar}
                user={getMemberFullName(user.me.member)}
                userName={user.me.userName}
                onLogout={() => {
                  hardLogout();
                }}
              />
            )}
          </>
        )}
      />
    </div>
  );
}
