import { Box, Button, IconButton, Typography } from "@mui/material";
import { format } from "date-fns";
import { useConfirm } from "material-ui-confirm";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import CoolTable from "../../components/CoolTable";
import Iconify from "../../components/Iconify";
import Label from "../../components/Label";
import PageWithHeader from "../../components/PageWithHeader";
import {
  GroupsQuery,
  useDeleteGroupMutation,
  useGroupsQuery
} from "../../generated/graphql";
import GqlApiHandler from "../../services/GqlApiHandler";

function formatData(data: GroupsQuery | undefined): GroupsQuery["groups"] {
  if (!data) return [];
  return data.groups;
}

export default function Groups() {
  const [{ data, fetching, error }] = useGroupsQuery();

  const [, deleteGroupMut] = useDeleteGroupMutation();

  const confirm = useConfirm();
  const navigate = useNavigate();

  const handleGroupDelete = (id: number, name: string) => {
    confirm({
      description: (
        <Typography>
          Are you sure you want to remove <b>{name}</b> from groups?
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
        await deleteGroupMut({
          id
        })
      )
        .onSuccess((res) => console.log(res))
        .onError(({ notiErr }) => {
          notiErr();
        });
    });
  };

  return (
    <PageWithHeader
      header="Groups"
      crumbs={[
        { label: "Groups", route: "/app/groups", key: "1" },
        { label: "List", route: "/", key: "2" }
      ]}
      actionButton={
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/app/groups/new")}
        >
          New Group
        </Button>
      }
    >
      <CoolTable
        error={GqlApiHandler.getErrorMessage(error)}
        loading={fetching}
        tableHeight="calc(100vh - 400px)"
        defaultOrderKey="name"
        defaultOrderDirection="asc"
        onSelectActionButtonClick={(data) => console.log(data)}
        data={formatData(data)}
        filterSchema={[{ id: 1, label: "All", filterFn: (data) => data }]}
        dataSchema={[
          {
            id: "name",
            headerLabel: "Name"
          },
          {
            id: "createdAt",
            headerLabel: "Created At",
            formatter(r) {
              return format(new Date(r.createdAt), "MM/dd/yyyy");
            }
          },
          {
            id: "description",
            headerLabel: "Description"
          },
          {
            id: "visible",
            headerLabel: "Visibility",
            formatter(r) {
              return (
                <Label
                  label={r.visible ? "Visible" : "Not Visible"}
                  type="semi-rounded"
                  sx={{ minWidth: "60px" }}
                  color={r.visible ? "success" : "error"}
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
                  <IconButton
                    onClick={() => {
                      navigate(`/app/groups/${r.id}/details`);
                    }}
                  >
                    <Iconify
                      icon="eva:info-outline"
                      sx={{ color: "text.disabled", width: 20, height: 20 }}
                    />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      navigate(`/app/groups/${r.id}`);
                    }}
                  >
                    <Iconify
                      icon="eva:edit-2-outline"
                      sx={{ color: "text.disabled", width: 20, height: 20 }}
                    />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      handleGroupDelete(r.id, r.name);
                    }}
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
