import { LoadingButton } from "@mui/lab";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { omit } from "lodash";
import { useConfirm } from "material-ui-confirm";
import * as React from "react";
import { useParams } from "react-router-dom";
import ReactSlidingPane from "react-sliding-pane";
import CoolTable from "components/CoolTable";
import {
  GroupQuery,
  MembersQuery,
  useGroupQuery,
  useMembersQuery,
  useUpdateGroupMutation
} from "generated/graphql";
import GqlApiHandler from "services/GqlApiHandler";
import { getMemberFullName } from "utils/member";

interface Props {
  open: boolean;
  handleClose: () => void;
}

export function formatGroupAddMemberListData(
  data: MembersQuery | undefined,
  group: GroupQuery | undefined
) {
  if (!data || !group) return [];
  const groupMembersHash = group.group.groupMembers.reduce((acc, cur) => {
    acc[cur.member.id] = true;
    return acc;
  }, {} as Record<number, boolean>);
  return data.members
    .filter((m) => !groupMembersHash[m.id])
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

export default function GroupDetailMembersAddMemberContainer(props: Props) {
  const { open, handleClose } = props;

  const { id } = useParams();
  const confirm = useConfirm();

  const [{ data: groupData }] = useGroupQuery({
    variables: { id: Number(id) }
  });

  const [{ fetching: updating }, updateGroupMut] = useUpdateGroupMutation();

  const [{ data: members, fetching: fetchingMembers, error }] =
    useMembersQuery();

  const [selectedMemberIds, setSelectedMemberIds] = React.useState<
    Array<number>
  >([]);

  const handleAddMembers = () => {
    if (id && groupData?.group) {
      const previousMemberIds = groupData.group.groupMembers
        .map((r) => r.member?.id as number)
        .filter(Boolean);
      const formattedGroup = omit(groupData?.group, [
        "groupMembers",
        "createdAt",
        "__typename"
      ]);

      confirm({
        description: (
          <Typography>
            Are you sure you want to add the selected members to the group?
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
          await updateGroupMut({
            updateGroupInput: {
              ...formattedGroup,
              memberIds: [...previousMemberIds, ...selectedMemberIds],
              id: Number(id)
            }
          })
        )
          .onSuccess(({ notiSuccess }) => {
            notiSuccess("Member successfully added to the group!");
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
      title="Add Members To The Group"
      subtitle="Select from the list and click 'Add Selected Members'"
      width="960px"
      onRequestClose={handleClose}
    >
      <Box p={2}>
        <CoolTable
          dense
          error={GqlApiHandler.getErrorMessage(error)}
          loading={fetchingMembers}
          tableHeight="calc(100vh - 328px)"
          defaultOrderKey="fullName"
          defaultOrderDirection="asc"
          onSelectActionButtonClick={(data) => console.log(data)}
          onRequestSelection={(_, v) => setSelectedMemberIds(v)}
          data={formatGroupAddMemberListData(members, groupData)}
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
            disabled={!selectedMemberIds.length || updating}
            onClick={handleAddMembers}
          >
            Add Selected Members
          </LoadingButton>
        </Stack>
      </Box>
    </ReactSlidingPane>
  );
}
