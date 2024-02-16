/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoadingButton } from "@mui/lab";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  FormControlLabel,
  Grid,
  Paper,
  Switch,
  Typography
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Iconify from "components/Iconify";
import InfoProvider from "components/InfoProvider";
import { useFormik } from "formik";
import {
  CreateMemberInput,
  MemberDocument,
  MemberQuery,
  useCreateMemberMutation,
  useUpdateMemberMutation
} from "generated/graphql";
import { omit } from "lodash";
import CentreSelect from "pages/CommonComponents/CentreSelect";
import CountrySelect from "pages/CommonComponents/CountriesSelect";
import GenderSelect from "pages/CommonComponents/GenderSelect";
import { MembershipSelect } from "pages/CommonComponents/MembershipSelect";
import PhoneInput from "react-phone-input-2";
import { useNavigate } from "react-router-dom";
import GqlApiHandler from "services/GqlApiHandler";
import { useQuery } from "urql";

import GenericTextField, {
  getDefaultFormValues,
  getValidationSchema
} from "utils/formik/formikUtils";
import { memberDetailsFormikSchema } from "schemas/memberDetailsFormikSchema";
import React from "react";

interface Props {
  height: number;
  id?: number;
}

const RootStyle = styled(Paper)(({ theme }) => ({
  backdropFilter: "blur(6px)",
  padding: theme.spacing(2)
}));

const validationSchema = getValidationSchema(memberDetailsFormikSchema);

const initialValues = getDefaultFormValues(memberDetailsFormikSchema);

