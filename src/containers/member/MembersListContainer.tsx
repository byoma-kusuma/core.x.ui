import {
  Avatar,
  Box,
  IconButton,
  Stack,
  Tooltip,
  Typography
} from "@mui/material";
import CoolTable from "components/CoolTable";
import Iconify from "components/Iconify";
import Label from "components/Label";
import {
  MembersQuery,
  useDeleteMemberMutation,
  useMembersQuery
} from "generated/graphql";
import { useConfirm } from "material-ui-confirm";
import { useNavigate } from "react-router-dom";
import GqlApiHandler from "services/GqlApiHandler";
import { getMemberFullName } from "utils/member";
import * as React from "react";
import SendEmailPane from "pages/CommonComponents/SendEmailPane";
import ActionPopoup from "components/ActionPopup";

export function formatMemberListData(data: MembersQuery | undefined) {
  if (!data) return [];
  return data.members.map((r) => ({
    ...r,
    fullName: getMemberFullName(r),
    combinedPhone:
      r.phoneLand && r.phoneMobile
        ? `${r.phoneMobile}, ${r.phoneLand}`
        : r.phoneMobile || r.phoneLand,
    userName: r.user?.userName,
    userStatus: r.user?.status
  }));
}

export default function MembersListContainer() {
  const [{ data, fetching, error }] = useMembersQuery();

  const [, deleteMemberMut] = useDeleteMemberMutation();

  const confirm = useConfirm();
  const navigate = useNavigate();
  const [showActions, setShowActions] = React.useState(false);
  const [showAddEmail, setShowAddEmail] = React.useState(false);
  const [selectedMemberIds, setSelectedMemberIds] = React.useState<
    Array<number>
  >([]);

  const handleMemberDelete = (id: number, name: string) => {
    confirm({
      description: (
        <>
          <Typography>
            Are you sure you want to remove <b>{name}</b> from member?
          </Typography>
          <Typography variant="subtitle2" sx={{ mt: "16px" }}>
            Note: Confirming this action will remove the user associated with
            this member as well.
          </Typography>
        </>
      ),
      title: "Delete Confirmation",
      confirmationButtonProps: {
        color: "primary",
        variant: "contained"
      },
      confirmationText: "Confirm"
    }).then(async () => {
      new GqlApiHandler(
        await deleteMemberMut({
          id
        })
      )
        .onSuccess(({ notiSuccess }) =>
          notiSuccess("Successfully deleted member")
        )
        .onError(({ notiErr }) => {
          notiErr();
        });
    });
  };

  const handleMemberEdit = (id: number) => {
    navigate(`/app/members/${id}`);
  };

  return (
    <div>
      <CoolTable
        error={GqlApiHandler.getErrorMessage(error)}
        loading={fetching}
        tableHeight="calc(100vh - 280px)"
        defaultOrderKey="firstName"
        defaultOrderDirection="asc"
        data={formatMemberListData(data)}
        filterSchema={[
          { id: 1, label: "All", filterFn: (data) => data },
          {
            id: 2,
            label: "Members",
            filterFn: (data) => data.filter((item) => item.isMember === true)
          },
          {
            id: 3,
            label: "Non-Members",
            filterFn: (data) => data.filter((item) => item.isMember === false)
          }
        ]}
        onSelectActionButtonClick={(dataIds) => {
          setShowActions(true);
          setSelectedMemberIds(dataIds);
        }}
        dataSchema={[
          {
            id: "firstName",
            headerLabel: "First Name",
            formatter({ firstName, lastName, id, photo }) {
              return (
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  onClick={() => handleMemberEdit(id)}
                >
                  <Avatar
                    sx={{ width: 35, height: 35 }}
                    src={photo ?? undefined}
                  >
                    {firstName[0].toUpperCase() + lastName[0].toUpperCase()}
                  </Avatar>
                  <Typography variant="subtitle2">{firstName}</Typography>
                </Stack>
              );
            }
          },
          {
            id: "lastName",
            headerLabel: "Last Name",
            formatter({ lastName }) {
              return (
                <Stack direction="row" alignItems="center">
                  <Typography variant="subtitle2">{lastName}</Typography>
                </Stack>
              );
            }
          },
          {
            id: "memberNumber",
            headerLabel: "Member Number",
            placeholder: "-"
          },
          {
            id: "membershipType",
            headerLabel: "Member Type",
            placeholder: "-"
          },
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
                  <Tooltip title={"Email: " + r.email ?? ""}>
                    <IconButton
                      onClick={() => {
                        setShowAddEmail(false);
                        setSelectedMemberIds([r.id]);
                        setShowAddEmail(true);
                      }}
                    >
                      <Iconify
                        icon="eva:email-outline"
                        sx={{ color: "text.disabled", width: 20, height: 20 }}
                      />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title={"Viber call: " + r.phoneMobile ?? ""}>
                    <IconButton
                      onClick={() => {
                        const viberLink =
                          "viber://chat/?number=${encodeURIComponent(r.phoneMobile ?? '')}";
                        window.open(viberLink, "_blank");
                      }}
                    >
                      <Iconify
                        icon="basil:viber-solid"
                        sx={{ color: "text.disabled", width: 20, height: 20 }}
                      />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title={"Call Mobile Number: " + r.phoneMobile ?? ""}>
                    <IconButton
                      onClick={() => {
                        const viberLink =
                          "tel:${encodeURIComponent(r.phoneMobile ?? '')}";
                        window.open(viberLink, "_blank");
                      }}
                    >
                      <Iconify
                        icon="fa:mobile-phone"
                        sx={{ color: "text.disabled", width: 20, height: 20 }}
                      />
                    </IconButton>
                  </Tooltip>
                  <Tooltip
                    title={"Edit: " + r.firstName + " " + r.lastName ?? ""}
                  >
                    <IconButton onClick={() => handleMemberEdit(r.id)}>
                      <Iconify
                        icon="eva:edit-2-outline"
                        sx={{ color: "text.disabled", width: 20, height: 20 }}
                      />
                    </IconButton>
                  </Tooltip>
                  <Tooltip
                    title={"Delete: " + r.firstName + " " + r.lastName ?? ""}
                  >
                    <IconButton
                      onClick={() => handleMemberDelete(r.id, r.fullName)}
                    >
                      <Iconify
                        icon="eva:trash-2-outline"
                        sx={{ color: "text.disabled", width: 20, height: 20 }}
                      />
                      <Iconify
                        icon="eva:phone"
                        sx={{ color: "text.disabled", width: 20, height: 20 }}
                      />
                    </IconButton>
                  </Tooltip>
                </Box>
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
