import NavigationBar from "components/NavigationBar";
import AccountPopoverContainer from "./AccountPopoverContainer";
// import LanguagePopoverContainer from "./LanguagePopoverContainer";
// import NotificationsPopover from "components/NotificationsPopover";
import * as React from "react";

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
        stackItemsRenderer={() => (
          <>
            {/* <LanguagePopoverContainer />
            <NotificationsPopover /> */}
            <AccountPopoverContainer />
          </>
        )}
      />
    </div>
  );
}
