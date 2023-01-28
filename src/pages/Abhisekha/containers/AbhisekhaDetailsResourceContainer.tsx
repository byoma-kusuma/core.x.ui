import { Box, Button, IconButton, Typography } from "@mui/material";
import * as React from "react";
import CoolTable from "../../../components/CoolTable";
import Iconify from "../../../components/Iconify";
import GqlApiHandler from "../../../services/GqlApiHandler";
import {
  AbhisekhaQuery,
  useAbhisekhaQuery,
  useUpdateAbhisekhaMutation
} from "../../../generated/graphql";
import { useConfirm } from "material-ui-confirm";
import { useNavigate, useParams } from "react-router-dom";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { omit } from "lodash";
import AbhisekhaDetailResourceAddResourceContainer from "./AbhisekhaDetailResourceAddResourceContainer";

export function formatAbhisekhaResourceListData(
  data: AbhisekhaQuery | undefined
) {
  if (!data) return [];
  return data.abhisekha.abhisekhaResources.map((r) => r.resource);
}

export default function AbhisekhaDetailsResourceContainer() {
  const { id } = useParams();
  const confirm = useConfirm();
  const navigate = useNavigate();

  const [{ data, fetching, error }] = useAbhisekhaQuery({
    variables: { abhisekhaId: Number(id) }
  });

  const [, updateAbhisekhaMut] = useUpdateAbhisekhaMutation();

  const [openAddResourcePanel, setOpenAddResourcePanel] = React.useState(false);
  const [_showActions, setShowActions] = React.useState(false);
  const [_showAddEmail, _setShowAddEmail] = React.useState(false);
  const [_selectedResourceIds, setSelectedResourceIds] = React.useState<
    Array<number>
  >([]);

  const handleAbhisekhaUpdate = async (resourceIds: Array<number>) => {
    new GqlApiHandler(
      await updateAbhisekhaMut({
        updateAbhisekhaInput: {
          ...omit(data?.abhisekha, [
            "updatedAt",
            "createdAt",
            "abhisekhaMembers",
            "abhisekhaResources",
            "__typename"
          ]),
          resourceIds
        }
      })
    )
      .onSuccess(({ notiSuccess }) => {
        notiSuccess("Updated abhisekha resources successfully!");
      })
      .onError(({ notiErr }) => notiErr());
  };

  const onResourceRemoveButtonClick = (
    row: ReturnType<typeof formatAbhisekhaResourceListData>[0]
  ) => {
    confirm({
      description: (
        <Typography>
          Are you sure you want to remove
          <b> {row.name} resource </b> from this abhisekha?
        </Typography>
      ),
      title: "Delete Confirmation",
      confirmationButtonProps: {
        color: "primary",
        variant: "contained"
      },
      confirmationText: "Confirm"
    }).then(() =>
      handleAbhisekhaUpdate(
        data?.abhisekha.abhisekhaResources
          .filter(
            (abhisekhaResource) => abhisekhaResource.resource.id !== row.id
          )
          .map((abhisekhaResource) => abhisekhaResource.resource.id) || []
      )
    );
  };

  return (
    <div>
      <Box display="flex" justifyContent="flex-end" mt={-2} mb={1}>
        <Button
          variant="contained"
          color="success"
          onClick={() => navigate(`/app/abhisekhas/${id}`)}
        >
          Edit Abhisekha Details
        </Button>
        <Button
          onClick={() => setOpenAddResourcePanel(true)}
          variant="contained"
          sx={{ ml: 1 }}
        >
          Add Resources To This Abhisekha
        </Button>
      </Box>
      <CoolTable
        error={GqlApiHandler.getErrorMessage(error)}
        loading={fetching}
        tableHeight="calc(100vh - 400px)"
        defaultOrderKey="name"
        defaultOrderDirection="asc"
        onSelectActionButtonClick={(dataIds) => {
          setShowActions(true);
          setSelectedResourceIds(dataIds);
        }}
        data={formatAbhisekhaResourceListData(data)}
        filterSchema={[{ id: 1, label: "All", filterFn: (data) => data }]}
        dataSchema={[
          {
            id: "name",
            headerLabel: "Name"
          },
          { id: "type", headerLabel: "Type" },
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
                  <IconButton onClick={() => onResourceRemoveButtonClick(r)}>
                    <Iconify
                      icon="eva:minus-square-fill"
                      sx={{ color: "text.disabled", width: 20, height: 20 }}
                    />
                  </IconButton>
                </Box>
              );
            }
          }
        ]}
      />

      <AbhisekhaDetailResourceAddResourceContainer
        open={openAddResourcePanel}
        handleClose={() => setOpenAddResourcePanel(false)}
      />
    </div>
  );
}
