import * as React from "react";
import { useParams } from "react-router-dom";
import PageWithHeader from "components/PageWithHeader";
import UserFormContainer from "containers/user/UserFormContainer";

export default function Member() {
  const { id } = useParams();

  const isEditMode = Boolean(id);
  const pageTitle = isEditMode ? "Edit User" : "Create new User";
  const crumbTitle = isEditMode ? "Edit" : "Create new";

  return (
    <PageWithHeader
      header={pageTitle}
      crumbs={[
        { label: "Members", route: "/app/members", key: "1" },
        { label: crumbTitle, route: "/", key: "2" }
      ]}
    >
      <UserFormContainer id={id ? Number(id) : undefined} />
    </PageWithHeader>
  );
}
