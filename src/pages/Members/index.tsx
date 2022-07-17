import * as React from "react";
import CoolTable from "../../components/CoolTable";
import { faker } from "@faker-js/faker";
import { sample, startCase } from "lodash";
import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import Label from "../../components/Label";
import PageWidthHeader from "../../components/PageWithHeader";

const users = [...Array(100000)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: "/static/mock-images/avatars/avatar_default.jpg",
  name: `${faker.name.findName()}`,
  company: `${faker.company.companyName()}`,
  isVerified: faker.datatype.boolean(),
  status: sample(["active", "banned"]),
  role: sample([
    "Leader",
    "Hr Manager",
    "UI Designer",
    "UX Designer",
    "UI/UX Designer",
    "Project Manager",
    "Backend Developer",
    "Full Stack Designer",
    "Front End Developer",
    "Full Stack Developer"
  ])
}));

export default function Members() {
  return (
    <PageWidthHeader
      header="Members"
      crumbs={[
        { label: "Members", route: "/app/members", key: "1" },
        { label: "List", route: "/", key: "2" }
      ]}
      actionButton={
        <Button
          variant="contained"
          //   color="success"
          sx={() => ({ color: "white", backgroundColor: "success.dark" })}
          size="medium"
        >
          New Member
        </Button>
      }
    >
      <CoolTable
        loading={false}
        tableHeight="calc(100vh - 400px)"
        defaultOrderKey="name"
        defaultOrderDirection="asc"
        onSelectActionButtonClick={(data) => console.log(data)}
        data={users}
        filterSchema={[
          { id: 1, label: "All", filterFn: (data) => data },
          {
            id: 2,
            label: "Verified",
            filterFn: (data) => data.filter((datum) => datum.isVerified)
          },
          {
            id: 3,
            label: "Not Verified",
            filterFn: (data) => data.filter((datum) => !datum.isVerified)
          },
          {
            id: 4,
            label: "Banned",
            filterFn: (data) =>
              data.filter((datum) => datum.status === "banned")
          }
        ]}
        dataSchema={[
          {
            id: "name",
            headerLabel: "Name",
            formatter: ({ avatarUrl, name }) => (
              <Stack direction="row" alignItems="center" spacing={2}>
                <Avatar src={avatarUrl} />
                <Typography variant="subtitle2">{name}</Typography>
              </Stack>
            )
          },
          {
            id: "company",
            headerLabel: "Company"
          },
          {
            id: "isVerified",
            headerLabel: "Verified",
            formatter: ({ isVerified }) => (
              <Label
                label={startCase(isVerified.toString())}
                type="semi-rounded"
                color={isVerified ? "success" : "error"}
                sx={{ minWidth: "60px" }}
              />
            )
          },
          { id: "role", headerLabel: "Role" },
          {
            id: "status",
            headerLabel: "Status",
            formatter: ({ status }) => (
              <Label
                label={startCase(status)}
                type="semi-rounded"
                color={status === "active" ? "success" : "error"}
              />
            )
          },
          {
            id: "opt1",
            headerLabel: "Option1",
            formatter: () => "option1"
          },
          {
            id: "opt2",
            headerLabel: "Option2",
            formatter: () => "option2"
          }
        ]}
        onRequestSelection={(e, selectedIds) => {
          console.log("fromabove", null);
        }}
        onRequestSort={(e, prop, dir) => {
          console.log(prop, dir);
        }}
      />
    </PageWidthHeader>
  );
}