function MemberAddressDetailsSection(
  formik: ReturnType<typeof useFormik>
): JSX.Element {
  return (
    <Accordion style={{ width: "100%" }}>
      <AccordionSummary
        expandIcon={<Iconify icon="eva:arrow-forward-outline" />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography>Address Details</Typography>
      </AccordionSummary>
      <AccordionDetails style={{ width: "100%" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <CountrySelect
              value={formik.values.currentCountry}
              textFieldProps={{ label: "Current Country" }}
              onChange={(v) => formik.setFieldValue("currentCountry", v)}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <GenericTextField
              formikSchema={memberDetailsFormikSchema}
              schemaKey="currentStreetAddress"
              formik={formik}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <GenericTextField
              formikSchema={memberDetailsFormikSchema}
              schemaKey="currentCity"
              formik={formik}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <GenericTextField
              formikSchema={memberDetailsFormikSchema}
              schemaKey="currentStateProvince"
              formik={formik}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <CountrySelect
              value={formik.values.permanentCountry}
              textFieldProps={{ label: "Permanent Country" }}
              onChange={(v) => formik.setFieldValue("permanentCountry", v)}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <GenericTextField
              formikSchema={memberDetailsFormikSchema}
              schemaKey="permanentStreetAddress"
              formik={formik}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <GenericTextField
              formikSchema={memberDetailsFormikSchema}
              schemaKey="permanentCity"
              formik={formik}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <GenericTextField
              formikSchema={memberDetailsFormikSchema}
              schemaKey="permanentStateProvince"
              formik={formik}
            />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}

function MemberMainDetailsSection(
  formik: ReturnType<typeof useFormik>
): JSX.Element {
  return (
    <Accordion style={{ width: "100%" }} defaultExpanded>
      <AccordionSummary
        expandIcon={<Iconify icon="eva:arrow-forward-outline" />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Main Details</Typography>
      </AccordionSummary>
      <AccordionDetails style={{ width: "100%" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <GenericTextField
              formikSchema={memberDetailsFormikSchema}
              schemaKey="firstName"
              formik={formik}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <GenericTextField
              formikSchema={memberDetailsFormikSchema}
              schemaKey="middleName"
              formik={formik}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <GenericTextField
              formikSchema={memberDetailsFormikSchema}
              schemaKey="lastName"
              formik={formik}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <GenericTextField
              formikSchema={memberDetailsFormikSchema}
              schemaKey="email"
              formik={formik}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <GenericTextField
              formikSchema={memberDetailsFormikSchema}
              schemaKey="title"
              formik={formik}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <CentreSelect
              value={formik.values.centreId}
              onChange={(v) => formik.setFieldValue("centreId", v)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <PhoneInput
              value={formik.values.phoneMobile as string}
              country="np"
              onChange={(phone) => formik.setFieldValue("phoneMobile", phone)}
              inputStyle={{ width: "100%", height: "56px" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <GenderSelect
              value={formik.values.gender}
              onChange={(v) => {
                formik.setFieldValue("gender", v);
              }}
            />
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
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}

function MemberOtherDetailsSection(
  formik: ReturnType<typeof useFormik>
): JSX.Element {
  return (
    <Accordion style={{ width: "100%" }}>
      <AccordionSummary
        expandIcon={<Iconify icon="eva:arrow-forward-outline" />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Other details</Typography>
      </AccordionSummary>
      <AccordionDetails style={{ width: "100%" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <GenericTextField
              formikSchema={memberDetailsFormikSchema}
              schemaKey="refugeName"
              formik={formik}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <MembershipSelect
              value={formik.values.membershipType}
              onChange={(v) => {
                formik.setFieldValue("membershipType", v);
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <GenericTextField
              formikSchema={memberDetailsFormikSchema}
              schemaKey="phoneLand"
              formik={formik}
            />
          </Grid>
          <Grid item xs={4}>
            <GenericTextField
              formikSchema={memberDetailsFormikSchema}
              schemaKey="phoneOther"
              formik={formik}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <GenericTextField
              formikSchema={memberDetailsFormikSchema}
              schemaKey="yearOfBirth"
              formik={formik}
              type="number"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <GenericTextField
              formikSchema={memberDetailsFormikSchema}
              schemaKey="viber"
              formik={formik}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <GenericTextField
              formikSchema={memberDetailsFormikSchema}
              schemaKey="messenger"
              formik={formik}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <GenericTextField
              formikSchema={memberDetailsFormikSchema}
              schemaKey="insta"
              formik={formik}
            />
          </Grid>
          <Grid item xs={12}>
            <GenericTextField
              formikSchema={memberDetailsFormikSchema}
              schemaKey="note"
              formik={formik}
              multiline
              rows={4}
            />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}

export default function MemberDetailsSection(props: Props) {
  const { id } = props;

  const navigate = useNavigate();

  const [{ fetching: creating }, createMemberMut] = useCreateMemberMutation();
  const [{ fetching: updating }, updateMemberMut] = useUpdateMemberMutation();

  const [{ data }] = useQuery<MemberQuery>({
    query: MemberDocument,
    pause: !id,
    variables: { id }
  });

  const getInitialFormValues = (data?: MemberQuery): any => {
    return data
      ? omit(
          {
            ...data?.member,
            centreId: data?.member.centre?.id,
            currentStreetAddress: data?.member.currentAddress?.street,
            currentCountry: data?.member.currentAddress?.country,
            currentStateProvince: data?.member.currentAddress?.stateProvince,
            currentCity: data?.member.currentAddress?.city,
            permanentStreetAddress: data?.member.permanentAddress?.street,
            permanentStateProvince:
              data?.member.permanentAddress?.stateProvince,
            permanentCity: data?.member.permanentAddress?.city,
            permanentCountry: data?.member.permanentAddress?.country
          },
          ["user", "centre", "__typename", "permanentAddress", "currentAddress"]
        )
      : initialValues;
  };

  const initialFormValues = getInitialFormValues(data);

  const updateMember = async (id: number, values: typeof initialFormValues) => {
    return new GqlApiHandler(
      await updateMemberMut({ updateMemberInput: { id, ...values } })
    )
      .onSuccess(({ notiSuccess }) => {
        notiSuccess("Member successfully updated!");
        navigate("/app/members");
      })
      .onError(({ notiErr }) => notiErr());
  };

  const createMember = async (values: typeof initialFormValues) => {
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
  };

  const onFormSubmit = async (values: typeof initialFormValues) => {
    if (id) {
      await updateMember(id, values);
    } else {
      createMember(values);
    }
  };

  const formik = useFormik({
    initialValues: initialFormValues,
    validationSchema,
    enableReinitialize: true,
    onSubmit: onFormSubmit
  });

  return (
    <>
      <Grid item xs={12} md={6} lg={8}>
        <RootStyle
          elevation={1}
          sx={{ height: "calc(100vh - 200px)", overflowY: "auto" }}
        >
          <Grid container spacing={2}>
            <MemberMainDetailsSection {...formik} />
            <MemberAddressDetailsSection {...formik} />
            <MemberOtherDetailsSection {...formik} />
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
