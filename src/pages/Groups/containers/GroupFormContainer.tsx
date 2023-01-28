import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Paper,
  Switch,
  TextField
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useFormik } from "formik";
import { omit } from "lodash";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import ReactSlidingPane from "react-sliding-pane";
import { useQuery } from "urql";
import InfoProvider from "../../../components/InfoProvider";
import {
  CreateGroupInput,
  GroupDocument,
  GroupQuery,
  useCreateGroupMutation,
  useMembersQuery,
  useUpdateGroupMutation
} from "../../../generated/graphql";
import GqlApiHandler from "../../../services/GqlApiHandler";
import MembersSelectAutocomplete from "../../CommonComponents/MembersSelectAutocomplete";

const RootStyle = styled(Paper)(({ theme }) => ({
  backdropFilter: "blur(6px)",
  padding: theme.spacing(2)
}));

interface Props {
  id?: number;
}

const initialValues = {
  name: "",
  description: "",
  visible: true,
  memberIds: []
};

export default function GroupFormContainer(props: Props) {
  const { id } = props;

  const navigate = useNavigate();

  const [{ fetching: creating }, createGroupMut] = useCreateGroupMutation();
  const [{ fetching: updating }, updateGroupMut] = useUpdateGroupMutation();
  const [{ data: membersData }] = useMembersQuery();

  const [openPanel, setOpenPanel] = React.useState(false);

  const [{ data }] = useQuery<GroupQuery>({
    query: GroupDocument,
    pause: !id,
    variables: { id }
  });

  const formik = useFormik({
    initialValues: data
      ? {
          ...omit(data?.group, ["groupMembers", "createdAt", "__typename"]),
          memberIds: data.group.groupMembers.map(
            (groupMember) => groupMember.member.id
          )
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
        new GqlApiHandler(
          await createGroupMut({ createGroupInput: values as CreateGroupInput })
        )
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
          <form>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={6} sm={9}>
                  <TextField
                    fullWidth
                    label="Group Name*"
                    value={formik.values.name}
                    onChange={(e) =>
                      formik.setFieldValue("name", e.target.value)
                    }
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
                  <MembersSelectAutocomplete
                    value={formik.values.memberIds}
                    onChange={(memberIds) =>
                      formik.setFieldValue("memberIds", memberIds)
                    }
                    options={membersData?.members || []}
                  />
                </Grid>
              </Grid>
              <ReactSlidingPane
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
              </ReactSlidingPane>
              <Box display="flex" justifyContent="center">
                <LoadingButton
                  disabled={!formik.dirty}
                  variant="contained"
                  sx={{ mt: 2 }}
                  size="large"
                  type="submit"
                  loading={creating || updating}
                  onClick={() => formik.handleSubmit()}
                >
                  {id ? "Update Group" : "Create Group"}
                </LoadingButton>
              </Box>
            </form>
          </form>
        </RootStyle>
      </Grid>
    </>
  );
}
