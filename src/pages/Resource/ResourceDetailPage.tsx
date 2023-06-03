import { Box, Typography } from "@mui/material";
import PageWithHeader from "components/PageWithHeader";
import TabComponentRenderer from "components/TabComponentRenderer";
import ResourceDetailsAbhisekhaContainer from "containers/resource/ResourceAbhisekhasContainer";
import ResourceDetailsEventContainer from "containers/resource/ResourceEventsContainer";
import ResourceDetailsMemberContainer from "containers/resource/ResourceMembersContainer";
import { useResourceQuery } from "generated/graphql";
import * as React from "react";
import { useParams } from "react-router-dom";

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
