import { Button } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import PageWithHeader from "../../components/PageWithHeader";
import AbhisekhasListContainer from "../../containers/abhisekha/AbhisekhasListContainer";

export default function Abhisekhas() {
  const navigate = useNavigate();
  return (
    <PageWithHeader
      header="Abhisekhas"
      crumbs={[
        { label: "Abhisekhas", route: "/app/abhisekhas", key: "1" },
        { label: "List", route: "/", key: "2" }
      ]}
      actionButton={
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/app/abhisekhas/new")}
        >
          New Abhisekha
        </Button>
      }
    >
      <AbhisekhasListContainer />
    </PageWithHeader>
  );
}
