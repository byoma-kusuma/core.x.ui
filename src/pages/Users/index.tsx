import * as React from "react";
import PageWithHeader from "components/PageWithHeader";
import UsersListContainer from "containers/user/UsersListContainer";

export default function Users() {
  return (
    <PageWithHeader
      header="Users"
      crumbs={[
        { label: "Users", route: "/app/users", key: "1" },
        { label: "List", route: "/", key: "2" }
      ]}
    >
      <UsersListContainer />
    </PageWithHeader>
  );
}
