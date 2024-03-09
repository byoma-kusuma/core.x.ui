import * as React from "react";
import Sidebar from "components/Sidebar";
import { useMeQuery } from "generated/graphql";
import navConfig from "schemas/navigation";

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
          avatar: "/static/bk-logo-small.png",
          role: "Member",
          link: "/app"
        }}
        navigationSchema={navConfig}
      />
    </div>
  );
}
