import * as React from "react";
import { Button } from "@mui/material";
import PageWithHeader from "../../components/PageWithHeader";
import { useNavigate } from "react-router-dom";
import MembersListContainer from "./containers/MembersListContainer";

export default function Members() {
  const navigate = useNavigate();

  return (
    <PageWithHeader
      header="Members List"
      crumbs={[
        { label: "Members", route: "/app/members", key: "1" },
        { label: "List", route: "/", key: "2" }
      ]}
      actionButton={
        <Button
          variant="text"
          color="primary"
          size="small"
          onClick={() => navigate("/app/members/new")}
          data-testid="memberList-newMemberCreate"
        >
          Add a new member
        </Button>
      }
    >
      <MembersListContainer />
    </PageWithHeader>
  );
}
