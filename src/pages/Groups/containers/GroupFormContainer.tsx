import { LoadingButton } from "@mui/lab";
import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  Chip,
  FormControlLabel,
  Grid,
  Paper,
  Stack,
  Switch,
  TextField,
  Typography
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useFormik } from "formik";
import { omit } from "lodash";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "urql";
import InfoProvider from "../../../components/InfoProvider";
import {
  CreateGroupInput,
  GroupDocument,
  GroupQuery,
  MembersQuery,
  UpdateGroupInput,
  useCreateGroupMutation,
  useMembersQuery,
  useUpdateGroupMutation
} from "../../../generated/graphql";
import GqlApiHandler from "../../../services/GqlApiHandler";
import GroupFormValidator from "../../../validators/GroupFormValidator";
import SlidingPane from "react-sliding-pane";
import { getMemberFullName } from "../../Members/utils";

const RootStyle = styled(Paper)(({ theme }) => ({
  backdropFilter: "blur(6px)",
  padding: theme.spacing(2)
}));

const initialValues: CreateGroupInput | UpdateGroupInput = {
  name: "",
  description: "",
  visible: true,
  memberIds: []
};

interface Props {
  id?: number;
}

export default function GroupFormContainer(props: Props) {
  const { id } = props;

  const navigate = useNavigate();

  const [{ fetching: creating }, createGroupMut] = useCreateGroupMutation();
  const [{ fetching: updating }, updateGroupMut] = useUpdateGroupMutation();
  const [{ data: membersData }] = useMembersQuery();

  const [openPanel, setOpenPanel] = React.useState(false);

  const membersDataByMemberId = React.useMemo(
    () =>
      (membersData?.members || []).reduce((acc, cur) => {
        acc[cur.id] = cur;
        return acc;
      }, {} as Record<number, MembersQuery["members"][0]>),
    [membersData]
  );

  const [{ data }] = useQuery<GroupQuery>({
    query: GroupDocument,
    pause: !id,
    variables: { id }
  });

  const formik = useFormik<CreateGroupInput | UpdateGroupInput>({
    validationSchema: GroupFormValidator,
    initialValues: data
      ? {
          ...omit(data?.group, ["members", "createdAt", "__typename"]),
          memberIds: data.group.members.map((member) => member.id)
        }
      : initialValues,
    enableReinitialize: true,
    onSubmit: async (values) => {
      if (id) {
        // edit mode
        new GqlApiHandler(
          await updateGroupMut({ updateGroupInput: { id, ...values } })
        )
          .onSuccess(({ notiSuccess }) => {
            notiSuccess("Group successfully created!");
            navigate("/app/groups");
          })
          .onError(({ notiErr }) => notiErr());
      } else {
        // create mode
        new GqlApiHandler(await createGroupMut({ createGroupInput: values }))
          .onSuccess(({ notiSuccess }) => {
            notiSuccess("Group successfully created!");
            navigate("/app/groups");
          })
          .onError(({ notiErr }) => notiErr());
      }
    }
  });

  return (
    <>
      <Grid item xs={12}>
        <RootStyle elevation={1} sx={{ height: "480px" }}>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={6} sm={9}>
                <TextField
                  fullWidth
                  label="Group Name*"
                  value={formik.values.name}
                  onChange={(e) => formik.setFieldValue("name", e.target.value)}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>
              <Grid item xs={6} sm={3} display="flex" alignItems="center">
                <FormControlLabel
                  control={
                    <Switch
                      checked={formik.values.visible}
                      onChange={(e) => {
                        formik.setFieldValue("visible", e.target.checked);
                      }}
                    />
                  }
                  label="Visible"
                />
                <InfoProvider info="Enable or disable if members can see if they are in this group." />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Group Description*"
                  value={formik.values.description}
                  onChange={(e) =>
                    formik.setFieldValue("description", e.target.value)
                  }
                  error={
                    formik.touched.description &&
                    Boolean(formik.errors.description)
                  }
                  helperText={
                    formik.touched.description && formik.errors.description
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  disablePortal
                  multiple
                  fullWidth
                  value={formik.values.memberIds
                    .map((id) => membersDataByMemberId[id])
                    .filter(Boolean)}
                  onChange={(_, v) => {
                    formik.setFieldValue(
                      "memberIds",
                      v.map((member) => member.id)
                    );
                  }}
                  renderTags={(tagValue, getTagProps) =>
                    tagValue.map((option, index) => (
                      <Chip
                        key={option.id}
                        label={getMemberFullName(option)}
                        avatar={
                          <Avatar
                            alt="member-avatar"
                            src={option.photo || ""}
                          />
                        }
                        {...omit(getTagProps({ index }), "key")}
                      />
                    ))
                  }
                  id="group-member-select"
                  options={membersData?.members || []}
                  renderOption={(props, option) => (
                    <li {...props}>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Avatar src={option.photo || ""} />
                        <Typography variant="subtitle2">
                          {option.id}. {getMemberFullName(option)}
                        </Typography>
                      </Stack>
                    </li>
                  )}
                  getOptionLabel={(option) => getMemberFullName(option)}
                  renderInput={(params) => (
                    <TextField {...params} label="Members" />
                  )}
                />
              </Grid>
            </Grid>
            <SlidingPane
              overlayClassName="sliding-pane-bkbds-overlay"
              isOpen={openPanel}
              title="Add Members To The Group"
              subtitle="Select from the list and click save"
              width="800px"
              onRequestClose={() => {
                // triggered on "<" on left top click or on outside click
                setOpenPanel(false);
              }}
            >
              <Box height="524px">Panel Content</Box>
              <Box display="flex" justifyContent="center">
                <Button variant="contained">Save</Button>
              </Box>
            </SlidingPane>
            <Box display="flex" justifyContent="center">
              <LoadingButton
                disabled={!formik.dirty}
                variant="contained"
                sx={{ mt: 2 }}
                size="large"
                type="submit"
                loading={creating || updating}
              >
                {id ? "Update Group" : "Create Group"}
              </LoadingButton>
            </Box>
          </form>
        </RootStyle>
      </Grid>
    </>
  );
}
