import * as React from "react";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import PageWithHeader from "../../components/PageWithHeader";
import GroupFormContainer from "../../containers/group/GroupFormContainer";

export default function CreateUpdateGroup() {
  const { id } = useParams();

  const isEditMode = Boolean(id);
  const pageTitle = isEditMode ? "Edit Group" : "Create new Group";
  const crumbTitle = isEditMode ? "Edit" : "Create new";

  return (
    <PageWithHeader
      header={pageTitle}
      crumbs={[
        { label: "Groups", route: "/app/groups", key: "1" },
        { label: crumbTitle, route: "/", key: "2" }
      ]}
    >
      <Grid container spacing={2}>
        <GroupFormContainer id={Number(id)} />
      </Grid>
    </PageWithHeader>
  );
}
