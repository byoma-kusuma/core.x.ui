import * as React from "react";
import Sidebar from "../../../components/Sidebar";

interface SidebarContainerProps {
  isOpenSidebar: boolean;
  onCloseSidebar: () => void;
}

export default function SidebarContainer(props: SidebarContainerProps) {
  const { isOpenSidebar, onCloseSidebar } = props;

  return (
    <div>
      <Sidebar isOpenSidebar={isOpenSidebar} onCloseSidebar={onCloseSidebar} />
    </div>
  );
}
