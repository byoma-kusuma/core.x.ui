import { Grid, Typography } from "@mui/material";
import * as React from "react";
import { useParams } from "react-router-dom";
import PageWidthHeader from "../../components/PageWithHeader";
import MemberFormContainer from "./containers/MemberFormContainer";
import MemberPhotoUploadContainer from "./containers/MemberPhotoUploadContainer";

const PAGE_ELEMENTS_HEIGHT = 520;

export default function Member() {
  const { id } = useParams();

  const isEditMode = Boolean(id);
  const pageTitle = isEditMode ? "Edit Member" : "Create new Member";
  const crumbTitle = isEditMode ? "Edit" : "Create new";

  return (
    <PageWidthHeader
      header={pageTitle}
      crumbs={[
        { label: "Members", route: "/app/members", key: "1" },
        { label: crumbTitle, route: "/", key: "2" }
      ]}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <MemberPhotoUploadContainer
            height={PAGE_ELEMENTS_HEIGHT}
            memberId={id}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={8}>
          <MemberFormContainer height={PAGE_ELEMENTS_HEIGHT} id={id} />
        </Grid>
      </Grid>
    </PageWidthHeader>
  );
}
