import * as React from "react";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import PageWithHeader from "components/PageWithHeader";
import AbhisekhaFormContainer from "containers/abhisekha/AbhisekhaFormContainer";

export default function CreateUpdateAbhisekhaPage() {
  const { id } = useParams();

  const isEditMode = Boolean(id);
  const pageTitle = isEditMode ? "Edit Abhisekha" : "Create New Abhisekha";
  const crumbTitle = isEditMode ? "Edit" : "Create new";

  return (
    <PageWithHeader
      header={pageTitle}
      crumbs={[
        { label: "Abhisekhas", route: "/app/abhisekhas", key: "1" },
        { label: crumbTitle, route: "/", key: "2" }
      ]}
    >
      <Grid container spacing={2}>
        <AbhisekhaFormContainer id={Number(id)} />
      </Grid>
    </PageWithHeader>
  );
}
