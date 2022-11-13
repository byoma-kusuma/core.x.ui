import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import { useConfirm } from "material-ui-confirm";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import CoolTable from "../../components/CoolTable";
import Iconify from "../../components/Iconify";
import Label from "../../components/Label";
import PageWithHeader from "../../components/PageWithHeader";
import {
  Status,
  useDeleteUserMutation,
  UsersQuery,
  useUsersQuery
} from "../../generated/graphql";
import GqlApiHandler from "../../services/GqlApiHandler";
import { getMemberFullName } from "../Members/utils";

function formatData(data: UsersQuery | undefined) {
  if (!data) return [];
  return data.users.map((r) => ({
    ...r,
    fullName: getMemberFullName(r.member),
    email: r.member.email
  }));
}

export default function Users() {
  const [{ data, fetching, error }] = useUsersQuery();
  const [, deleteUserMut] = useDeleteUserMutation();

  const confirm = useConfirm();
  const navigate = useNavigate();

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
        .onSuccess((res) => console.log(res))
        .onError(({ notiErr }) => {
          notiErr();
        });
    });
  };

  const handleUserEdit = (id: number) => {
    navigate(`/app/users/${id}`);
  };

  return (
    <PageWithHeader
      header="Users"
      crumbs={[
        { label: "Users", route: "/app/users", key: "1" },
        { label: "List", route: "/", key: "2" }
      ]}
    >
      <CoolTable
        error={GqlApiHandler.getErrorMessage(error)}
        loading={fetching}
        tableHeight="calc(100vh - 400px)"
        defaultOrderKey="userName"
        defaultOrderDirection="asc"
        onSelectActionButtonClick={(data) => console.log(data)}
        data={formatData(data)}
        filterSchema={[{ id: 1, label: "All", filterFn: (data) => data }]}
        dataSchema={[
          {
            id: "fullName",
            headerLabel: "Name",
            formatter({ fullName, avatar }) {
              return (
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Avatar src={avatar || ""} />
                  <Typography variant="subtitle2">{fullName}</Typography>
                </Stack>
              );
            }
          },
          {
            id: "userName",
            headerLabel: "Username"
          },
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
                  <IconButton onClick={() => handleUserEdit(r.id)}>
                    <Iconify
                      icon="eva:edit-2-outline"
                      sx={{ color: "text.disabled", width: 20, height: 20 }}
                    />
                  </IconButton>
                  <IconButton
                    onClick={() => handleUserDelete(r.id, r.userName)}
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
