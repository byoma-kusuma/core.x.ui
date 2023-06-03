import {
  Avatar,
  Box,
  Button,
  IconButton,
  Stack,
  Typography
} from "@mui/material";
import * as React from "react";
import CoolTable from "components/CoolTable";
import Iconify from "components/Iconify";
import Label from "components/Label";
import GqlApiHandler from "services/GqlApiHandler";
import {
  AbhisekhaMemberDetails,
  AbhisekhaQuery,
  useAbhisekhaQuery,
  useUpdateAbhisekhaMutation
} from "generated/graphql";
import { useConfirm } from "material-ui-confirm";
import { useNavigate, useParams } from "react-router-dom";
import "react-sliding-pane/dist/react-sliding-pane.css";
import ActionPopoup from "components/ActionPopup";
import { getMemberFullName } from "utils/member";
import { omit } from "lodash";
import AbhisekhaDetailMembersAddMemberContainer from "./AddMemberToAbhisekhaContainer";
import SendEmailPane from "pages/CommonComponents/SendEmailPane";

export function formatAbhisekhaMembersListData(
  data: AbhisekhaQuery | undefined
) {
  if (!data) return [];
  return data.abhisekha.abhisekhaMembers.map((r) => ({
    ...r.member,
    fullName: getMemberFullName(r.member),
    combinedPhone:
      r.member.phoneLand && r.member.phoneMobile
        ? `${r.member.phoneMobile}, ${r.member.phoneLand}`
        : r.member.phoneMobile || r.member.phoneLand,
    userName: r.member.user?.userName,
    userStatus: r.member.user?.status
  }));
}

export default function AbhisekhaDetailsMemberContainer() {
  const { id } = useParams();
  const confirm = useConfirm();
  const navigate = useNavigate();

  const [{ data, fetching, error }] = useAbhisekhaQuery({
    variables: { abhisekhaId: Number(id) }
  });

  const [, updateAbhisekhaMut] = useUpdateAbhisekhaMutation();

  const [openAddMemberPanel, setOpenAddMemberPanel] = React.useState(false);
  const [showActions, setShowActions] = React.useState(false);
  const [showAddEmail, setShowAddEmail] = React.useState(false);
  const [selectedMemberIds, setSelectedMemberIds] = React.useState<
    Array<number>
  >([]);

  const handleAbhisekhaUpdate = async (
    abhisekhaMemberDetails: Array<AbhisekhaMemberDetails>
  ) => {
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
          abhisekhaMemberDetails
        }
      })
    )
      .onSuccess(({ notiSuccess }) => {
        notiSuccess("Updated abhisekha members successfully!");
      })
      .onError(({ notiErr }) => notiErr());
  };

  const onMemberRemoveButtonClick = (
    row: ReturnType<typeof formatAbhisekhaMembersListData>[0]
  ) => {
    confirm({
      description: (
        <Typography>
          Are you sure you want to remove
          <b> {getMemberFullName(row)}</b> from this abhisekha?
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
        data?.abhisekha.abhisekhaMembers
          .filter((abhisekhaMember) => abhisekhaMember.member.id !== row.id)
          .map((abhisekhaMember) => ({
            memberId: abhisekhaMember.member.id,
            type: abhisekhaMember.type,
            abhisekhaDate: abhisekhaMember.abhisekhaDate,
            abhisekhaPlace: abhisekhaMember.abhisekhaPlace
          })) || []
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
          onClick={() => setOpenAddMemberPanel(true)}
          variant="contained"
          sx={{ ml: 1 }}
        >
          Add Members To This Abhisekha
        </Button>
      </Box>
      <CoolTable
        error={GqlApiHandler.getErrorMessage(error)}
        loading={fetching}
        tableHeight="calc(100vh - 400px)"
        defaultOrderKey="fullName"
        defaultOrderDirection="asc"
        onSelectActionButtonClick={(dataIds) => {
          setShowActions(true);
          setSelectedMemberIds(dataIds);
        }}
        data={formatAbhisekhaMembersListData(data)}
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
            id: "opt1",
            headerLabel: "",
            formatter(r) {
              return (
                <Box display="flex" justifyContent="flex-end">
                  <IconButton onClick={() => onMemberRemoveButtonClick(r)}>
                    <Iconify
                      icon="eva:person-remove-outline"
                      sx={{ color: "text.disabled", width: 20, height: 20 }}
                    />
                  </IconButton>
                </Box>
              );
            }
          }
        ]}
      />

      <AbhisekhaDetailMembersAddMemberContainer
        open={openAddMemberPanel}
        handleClose={() => setOpenAddMemberPanel(false)}
      />

      <ActionPopoup
        open={showActions}
        handleClose={() => setShowActions(false)}
        actionItems={[
          {
            name: "Email",
            onClick: () => setShowAddEmail(true)
          },
          {
            name: "SMS",
            onClick: () => ({})
          }
        ]}
      />

      <SendEmailPane
        open={showAddEmail}
        handleClose={() => setShowAddEmail(false)}
        selectedMemberIds={selectedMemberIds}
      />
    </div>
  );
}
