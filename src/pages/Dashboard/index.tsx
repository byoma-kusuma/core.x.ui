import * as React from "react";
import CoolTable from "../../components/CoolTable";
import { faker } from "@faker-js/faker";
import { sample, startCase } from "lodash";
import { Avatar, Stack, Typography } from "@mui/material";
import Label from "../../components/Label";

const users = [...Array(20)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: "/static/mock-images/avatars/avatar_default.jpg",
  name: `${faker.name.findName()} awer aweraweraw era werawer awer`,
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

export default function Dashboard() {
  return (
    <div>
      <CoolTable
        loading={false}
        defaultOrderKey="name"
        defaultOrderDirection="asc"
        data={users.map((x) => ({ ...x, z: { y: "hello" } }))}
        dataSchema={[
          { id: "z", headerLabel: "ZError" },
          {
            id: "id",
            headerLabel: "ID"
          },
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
          }
        ]}
        onRequestSelection={(e, selectedIds) => {
          console.log("fromabove", selectedIds);
        }}
        onRequestSort={(e, prop, dir) => {
          console.log(prop, dir);
        }}
      />
    </div>
  );
}
