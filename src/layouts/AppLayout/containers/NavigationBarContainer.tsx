import * as React from "react";
import { useNavigate } from "react-router-dom";
import AccountPopover from "../../../components/AccountPopover";
import ContactsPopover from "../../../components/ContactsPopover";
import LanguagePopover from "../../../components/LanguagePopover";
import NavigationBar from "../../../components/NavigationBar";
import NotificationsPopover from "../../../components/NotificationsPopover";
import { hardLogout } from "../../../services/auth";

interface NavigationBarContainerProps {
  onHamburgerClick: () => void;
}

export default function NavigationBarContainer(
  props: NavigationBarContainerProps
) {
  const { onHamburgerClick } = props;
  const navigate = useNavigate();

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
            <AccountPopover
              photoUrl="/static/mock-images/avatars/avatar_default.jpg"
              user="Amogh Rijal"
              userName="xamoghx@gmail.com"
              onLogout={() => {
                hardLogout();
              }}
            />
          </>
        )}
      />
    </div>
  );
}
