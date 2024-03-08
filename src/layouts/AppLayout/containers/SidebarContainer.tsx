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
        menuLogoUrl="/static/bk-logo-small.png"
        currentUser={{
          fullName:
            user?.me.member.firstName + " " + user?.me.member.lastName ||
            "User",
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
