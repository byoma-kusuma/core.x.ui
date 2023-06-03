import { Box, IconButton, Typography } from "@mui/material";
import { format } from "date-fns";
import { useConfirm } from "material-ui-confirm";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import CoolTable from "../../components/CoolTable";
import Iconify from "../../components/Iconify";
import Label from "../../components/Label";
import {
  useGroupsQuery,
  useDeleteGroupMutation,
  GroupsQuery
} from "../../generated/graphql";
import GqlApiHandler from "../../services/GqlApiHandler";

export function formatGroupListData(
  data: GroupsQuery | undefined
): GroupsQuery["groups"] {
  if (!data) return [];
  return data.groups;
}

export default function GroupsListContainer() {
  const context = React.useMemo(() => ({ additionalTypenames: ["Group"] }), []);

  const [{ data, fetching, error }] = useGroupsQuery({
    context
  });

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
    <CoolTable
      error={GqlApiHandler.getErrorMessage(error)}
      loading={fetching}
      tableHeight="calc(100vh - 400px)"
      defaultOrderKey="name"
      defaultOrderDirection="asc"
      onSelectActionButtonClick={(data) => console.log(data)}
      data={formatGroupListData(data)}
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
  );
}
