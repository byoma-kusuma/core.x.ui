import { Box, Typography } from "@mui/material";
import * as React from "react";
import { useParams } from "react-router-dom";
import PageWithHeader from "../../components/PageWithHeader";
import TabComponentRenderer from "../../components/TabComponentRenderer";
import { useResourceQuery } from "../../generated/graphql";
import ResourceDetailsAbhisekhaContainer from "./containers/ResourceDetailAbhisekhaContainer";
import ResourceDetailsEventContainer from "./containers/ResourceDetailEventContainer";
import ResourceDetailsMemberContainer from "./containers/ResourceDetailMemberContainer";

export default function ResourceDetailPage() {
  const { id } = useParams();

  const [{ data, fetching, error: _ }] = useResourceQuery({
    variables: { resourceId: Number(id) }
  });

  const thisResourceName = data?.resource.name;
  const thisResourceDescription = data?.resource.description;

  return (
    <PageWithHeader
      header={"Resource Details"}
      loading={fetching}
      crumbs={[
        { label: "Resources", route: "/app/groups", key: "1" },
        { label: "Resource Detail", route: "/", key: "2" }
      ]}
    >
      <Box mb={2}>
        <Typography variant="body1">{thisResourceName}</Typography>
        <Typography variant="body2">{thisResourceDescription}</Typography>
      </Box>
      <TabComponentRenderer
        schema={[
          {
            label: "Members",
            key: "Members",
            component: <ResourceDetailsMemberContainer />
          },
          {
            label: "Events",
            key: "Events",
            component: <ResourceDetailsEventContainer />
          },
          {
            label: "Abhisekhas",
            key: "Abhisekhas",
            component: <ResourceDetailsAbhisekhaContainer />
          }
        ]}
      />
    </PageWithHeader>
  );
}
