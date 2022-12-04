import * as React from "react";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import PageWithHeader from "../../components/PageWithHeader";
import MemberFormContainer from "./containers/MemberFormContainer";

const PAGE_ELEMENTS_HEIGHT = 520;

export default function Member() {
  const { id } = useParams();

  const isEditMode = Boolean(id);
  const pageTitle = isEditMode ? "Edit Member" : "Create new Member";
  const crumbTitle = isEditMode ? "Edit" : "Create new";

  return (
    <PageWithHeader
      header={pageTitle}
      crumbs={[
        { label: "Members", route: "/app/members", key: "1" },
        { label: crumbTitle, route: "/", key: "2" }
      ]}
    >
      <Grid container spacing={2}>
        <MemberFormContainer
          height={PAGE_ELEMENTS_HEIGHT}
          id={id ? Number(id) : undefined}
        />
      </Grid>
    </PageWithHeader>
  );
}
