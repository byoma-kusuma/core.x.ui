/* eslint-disable @typescript-eslint/no-explicit-any */
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
  TextFieldProps,
  Tooltip,
  Typography
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useFormik } from "formik";
import { omit, startCase } from "lodash";
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
import PhoneInput from "react-phone-input-2";
import * as Yup from "yup";
import CentreSelect from "../../CommonComponents/CentreSelect";

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

const schema = {
  title: {
    type: "text",
    required: true,
    initialValue: ""
  },
  firstName: {
    type: "text",
    required: true,
    initialValue: "",
    validator: Yup.string().min(2).required("Required")
  },
  lastName: {
    type: "text",
    required: true,
    initialValue: "",
    validator: Yup.string().min(2).required("Required")
  },
  middleName: {
    type: "text",
    required: false,
    initialValue: ""
  },
  active: {
    type: "boolean",
    required: true,
    initialValue: true
  },
  isMember: {
    type: "boolean",
    required: true,
    initialValue: true
  },
  email: {
    type: "text",
    required: false,
    initialValue: "",
    validator: Yup.string().email("Invalid email").nullable()
  },
  phoneMobile: {
    type: "tel",
    required: false,
    initialValue: ""
  },
  phoneLand: {
    type: "tel",
    required: false,
    initialValue: ""
  },
  phoneOther: {
    type: "tel",
    required: false,
    initialValue: ""
  },
  centreId: {
    type: "number",
    required: false,
    initialValue: null
  },
  yearOfBirth: {
    type: "string",
    required: false,
    initialValue: ""
  },
  membershipType: {
    type: "text",
    required: false,
    initialValue: null
  },
  gender: {
    type: "text",
    required: false,
    initialValue: null
  },
  sanghaJoinDate: {
    type: "date",
    required: false,
    initialValue: null
  },
  viber: {
    type: "text",
    required: false,
    initialValue: ""
  },
  messenger: {
    type: "text",
    required: false,
    initialValue: ""
  },
  insta: {
    type: "text",
    required: false,
    initialValue: ""
  },
  note: {
    type: "text",
    required: false,
    initialValue: ""
  },
  tempAddress: {
    type: "text",
    required: false,
    initialValue: "",
    label: "Address"
  },
  refugeName: {
    type: "text",
    required: false,
    initialValue: ""
  }
} as Record<
  string,
  {
    type: string;
    required: boolean;
    initialValue: any;
    validator?: any;
    label?: string;
  }
>;

const initialValues = Object.keys(schema).reduce((acc, cur) => {
  acc[cur] = schema[cur].initialValue;
  return acc;
}, {} as Record<string, any>);

const validationSchema = Yup.object(
  Object.keys(schema).reduce((acc, cur) => {
    const schemaValue = schema[cur];
    if (schemaValue && "validator" in schemaValue) {
      acc[cur] = schema[cur].validator;
    }
    return acc;
  }, {} as any)
);

const getSchemaProps = (
  schemaKey: keyof typeof schema,
  formik: Record<string, any>
): Partial<TextFieldProps> => {
  const schemaValue = schema[schemaKey];
  return {
    value: formik.values[schemaKey],
    onChange: (e) => {
      formik.setFieldValue(
        schemaKey,
        schemaValue.type === "number" ? Number(e.target.value) : e.target.value
      );
    },
    label:
      schemaValue.label ||
      (schemaValue.required
        ? `${startCase(schemaKey)}*`
        : startCase(schemaKey)),
    fullWidth: true,
    error: !!formik.errors[schemaKey],
    helperText: formik.errors[schemaKey] || "",
    onFocus: (e) => e.target.select()
  };
};

interface GenericTextFieldProps {
  schemaKey: keyof typeof schema;
  formik: Record<string, any>;
}

function GenericTextField(props: GenericTextFieldProps & TextFieldProps) {
  const { schemaKey, formik, ...rest } = props;
  return <TextField {...rest} {...getSchemaProps(schemaKey, formik)} />;
}

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
      ? omit({ ...data?.member, centreId: data?.member.centre?.id }, [
          "user",
          "centre",
          "__typename"
        ])
      : initialValues,
    validationSchema,
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
        <RootStyle
          elevation={1}
          sx={{ height: `${height}px`, overflowY: "auto" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <GenericTextField schemaKey="firstName" formik={formik} />
            </Grid>
            <Grid item xs={12} md={4}>
              <GenericTextField schemaKey="middleName" formik={formik} />
            </Grid>
            <Grid item xs={12} md={4}>
              <GenericTextField schemaKey="lastName" formik={formik} />
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericTextField schemaKey="title" formik={formik} />
            </Grid>
            <Grid item xs={12} md={5}>
              <PhoneInput
                value={formik.values.phoneMobile as string}
                onChange={(phone) => formik.setFieldValue("phoneMobile", phone)}
                inputStyle={{ width: "100%", height: "56px" }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <GenericTextField schemaKey="email" formik={formik} />
            </Grid>
            <Grid item xs={12} md={4}>
              <GenericTextField schemaKey="tempAddress" formik={formik} />
            </Grid>
            <Grid item xs={12} md={4}>
              <CentreSelect
                value={formik.values.centreId}
                onChange={(v) => formik.setFieldValue("centreId", v)}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <GenericTextField schemaKey="refugeName" formik={formik} />
            </Grid>
            <Grid item xs={12} sm={6} display="flex" alignItems="center">
              <FormControlLabel
                control={
                  <Switch
                    data-testid="member-form-isMember"
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
                    data-testid="member-form-active"
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
            <Grid item xs={6}>
              <GenericTextField schemaKey="phoneLand" formik={formik} />
            </Grid>
            <Grid item xs={6}>
              <GenericTextField schemaKey="phoneOther" formik={formik} />
            </Grid>
            <Grid item xs={12} md={4}>
              <GenericTextField
                schemaKey="yearOfBirth"
                formik={formik}
                type="number"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <GenericTextField schemaKey="viber" formik={formik} />
            </Grid>
            <Grid item xs={12} md={4}>
              <GenericTextField schemaKey="messenger" formik={formik} />
            </Grid>
            <Grid item xs={12} md={4}>
              <GenericTextField schemaKey="insta" formik={formik} />
            </Grid>
            <Grid item xs={12}>
              <GenericTextField
                schemaKey="note"
                formik={formik}
                multiline
                rows={4}
              />
            </Grid>
            <Box display="flex" justifyContent="center" width="100%">
              <LoadingButton
                disabled={!formik.dirty}
                variant="contained"
                sx={{ mt: 2 }}
                size="large"
                type="submit"
                loading={creating || updating}
                data-testid="member-form-submit"
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
