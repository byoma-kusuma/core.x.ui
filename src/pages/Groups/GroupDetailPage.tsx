import { Box, Typography } from "@mui/material";
import * as React from "react";
import { useParams } from "react-router-dom";
import PageWithHeader from "../../components/PageWithHeader";
import TabComponentRenderer from "../../components/TabComponentRenderer";
import { useGroupQuery } from "../../generated/graphql";
import GroupDetailMembersContainer from "../../containers/group/GroupMembersContainer";

export default function GroupDetail() {
  const { id } = useParams();

  const [{ data, fetching, error: _ }] = useGroupQuery({
    variables: { id: Number(id) }
  });

  const thisGroupName = data?.group.name;
  const thisGroupDescription = data?.group.description;

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
        <Typography variant="body1">{thisGroupName}</Typography>
        <Typography variant="body2">{thisGroupDescription}</Typography>
      </Box>
      <TabComponentRenderer
        schema={[
          {
            label: "Members",
            key: "Members",
            component: <GroupDetailMembersContainer />
          },
          {
            label: "Resources",
            key: "Resources",
            component: <div>Hiii</div>
          }
        ]}
      />
    </PageWithHeader>
  );
}
