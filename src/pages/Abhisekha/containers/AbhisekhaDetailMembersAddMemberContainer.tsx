import { LoadingButton } from "@mui/lab";
import { Avatar, Box, Grid, Stack, TextField, Typography } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { omit } from "lodash";
import { useConfirm } from "material-ui-confirm";
import * as React from "react";
import { useParams } from "react-router-dom";
import ReactSlidingPane from "react-sliding-pane";
import CoolTable from "../../../components/CoolTable";
import {
  AbhisekhaMemberDetails,
  AbhisekhaQuery,
  MembersQuery,
  useAbhisekhaQuery,
  useMembersQuery,
  useUpdateAbhisekhaMutation
} from "../../../generated/graphql";
import GqlApiHandler from "../../../services/GqlApiHandler";
import { getMemberFullName } from "../../../utils/member";

interface Props {
  open: boolean;
  handleClose: () => void;
}

export function formatAbhisekhaAddMemberListData(
  data: MembersQuery | undefined,
  abhisekha: AbhisekhaQuery | undefined
) {
  if (!data || !abhisekha) return [];
  const abhisekhaMemberHash = abhisekha.abhisekha.abhisekhaMembers.reduce(
    (acc, cur) => {
      acc[cur.member.id] = true;
      return acc;
    },
    {} as Record<number, boolean>
  );
  return data.members
    .filter((m) => !abhisekhaMemberHash[m.id])
    .map((r) => ({
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

export default function AbhisekhaDetailMembersAddMemberContainer(props: Props) {
  const { open, handleClose } = props;

  const { id } = useParams();
  const confirm = useConfirm();

  const [{ data: abhisekhaData }] = useAbhisekhaQuery({
    variables: { abhisekhaId: Number(id) }
  });

  const [{ fetching: updating }, updateAbhisekhaMut] =
    useUpdateAbhisekhaMutation();

  const [{ data: members, fetching: fetchingMembers, error }] =
    useMembersQuery();

  const [selectedMemberIds, setSelectedMemberIds] = React.useState<
    Array<number>
  >([]);
  const [date, setDate] = React.useState(new Date());
  const [place, setPlace] = React.useState("");
  const [type, setType] = React.useState("");

  const handleAddMembers = () => {
    if (id && abhisekhaData?.abhisekha) {
      const previousMembers: Array<AbhisekhaMemberDetails> =
        abhisekhaData.abhisekha.abhisekhaMembers.map((abhisekhaMember) => ({
          memberId: abhisekhaMember.member.id,
          type: abhisekhaMember.type,
          abhisekhaPlace: abhisekhaMember.abhisekhaPlace,
          abhisekhaDate: abhisekhaMember.abhisekhaDate
        }));

      const formattedAbhisekha = omit(abhisekhaData?.abhisekha, [
        "abhisekhaMembers",
        "createdAt",
        "updatedAt",
        "__typename"
      ]);

      confirm({
        description: (
          <Typography>
            Are you sure you want to add the selected members to the abhisekha?
          </Typography>
        ),
        title: "Confirm group members addition",
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
              abhisekhaMemberDetails: [
                ...previousMembers,
                ...selectedMemberIds.map((memberId) => ({
                  memberId,
                  type,
                  abhisekhaDate: date.toISOString(),
                  abhisekhaPlace: place
                }))
              ]
            }
          })
        )
          .onSuccess(({ notiSuccess }) => {
            notiSuccess("Members successfully added to the abhisekha!");
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
      title="Add Members To The Abhisekha"
      subtitle="Select from the list and click 'Add Selected Members'"
      width="960px"
      onRequestClose={handleClose}
    >
      <Box p={2}>
        <Grid container spacing={2} mb={2}>
          <Grid item xs={6}>
            <TextField
              label="Abhisekha Place"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Abhisekha Type"
              value={type}
              fullWidth
              onChange={(e) => setType(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <DesktopDatePicker
              label="Abhisekha Date"
              inputFormat="MM/dd/yyyy"
              value={date}
              onChange={(v) => {
                if (v) {
                  setDate(v);
                }
              }}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </Grid>
        </Grid>
        <CoolTable
          dense
          error={GqlApiHandler.getErrorMessage(error)}
          loading={fetchingMembers}
          tableHeight="calc(100vh - 328px)"
          defaultOrderKey="fullName"
          defaultOrderDirection="asc"
          onSelectActionButtonClick={(data) => console.log(data)}
          onRequestSelection={(_, v) => setSelectedMemberIds(v)}
          data={formatAbhisekhaAddMemberListData(members, abhisekhaData)}
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
              id: "combinedPhone",
              headerLabel: "Phone",
              placeholder: "-"
            }
          ]}
        />
        <Stack mt={2}>
          <LoadingButton
            variant="contained"
            size="large"
            disabled={
              !selectedMemberIds.length || updating || !date || !type || !place
            }
            onClick={handleAddMembers}
          >
            Add Selected Members
          </LoadingButton>
        </Stack>
      </Box>
    </ReactSlidingPane>
  );
}
