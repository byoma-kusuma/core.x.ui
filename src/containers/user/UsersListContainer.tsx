import { Stack, Avatar, Typography, Box, IconButton } from "@mui/material";
import { useConfirm } from "material-ui-confirm";
import * as React from "react";
import CoolTable from "components/CoolTable";
import Iconify from "components/Iconify";
import Label from "components/Label";
import {
  Status,
  useDeleteUserMutation,
  UsersQuery,
  useUsersQuery
} from "generated/graphql";
import GqlApiHandler from "services/GqlApiHandler";
import { getMemberFullName } from "utils/member";

export function formatUserListData(data: UsersQuery | undefined) {
  if (!data) return [];
  return data.users.map((r) => ({
    ...r,
    fullName: getMemberFullName(r.member),
    email: r.member.email
  }));
}

export default function UsersListContainer() {
  const [{ data, fetching, error }] = useUsersQuery();
  const [, deleteUserMut] = useDeleteUserMutation();

  const confirm = useConfirm();

  const handleUserDelete = (id: number, name: string) => {
    confirm({
      description: (
        <Typography>
          Are you sure you want to remove <b>{name}</b> from user?
        </Typography>
      ),
      title: "Delete Confirmation",
      confirmationButtonProps: {
        color: "primary",
        variant: "contained"
      },
      confirmationText: "Confirm"
    }).then(async () => {
      new GqlApiHandler(
        await deleteUserMut({
          id
        })
      )
        .onSuccess(({ notiSuccess }) =>
          notiSuccess("User deleted successfully")
        )
        .onError(({ notiErr }) => {
          notiErr();
        });
    });
  };

  return (
    <CoolTable
      error={GqlApiHandler.getErrorMessage(error)}
      loading={fetching}
      tableHeight="calc(100vh - 400px)"
      defaultOrderKey="userName"
      defaultOrderDirection="asc"
      onSelectActionButtonClick={(data) => console.log(data)}
      data={formatUserListData(data)}
      filterSchema={[{ id: 1, label: "All", filterFn: (data) => data }]}
      dataSchema={[
        {
          id: "fullName",
          headerLabel: "Name",
          formatter({ fullName, member }) {
            return (
              <Stack direction="row" alignItems="center" spacing={2}>
                <Avatar src={member.photo ?? "/static/bk-logo-small.png"}>
                  {fullName}
                </Avatar>
                <Typography variant="subtitle2">{fullName}</Typography>{" "}
              </Stack>
            );
          }
        },
        { id: "userName", headerLabel: "Username" },
        {
          id: "email",
          headerLabel: "Email"
        },
        {
          id: "status",
          headerLabel: "Validation Status",
          formatter({ status }) {
            const isValidated = status === Status.Validated;
            return (
              <Label
                label={isValidated ? "Validated" : "Validation Pending"}
                type="semi-rounded"
                color={isValidated ? "success" : "error"}
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
                {/* <IconButton onClick={() => handleUserEdit(r.id)}>
                  <Iconify
                    icon="eva:edit-2-outline"
                    sx={{ color: "text.disabled", width: 20, height: 20 }}
                  />
                </IconButton> */}
                <IconButton onClick={() => handleUserDelete(r.id, r.userName)}>
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
