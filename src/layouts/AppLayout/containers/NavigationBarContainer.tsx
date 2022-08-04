import * as React from "react";
import AccountPopover from "../../../components/AccountPopover";
import ContactsPopover from "../../../components/ContactsPopover";
import LanguagePopover from "../../../components/LanguagePopover";
import NavigationBar from "../../../components/NavigationBar";
import NotificationsPopover from "../../../components/NotificationsPopover";
import { useMeQuery } from "../../../generated/graphql";
import { hardLogout } from "../../../services/auth";
import { getMemberFullName } from "../../../utils/formatString";

interface NavigationBarContainerProps {
  onHamburgerClick: () => void;
}

export default function NavigationBarContainer(
  props: NavigationBarContainerProps
) {
  const { onHamburgerClick } = props;

  const [{ data }] = useMeQuery({
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
            {data && (
              <AccountPopover
                photoUrl={data.me.avatar}
                user={getMemberFullName(data.me.member)}
                userName={data.me.userName}
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
