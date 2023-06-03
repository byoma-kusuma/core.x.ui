import { Box, IconButton, Typography } from "@mui/material";
import { format } from "date-fns";
import { useConfirm } from "material-ui-confirm";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import CoolTable from "../../components/CoolTable";
import Iconify from "../../components/Iconify";
import {
  useAbhisekhasQuery,
  useDeleteAbhisekhaMutation,
  AbhisekhasQuery
} from "../../generated/graphql";
import GqlApiHandler from "../../services/GqlApiHandler";

export function formatAbhisekhaListData(
  data: AbhisekhasQuery | undefined
): AbhisekhasQuery["abhisekhas"] {
  if (!data) return [];
  return data.abhisekhas;
}

export default function AbhisekhasListContainer() {
  const context = React.useMemo(
    () => ({ additionalTypenames: ["Abhisekha"] }),
    []
  );

  const [{ data, fetching, error }] = useAbhisekhasQuery({
    context
  });

  const [, deleteAbhisekhaMut] = useDeleteAbhisekhaMutation();

  const confirm = useConfirm();
  const navigate = useNavigate();

  const handleAbhisekhaDelete = (id: number, name: string) => {
    confirm({
      description: (
        <Typography>
          Are you sure you want to remove <b>{name}</b> from abhisekhas?
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
        await deleteAbhisekhaMut({
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
      data={formatAbhisekhaListData(data)}
      filterSchema={[{ id: 1, label: "All", filterFn: (data) => data }]}
      dataSchema={[
        {
          id: "name",
          headerLabel: "Name"
        },
        {
          id: "teacher",
          headerLabel: "Teacher"
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
          id: "opt1",
          headerLabel: "",
          formatter(r) {
            return (
              <Box display="flex" justifyContent="flex-end">
                <IconButton
                  onClick={() => {
                    navigate(`/app/abhisekhas/${r.id}/details`);
                  }}
                >
                  <Iconify
                    icon="eva:info-outline"
                    sx={{ color: "text.disabled", width: 20, height: 20 }}
                  />
                </IconButton>
                <IconButton
                  onClick={() => {
                    navigate(`/app/abhisekhas/${r.id}`);
                  }}
                >
                  <Iconify
                    icon="eva:edit-2-outline"
                    sx={{ color: "text.disabled", width: 20, height: 20 }}
                  />
                </IconButton>
                <IconButton
                  onClick={() => {
                    handleAbhisekhaDelete(r.id, r.name);
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
