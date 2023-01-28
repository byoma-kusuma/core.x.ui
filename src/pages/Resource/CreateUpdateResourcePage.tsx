import * as React from "react";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import PageWithHeader from "../../components/PageWithHeader";
import ResourceFormContainer from "./containers/ResourceFormContainer";

export default function CreateUpdateResourcePage() {
  const { id } = useParams();

  const isEditMode = Boolean(id);
  const pageTitle = isEditMode ? "Edit Resource" : "Create New Resource";
  const crumbTitle = isEditMode ? "Edit" : "Create new";

  return (
    <PageWithHeader
      header={pageTitle}
      crumbs={[
        { label: "Resources", route: "/app/resources", key: "1" },
        { label: crumbTitle, route: "/", key: "2" }
      ]}
    >
      <Grid container spacing={2}>
        <ResourceFormContainer id={Number(id)} />
      </Grid>
    </PageWithHeader>
  );
}
