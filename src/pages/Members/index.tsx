import * as React from "react";
import CoolTable from "../../components/CoolTable";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Stack,
  Tooltip,
  Typography
} from "@mui/material";
import Label from "../../components/Label";
import PageWithHeader from "../../components/PageWithHeader";
import {
  MembersQuery,
  Status,
  useDeleteMemberMutation,
  useMembersQuery
} from "../../generated/graphql";
import GqlApiHandler from "../../services/GqlApiHandler";
import Iconify from "../../components/Iconify";
import { useConfirm } from "material-ui-confirm";
import { useNavigate } from "react-router-dom";
import { getMemberFullName } from "../../utils/formatString";

function format(data: MembersQuery | undefined) {
  if (!data) return [];
  return data.members.map((r) => ({
    ...r,
    fullName: getMemberFullName(r),
    combinedPhone:
      r.phonePrimary && r.phoneSecondary
        ? `${r.phonePrimary}, ${r.phoneSecondary}`
        : r.phonePrimary || r.phoneSecondary,
    userName: r.user?.userName,
    userStatus: r.user?.status
  }));
}

export default function Members() {
  const [{ data, fetching, error }] = useMembersQuery();

  const [, deleteMemberMut] = useDeleteMemberMutation();

  const confirm = useConfirm();
  const navigate = useNavigate();

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
        .onSuccess((res) => console.log(res))
        .onError(({ notiErr }) => {
          notiErr();
        });
    });
  };

  const handleMemberEdit = (id: number) => {
    navigate(`/app/members/${id}`);
  };

  return (
    <PageWithHeader
      header="Members List"
      crumbs={[
        { label: "Members", route: "/app/members", key: "1" },
        { label: "List", route: "/", key: "2" }
      ]}
      actionButton={
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/app/members/new")}
        >
          New Member
        </Button>
      }
    >
      <CoolTable
        error={GqlApiHandler.getErrorMessage(error)}
        loading={fetching}
        tableHeight="calc(100vh - 400px)"
        defaultOrderKey="fullName"
        defaultOrderDirection="asc"
        onSelectActionButtonClick={(data) => console.log(data)}
        data={format(data)}
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
          {
            id: "userName",
            headerLabel: "Username",
            formatter({ userName, userStatus }) {
              if (!userName) return "-";
              return (
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Typography variant="body2">{userName}</Typography>
                  <Tooltip title={"This user is validated"} placement="top">
                    <div>
                      <Iconify
                        icon={
                          userStatus === Status.Validated
                            ? "eva:checkmark-circle-2-fill"
                            : "eva:close-circle-fill"
                        }
                        sx={{ color: "success.dark", width: 20, height: 20 }}
                      />
                    </div>
                  </Tooltip>
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
            id: "currentAddress",
            headerLabel: "Current Address",
            placeholder: "-"
          },
          {
            id: "opt1",
            headerLabel: "",
            formatter(r) {
              return (
                <Box display="flex" justifyContent="flex-end">
                  <IconButton onClick={() => handleMemberEdit(r.id)}>
                    <Iconify
                      icon="eva:edit-2-outline"
                      sx={{ color: "text.disabled", width: 20, height: 20 }}
                    />
                  </IconButton>
                  <IconButton
                    onClick={() => handleMemberDelete(r.id, r.fullName)}
                  >
                    <Iconify
                      icon="eva:trash-2-outline"
                      sx={{ color: "text.disabled", width: 20, height: 20 }}
                    />
                  </IconButton>
                </Box>
              );
            }
          }
        ]}
      />
    </PageWithHeader>
  );
}
