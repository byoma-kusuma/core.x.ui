import { Button } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import PageWithHeader from "../../components/PageWithHeader";
import ResourcesListContainer from "./containers/ResourceListContainer";

export default function Resources() {
  const navigate = useNavigate();
  return (
    <PageWithHeader
      header="Resources"
      crumbs={[
        { label: "Resources", route: "/app/resources", key: "1" },
        { label: "List", route: "/", key: "2" }
      ]}
      actionButton={
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/app/resources/new")}
        >
          New Resource
        </Button>
      }
    >
      <ResourcesListContainer />
    </PageWithHeader>
  );
}
