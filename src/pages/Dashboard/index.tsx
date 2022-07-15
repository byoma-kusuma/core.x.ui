import * as React from "react";
import CoolListA from "../../components/CoolList/abc";
import { faker } from "@faker-js/faker";
import { sample } from "lodash";

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
  name: faker.name.findName(),
  company: `${faker.company.companyName()} awerawfawefawa awe rawe awerawer`,
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
      <CoolListA
        headers={[
          {
            id: "name",
            label: "Name",
            alignRight: false
          },
          { id: "company", label: "Company", alignRight: false },
          {
            id: "role",
            label: "Role",
            alignRight: false
          },
          { id: "isVerified", label: "Verified", alignRight: false },
          { id: "status", label: "Status", alignRight: false },
          { id: "" }
        ]}
        defaultOrderKey="name"
        defaultOrderDirection="asc"
        onRequestSort={() => ({})}
        data={users}
        onRequestSelection={() => ({})}
      />
    </div>
  );
}
