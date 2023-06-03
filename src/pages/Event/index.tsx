import { Button } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import PageWithHeader from "components/PageWithHeader";

export default function Events() {
  const navigate = useNavigate();
  return (
    <PageWithHeader
      header="Events"
      crumbs={[
        { label: "Events", route: "/app/events", key: "1" },
        { label: "List", route: "/", key: "2" }
      ]}
      actionButton={
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/app/events/new")}
        >
          Create New Event
        </Button>
      }
    >
      Events page
    </PageWithHeader>
  );
}
