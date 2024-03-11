import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
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
    <CoolTable
      error={GqlApiHandler.getErrorMessage(error)}
      loading={fetching}
      tableHeight="calc(100vh - 280px)"
      defaultOrderKey="firstName"
      defaultOrderDirection="asc"
      onSelectActionButtonClick={(data) => console.log(data)}
      data={formatMemberListData(data)}
      // filterSchema={[{ id: 1, label: "All", filterFn: (data) => data }]}
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
                <Avatar sx={{ width: 35, height: 35 }} src={photo ?? undefined}>
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
        { id: "email", headerLabel: "Email", placeholder: "-" },
        { id: "memberNumber", headerLabel: "Member Number", placeholder: "-" },
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
          id: "phoneMobile",
          headerLabel: "Mobile Phone",
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
  );
}
