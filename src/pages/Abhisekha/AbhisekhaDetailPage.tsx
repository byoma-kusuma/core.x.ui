import { Box, Typography } from "@mui/material";
import * as React from "react";
import { useParams } from "react-router-dom";
import PageWithHeader from "../../components/PageWithHeader";
import TabComponentRenderer from "../../components/TabComponentRenderer";
import { useAbhisekhaQuery } from "../../generated/graphql";
import AbhisekhaDetailsMemberContainer from "../../containers/abhisekha/AbhisekhaMembersContainer";
import AbhisekhaDetailsResourceContainer from "../../containers/abhisekha/AbhisekhaResourceContainer";

export default function AbhisekhaDetailPage() {
  const { id } = useParams();

  const [{ data, fetching, error: _ }] = useAbhisekhaQuery({
    variables: { abhisekhaId: Number(id) }
  });

  const thisAbhisekhaName = data?.abhisekha.name;
  const thisAbhisekhaDescription = data?.abhisekha.description;

  return (
    <PageWithHeader
      header={"Group Details"}
      loading={fetching}
      crumbs={[
        { label: "Groups", route: "/app/groups", key: "1" },
        { label: "Group Detail", route: "/", key: "2" }
      ]}
    >
      <Box mb={2}>
        <Typography variant="body1">{thisAbhisekhaName}</Typography>
        <Typography variant="body2">{thisAbhisekhaDescription}</Typography>
      </Box>
      <TabComponentRenderer
        schema={[
          {
            label: "Members",
            key: "Members",
            component: <AbhisekhaDetailsMemberContainer />
          },
          {
            label: "Resources",
            key: "Resources",
            component: <AbhisekhaDetailsResourceContainer />
          }
        ]}
      />
    </PageWithHeader>
  );
}
