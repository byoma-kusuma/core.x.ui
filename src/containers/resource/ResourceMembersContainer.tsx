import { Avatar, Stack, Typography } from "@mui/material";
import * as React from "react";
import CoolTable from "../../components/CoolTable";
import Label from "../../components/Label";
import GqlApiHandler from "../../services/GqlApiHandler";
import { ResourceQuery, useResourceQuery } from "../../generated/graphql";
import { useParams } from "react-router-dom";
import "react-sliding-pane/dist/react-sliding-pane.css";
import ActionPopoup from "../../components/ActionPopup";
import { getMemberFullName } from "../../utils/member";
import SendEmailPane from "../../pages/CommonComponents/SendEmailPane";

export function formatResourceMembersListData(data: ResourceQuery | undefined) {
  if (!data) return [];
  return data.resource.resourceMembers.map((r) => ({
    ...r.member,
    fullName: getMemberFullName(r.member),
    combinedPhone:
      r.member.phoneLand && r.member.phoneMobile
        ? `${r.member.phoneMobile}, ${r.member.phoneLand}`
        : r.member.phoneMobile || r.member.phoneLand,
    userName: r.member.user?.userName,
    userStatus: r.member.user?.status
  }));
}

export default function ResourceDetailsMemberContainer() {
  const { id } = useParams();

  const [{ data, fetching, error }] = useResourceQuery({
    variables: { resourceId: Number(id) }
  });

  const [showActions, setShowActions] = React.useState(false);
  const [showAddEmail, setShowAddEmail] = React.useState(false);
  const [selectedMemberIds, setSelectedMemberIds] = React.useState<
    Array<number>
  >([]);

  return (
    <div>
      <CoolTable
        error={GqlApiHandler.getErrorMessage(error)}
        loading={fetching}
        tableHeight="calc(100vh - 400px)"
        defaultOrderKey="fullName"
        defaultOrderDirection="asc"
        onSelectActionButtonClick={(dataIds) => {
          setShowActions(true);
          setSelectedMemberIds(dataIds);
        }}
        data={formatResourceMembersListData(data)}
        filterSchema={[{ id: 1, label: "All", filterFn: (data) => data }]}
        dataSchema={[
          {
            id: "fullName",
            headerLabel: "Name",
            formatter({ fullName, photo }) {
              return (
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Avatar src={photo || ""} />
                  <Typography variant="subtitle2">{fullName}</Typography>
                </Stack>
              );
            }
          },
          { id: "email", headerLabel: "Email", placeholder: "-" },
          {
            id: "centre",
            headerLabel: "Centre",
            placeholder: "-",
            formatter({ centre }) {
              return (
                <Label
                  label={centre?.displayText}
                  type="semi-rounded"
                  sx={{ minWidth: "60px" }}
                />
              );
            }
          },
          {
            id: "combinedPhone",
            headerLabel: "Phone",
            placeholder: "-"
          },
          {
            id: "active",
            headerLabel: "Status",
            formatter({ active }) {
              return (
                <Label
                  label={active ? "Active" : "Inactive"}
                  type="semi-rounded"
                  color={active ? "success" : "error"}
                  sx={{ minWidth: "60px" }}
                />
              );
            }
          }
        ]}
      />

      <ActionPopoup
        open={showActions}
        handleClose={() => setShowActions(false)}
        actionItems={[
          {
            name: "Email",
            onClick: () => setShowAddEmail(true)
          },
          {
            name: "SMS",
            onClick: () => ({})
          }
        ]}
      />

      <SendEmailPane
        open={showAddEmail}
        handleClose={() => setShowAddEmail(false)}
        selectedMemberIds={selectedMemberIds}
      />
    </div>
  );
}
