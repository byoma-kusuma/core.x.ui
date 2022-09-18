import * as React from "react";
import Sidebar from "../../../components/Sidebar";
import NavigationSchema from "../../../schemas/navigation";

interface SidebarContainerProps {
  isOpenSidebar: boolean;
  onCloseSidebar: () => void;
}

export default function SidebarContainer(props: SidebarContainerProps) {
  const { isOpenSidebar, onCloseSidebar } = props;

  return (
    <div>
      <Sidebar
        isOpenSidebar={isOpenSidebar}
        onCloseSidebar={onCloseSidebar}
        menuLogoUrl="/static/bk_t.png"
        currentUser={{
          fullName: "Amogh Rijal",
          avatar: "/static/mock-images/avatars/avatar_default.jpg",
          role: "Admin",
          link: "/app"
        }}
        navigationSchema={NavigationSchema}
      />
    </div>
  );
}
