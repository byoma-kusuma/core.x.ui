import { LoadingButton } from "@mui/lab";
import {
  Box,
  FormControlLabel,
  Grid,
  IconButton,
  Link,
  Paper,
  Switch,
  TextField,
  Tooltip,
  Typography
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useFormik } from "formik";
import { omit } from "lodash";
import { useConfirm } from "material-ui-confirm";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "urql";
import Iconify from "../../../components/Iconify";
import InfoProvider from "../../../components/InfoProvider";
import PhotoUploader from "../../../components/PhotoUploader";
import {
  CreateMemberInput,
  MemberDocument,
  MemberQuery,
  // UpdateMemberInput,
  useCreateMemberMutation,
  useCreateUserMutation,
  useUpdateMemberMutation
} from "../../../generated/graphql";
import GqlApiHandler from "../../../services/GqlApiHandler";
import { getMemberFullName } from "../../../utils/member";

const RootStyle = styled(Paper)(({ theme }) => ({
  backdropFilter: "blur(6px)",
  padding: theme.spacing(2)
}));

const UserInfoItemStyle = styled("div")(() => ({
  width: "100%"
}));

interface Props {
  height: number;
  id?: number;
}

const initialValues = {
  title: "",
  firstName: "",
  lastName: "",
  active: true,
  isMember: true,
  email: ""
};

export default function MemberFormContainer(props: Props) {
  const { height, id } = props;

  const navigate = useNavigate();
  const confirm = useConfirm();

  const [{ fetching: creating }, createMemberMut] = useCreateMemberMutation();
  const [{ fetching: updating }, updateMemberMut] = useUpdateMemberMutation();
  const [{ fetching: creatingUser }, createUserMut] = useCreateUserMutation();

  const [{ data }] = useQuery<MemberQuery>({
    query: MemberDocument,
    pause: !id,
    variables: { id }
  });

  const formik = useFormik({
    initialValues: data
      ? omit(data?.member, ["user", "centre", "__typename"])
      : initialValues,
    enableReinitialize: true,
    onSubmit: async (values) => {
      if (id) {
        // edit mode
        new GqlApiHandler(
          await updateMemberMut({ updateMemberInput: { id, ...values } })
        )
          .onSuccess(({ notiSuccess }) => {
            notiSuccess("Member successfully created!");
            navigate("/app/members");
          })
          .onError(({ notiErr }) => notiErr());
      } else {
        // create mode
        new GqlApiHandler(
          await createMemberMut({
            createMemberInput: values as CreateMemberInput
          })
        )
          .onSuccess(({ notiSuccess }) => {
            notiSuccess("Member successfully created!");
            navigate("/app/members");
          })
          .onError(({ notiErr }) => notiErr());
      }
    }
  });

  const thisMemberHasUser = Boolean(data?.member.user);
  const thisMemberUserName = data?.member.user?.userName;
  const thisMemberName = data ? getMemberFullName(data?.member) : null;
  const thisMemberUserRoleName = data?.member.user?.role.name;

  const handleUserCreate = (memberId: number, memberName: string) => {
    confirm({
      description: (
        <Typography>
          Are you sure you want to create an administrator for the user{" "}
          {memberName}?
        </Typography>
      ),
      title: "Confirm admin creation",
      confirmationButtonProps: {
        color: "primary",
        variant: "contained"
      },
      confirmationText: "Confirm"
    }).then(async () => {
      new GqlApiHandler(
        await createUserMut({
          createUserInput: { memberId }
        })
      )
        .onSuccess(({ notiSuccess }) => {
          notiSuccess("User successfully created!");
        })
        .onError(({ notiErr }) => notiErr());
    });
  };

  return (
    <>
      <Grid item xs={12} md={6} lg={4}>
        <PhotoUploader height={height}>
          {id && (
            <UserInfoItemStyle style={{ paddingBottom: "16px" }}>
              <Typography variant="subtitle1">User</Typography>
              {thisMemberHasUser ? (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="flex-start"
                >
                  <Box>
                    <Link component="button" variant="subtitle2">
                      {thisMemberUserName}
                    </Link>
                    <br />
                    <Typography variant="body2" fontSize={12}>
                      {thisMemberUserRoleName}
                    </Typography>
                  </Box>
                  <Tooltip title="Send reset password link" placement="top">
                    <IconButton>
                      <Iconify icon="ic:baseline-lock-reset" />
                    </IconButton>
                  </Tooltip>
                </Box>
              ) : (
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="body2" color="GrayText">
                    No user has been created for this member.
                  </Typography>
                  <Box>
                    <LoadingButton
                      variant="contained"
                      size="small"
                      sx={{ ml: "8px" }}
                      loading={creatingUser}
                      onClick={() => {
                        handleUserCreate(id, thisMemberName as string);
                      }}
                    >
                      Create
                    </LoadingButton>
                  </Box>
                </Box>
              )}
            </UserInfoItemStyle>
          )}
        </PhotoUploader>
      </Grid>
      <Grid item xs={12} md={6} lg={8}>
        <RootStyle elevation={1} sx={{ height: `${height}px` }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                value={formik.values.firstName}
                onChange={(e) =>
                  formik.setFieldValue("firstName", e.target.value)
                }
                label="First Name"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                value={formik.values.lastName}
                onChange={(e) =>
                  formik.setFieldValue("lastName", e.target.value)
                }
                label="Last Name"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                value={formik.values.email || ""}
                onChange={(e) => formik.setFieldValue("email", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6} display="flex" alignItems="center">
              <FormControlLabel
                control={
                  <Switch
                    data-testId="member-form-isMember"
                    color="success"
                    checked={formik.values.isMember}
                    onChange={(e) => {
                      formik.setFieldValue("isMember", e.target.checked);
                    }}
                  />
                }
                label="Is Member"
              />
              <InfoProvider info="Changing the member status to non-member will also remove the user associated with this member" />
            </Grid>
            <Grid item xs={12} sm={6} display="flex" alignItems="center">
              <FormControlLabel
                control={
                  <Switch
                    data-testId="member-form-active"
                    checked={formik.values.active}
                    onChange={(e) => {
                      formik.setFieldValue("active", e.target.checked);
                    }}
                  />
                }
                label="Active"
              />
              <InfoProvider info="Changing the member status to in-active will also remove the user associated with this member" />
            </Grid>
            <Box display="flex" justifyContent="center" width="100%">
              <LoadingButton
                disabled={!formik.dirty}
                variant="contained"
                sx={{ mt: 2 }}
                size="large"
                type="submit"
                loading={creating || updating}
                data-testId="member-form-submit"
                onClick={() => formik.handleSubmit()}
              >
                {id ? "Update Member" : "Create Member"}
              </LoadingButton>
            </Box>
          </Grid>
        </RootStyle>
      </Grid>
    </>
  );
}
