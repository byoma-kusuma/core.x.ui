import * as React from "react";
import NavigationBar from "../../../components/NavigationBar";
import NotificationsPopover from "../../../components/NotificationsPopover";
import LanguagePopoverContainer from "./LanguagePopoverContainer";
import AccountPopoverContainer from "./AccountPopoverContainer";

interface NavigationBarContainerProps {
  onHamburgerClick: () => void;
}

export default function NavigationBarContainer(
  props: NavigationBarContainerProps
) {
  const { onHamburgerClick } = props;

  return (
    <div>
      <NavigationBar
        onHamburgerClick={onHamburgerClick}
        onSearch={(s) => console.log(s)}
        stackItemsRenderer={() => (
          <>
            <LanguagePopoverContainer />
            <NotificationsPopover />
            <AccountPopoverContainer />
          </>
        )}
      />
    </div>
  );
}
