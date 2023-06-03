import {
  Avatar,
  Box,
  Button,
  IconButton,
  Stack,
  Typography
} from "@mui/material";
import * as React from "react";
import CoolTable from "components/CoolTable";
import Iconify from "components/Iconify";
import Label from "components/Label";
import GqlApiHandler from "services/GqlApiHandler";
import {
  GroupQuery,
  useGroupQuery,
  useUpdateGroupMutation
} from "generated/graphql";
import { useConfirm } from "material-ui-confirm";
import { useNavigate, useParams } from "react-router-dom";
import "react-sliding-pane/dist/react-sliding-pane.css";
import GroupDetailMembersAddMemberContainer from "./GroupAddMemberContainer";
import ActionPopoup from "components/ActionPopup";
import { getMemberFullName } from "utils/member";
import { omit } from "lodash";
import SendEmailPane from "pages/CommonComponents/SendEmailPane";

export function formatGroupMembersListData(data: GroupQuery | undefined) {
  if (!data) return [];
  return data.group.groupMembers.map((r) => ({
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

export default function GroupDetailMembersContainer() {
  const { id } = useParams();
  const confirm = useConfirm();
  const navigate = useNavigate();

  const [{ data, fetching, error }] = useGroupQuery({
    variables: { id: Number(id) }
  });

  const [, updateGroupMut] = useUpdateGroupMutation();

  const [openAddMemberPanel, setOpenAddMemberPanel] = React.useState(false);
  const [showActions, setShowActions] = React.useState(false);
  const [showAddEmail, setShowAddEmail] = React.useState(false);
  const [selectedMemberIds, setSelectedMemberIds] = React.useState<
    Array<number>
  >([]);

  const handleGroupUpdate = async (updatedMembers: Array<number>) => {
    new GqlApiHandler(
      await updateGroupMut({
        updateGroupInput: {
          ...omit(data?.group, ["groupMembers", "createdAt", "__typename"]),
          memberIds: updatedMembers
        }
      })
    )
      .onSuccess(({ notiSuccess }) => {
        notiSuccess("Member Removed from the group!");
      })
      .onError(({ notiErr }) => notiErr());
  };

  const onMemberRemoveButtonClick = (
    row: ReturnType<typeof formatGroupMembersListData>[0]
  ) => {
    confirm({
      description: (
        <Typography>
          Are you sure you want to remove
          <b> {getMemberFullName(row)}</b> from this group?
        </Typography>
      ),
      title: "Delete Confirmation",
      confirmationButtonProps: {
        color: "primary",
        variant: "contained"
      },
      confirmationText: "Confirm"
    }).then(() =>
      handleGroupUpdate(
        data?.group.groupMembers
          .filter((groupMember) => groupMember.member.id !== row.id)
          .map((groupMember) => groupMember.member.id) || []
      )
    );
  };

  return (
    <div>
      <Box display="flex" justifyContent="flex-end" mt={-2} mb={1}>
        <Button
          variant="contained"
          color="success"
          onClick={() => navigate(`/app/groups/${id}`)}
        >
          Edit Group Details
        </Button>
        <Button
          onClick={() => setOpenAddMemberPanel(true)}
          variant="contained"
          sx={{ ml: 1 }}
        >
          Add Members To This Group
        </Button>
      </Box>
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
        data={formatGroupMembersListData(data)}
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
          },
          {
            id: "opt1",
            headerLabel: "",
            formatter(r) {
              return (
                <Box display="flex" justifyContent="flex-end">
                  <IconButton onClick={() => onMemberRemoveButtonClick(r)}>
                    <Iconify
                      icon="eva:person-remove-outline"
                      sx={{ color: "text.disabled", width: 20, height: 20 }}
                    />
                  </IconButton>
                </Box>
              );
            }
          }
        ]}
      />

      <GroupDetailMembersAddMemberContainer
        open={openAddMemberPanel}
        handleClose={() => setOpenAddMemberPanel(false)}
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
