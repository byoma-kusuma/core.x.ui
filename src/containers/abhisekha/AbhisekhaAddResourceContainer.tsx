import { LoadingButton } from "@mui/lab";
import { Box, Stack, Typography } from "@mui/material";
import { omit } from "lodash";
import { useConfirm } from "material-ui-confirm";
import * as React from "react";
import { useParams } from "react-router-dom";
import ReactSlidingPane from "react-sliding-pane";
import CoolTable from "components/CoolTable";
import {
  AbhisekhaQuery,
  ResourcesQuery,
  useAbhisekhaQuery,
  useResourcesQuery,
  useUpdateAbhisekhaMutation
} from "generated/graphql";
import GqlApiHandler from "services/GqlApiHandler";

interface Props {
  open: boolean;
  handleClose: () => void;
}

export function formatAbhisekhaAddResourceListData(
  data: ResourcesQuery | undefined,
  abhisekha: AbhisekhaQuery | undefined
) {
  if (!data || !abhisekha) return [];
  const abhisekhaMemberHash = abhisekha.abhisekha.abhisekhaResources.reduce(
    (acc, cur) => {
      acc[cur.resource.id] = true;
      return acc;
    },
    {} as Record<number, boolean>
  );
  return data.resources.filter((m) => !abhisekhaMemberHash[m.id]);
}

export default function AbhisekhaDetailResourceAddResourceContainer(
  props: Props
) {
  const { open, handleClose } = props;

  const { id } = useParams();
  const confirm = useConfirm();

  const [{ data: abhisekhaData }] = useAbhisekhaQuery({
    variables: { abhisekhaId: Number(id) }
  });

  const [{ fetching: updating }, updateAbhisekhaMut] =
    useUpdateAbhisekhaMutation();

  const [{ data: resources, fetching: fetchingResources, error }] =
    useResourcesQuery();

  const [selectedResourceIds, setSelectedResourceIds] = React.useState<
    Array<number>
  >([]);

  const handleAddResources = () => {
    if (id && abhisekhaData?.abhisekha) {
      const previousResourceIds: Array<number> =
        abhisekhaData.abhisekha.abhisekhaResources.map((r) => r.resource.id);

      const formattedAbhisekha = omit(abhisekhaData?.abhisekha, [
        "abhisekhaMembers",
        "abhisekhaResources",
        "createdAt",
        "updatedAt",
        "__typename"
      ]);

      confirm({
        description: (
          <Typography>
            Are you sure you want to add the selected resources to the
            abhisekha?
          </Typography>
        ),
        title: "Confirm abhisekha resources addition",
        confirmationButtonProps: {
          color: "primary",
          variant: "contained"
        },
        confirmationText: "Confirm"
      }).then(async () => {
        new GqlApiHandler(
          await updateAbhisekhaMut({
            updateAbhisekhaInput: {
              ...formattedAbhisekha,
              id: Number(id),
              resourceIds: [...previousResourceIds, ...selectedResourceIds]
            }
          })
        )
          .onSuccess(({ notiSuccess }) => {
            notiSuccess("Resources successfully added to the abhisekha!");
            handleClose();
          })
          .onError(({ notiErr }) => notiErr());
      });
    }
  };

  return (
    <ReactSlidingPane
      overlayClassName="sliding-pane-bkbds-overlay"
      className="sliding-pane-bkbds-root"
      isOpen={open}
      title="Add Resources To The Abhisekha"
      subtitle="Select from the list and click 'Add Selected Resources'"
      width="960px"
      onRequestClose={handleClose}
    >
      <Box p={2}>
        <CoolTable
          dense
          error={GqlApiHandler.getErrorMessage(error)}
          loading={fetchingResources}
          tableHeight="calc(100vh - 328px)"
          defaultOrderKey="name"
          defaultOrderDirection="asc"
          onSelectActionButtonClick={(data) => console.log(data)}
          onRequestSelection={(_, v) => setSelectedResourceIds(v)}
          data={formatAbhisekhaAddResourceListData(resources, abhisekhaData)}
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
            }
          ]}
        />
        <Stack mt={2}>
          <LoadingButton
            variant="contained"
            size="large"
            disabled={!selectedResourceIds.length || updating}
            onClick={handleAddResources}
          >
            Add Selected Resources
          </LoadingButton>
        </Stack>
      </Box>
    </ReactSlidingPane>
  );
}
