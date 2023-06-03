import { Box, IconButton, Typography } from "@mui/material";
import { useConfirm } from "material-ui-confirm";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import CoolTable from "components/CoolTable";
import Iconify from "components/Iconify";
import {
  ResourcesQuery,
  useResourcesQuery,
  useDeleteResourceMutation
} from "generated/graphql";
import GqlApiHandler from "services/GqlApiHandler";

export function formatResourceListData(
  data: ResourcesQuery | undefined
): ResourcesQuery["resources"] {
  if (!data) return [];
  return data.resources;
}

export default function ResourcesListContainer() {
  const context = React.useMemo(
    () => ({ additionalTypenames: ["Resource"] }),
    []
  );

  const [{ data, fetching, error }] = useResourcesQuery({
    context
  });

  const [, deleteResourceMut] = useDeleteResourceMutation();

  const confirm = useConfirm();
  const navigate = useNavigate();

  const handleResourceDelete = (id: number, name: string) => {
    confirm({
      description: (
        <Typography>
          Are you sure you want to remove <b>{name}</b> from resources?
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
        await deleteResourceMut({
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
      data={formatResourceListData(data)}
      filterSchema={[{ id: 1, label: "All", filterFn: (data) => data }]}
      dataSchema={[
        {
          id: "name",
          headerLabel: "Name"
        },
        {
          id: "url",
          headerLabel: "Resource URL",
          formatter(r) {
            return (
              <a href={r.url} target="_blank" rel="noreferrer">
                {r.url}
              </a>
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
                    navigate(`/app/resources/${r.id}/details`);
                  }}
                >
                  <Iconify
                    icon="eva:info-outline"
                    sx={{ color: "text.disabled", width: 20, height: 20 }}
                  />
                </IconButton>
                <IconButton
                  onClick={() => {
                    navigate(`/app/resources/${r.id}`);
                  }}
                >
                  <Iconify
                    icon="eva:edit-2-outline"
                    sx={{ color: "text.disabled", width: 20, height: 20 }}
                  />
                </IconButton>
                <IconButton
                  onClick={() => {
                    handleResourceDelete(r.id, r.name);
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
