import {
  Avatar,
  Box,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography
} from "@mui/material";
import * as React from "react";
import CoolTable from "../../../components/CoolTable";
import Iconify from "../../../components/Iconify";
import Label from "../../../components/Label";
import GqlApiHandler from "../../../services/GqlApiHandler";
import {
  useGroupQuery,
  useUpdateGroupMutation
} from "../../../generated/graphql";
import { getMemberFullName } from "../../Members/utils";
import { omit } from "lodash";
import { useConfirm } from "material-ui-confirm";
import { useNavigate, useParams } from "react-router-dom";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { formatGroupMembersListData } from "../utils";
import GroupDetailMembersAddMemberContainer from "./GroupDetailMembersAddMemberContainer";
import ReactSlidingPane from "react-sliding-pane";

export default function GroupDetailMembersContainer() {
  const { id } = useParams();
  const confirm = useConfirm();
  const navigate = useNavigate();

  const [{ data, fetching, error }] = useGroupQuery({
    variables: { id: Number(id) }
  });

  const [, updateGroupMut] = useUpdateGroupMutation();

  const [openAddMemberPanel, setOpenAddMemberPanel] = React.useState(false);

  async function handleGroupUpdate(updatedMembers: Array<number>) {
    new GqlApiHandler(
      await updateGroupMut({
        updateGroupInput: {
          ...omit(data?.group, ["members", "createdAt", "__typename"]),
          memberIds: updatedMembers
        }
      })
    )
      .onSuccess(({ notiSuccess }) => {
        notiSuccess("Member Removed from the group!");
      })
      .onError(({ notiErr }) => notiErr());
  }

  function onMemberRemoveButtonClick(
    row: ReturnType<typeof formatGroupMembersListData>[0]
  ) {
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
        data?.group.members
          .filter((member) => member.id !== row.id)
          .map((member) => member.id) || []
      )
    );
  }

  const [showActions, setShowActions] = React.useState(false);
  const [showPanel, setShowPanel] = React.useState(false);

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
        onSelectActionButtonClick={() => setShowActions(true)}
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

      <Dialog
        open={showActions}
        keepMounted
        onClose={() => setShowActions(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Pick an action"}</DialogTitle>
        <DialogContent>
          <Box display="flex" justifyContent="space-between" p={2}>
            <Card
              elevation={6}
              sx={{
                borderRadius: 0,
                height: "160px",
                width: "160px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                ":hover": {
                  boxShadow: 20
                }
              }}
              onClick={() => {
                setShowPanel(true);
                setShowActions(false);
              }}
            >
              Email
            </Card>
            <Card
              elevation={6}
              sx={{
                borderRadius: 0,
                height: "160px",
                width: "160px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                ":hover": {
                  boxShadow: 20
                },
                ml: "32px"
              }}
              onClick={() => {
                setShowPanel(true);
                setShowActions(false);
              }}
            >
              SMS
            </Card>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowActions(false)} variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <ReactSlidingPane
        overlayClassName="sliding-pane-bkbds-overlay"
        className="sliding-pane-bkbds-root"
        isOpen={showPanel}
        title="Send Email/SMS"
        subtitle="Send Email/SMS to following members"
        width="800px"
        onRequestClose={() => setShowPanel(false)}
      >
        Work in progress
      </ReactSlidingPane>
    </div>
  );
}
