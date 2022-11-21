import * as React from "react";
import Sidebar from "../../../components/Sidebar";
import NavigationSchema from "../../../schemas/navigation";
import { useMeQuery } from "../../../generated/graphql";

interface SidebarContainerProps {
  isOpenSidebar: boolean;
  onCloseSidebar: () => void;
}

export default function SidebarContainer(props: SidebarContainerProps) {
  const { isOpenSidebar, onCloseSidebar } = props;
  const [{ data: user }] = useMeQuery({
    requestPolicy: "cache-only"
  });

  return (
    <div>
      <Sidebar
        isOpenSidebar={isOpenSidebar}
        onCloseSidebar={onCloseSidebar}
        menuLogoUrl="/static/bk_t.png"
        currentUser={{
          fullName: user?.me.userName || "User",
          avatar:
            user?.me.avatar || "/static/mock-images/avatars/avatar_default.jpg",
          role: "TBD",
          link: "/app"
        }}
        navigationSchema={NavigationSchema}
      />
    </div>
  );
}
