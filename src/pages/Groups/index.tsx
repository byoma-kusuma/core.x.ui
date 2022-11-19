import { Button } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import PageWithHeader from "../../components/PageWithHeader";
import GroupsListContainer from "./containers/GroupsListContainer";

export default function Groups() {
  const navigate = useNavigate();
  return (
    <PageWithHeader
      header="Groups"
      crumbs={[
        { label: "Groups", route: "/app/groups", key: "1" },
        { label: "List", route: "/", key: "2" }
      ]}
      actionButton={
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/app/groups/new")}
        >
          New Group
        </Button>
      }
    >
      <GroupsListContainer />
    </PageWithHeader>
  );
}
