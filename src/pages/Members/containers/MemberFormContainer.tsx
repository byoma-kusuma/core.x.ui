import { LoadingButton } from "@mui/lab";
import { Box, Button, Grid, Paper, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useFormik } from "formik";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "urql";
import {
  CentreAffiliationType,
  CreateMemberInput,
  MemberDocument,
  MemberQuery,
  useCreateMemberMutation
} from "../../../generated/graphql";
import GqlApiHandler from "../../../services/GqlApiHandler";

const RootStyle = styled(Paper)(({ theme }) => ({
  backdropFilter: "blur(6px)",
  padding: theme.spacing(2)
}));

const initialValues: CreateMemberInput = {
  firstName: "",
  lastName: "",
  active: true,
  centerAffiliation: CentreAffiliationType.Nepal,
  isMember: true
};

interface Props {
  height: number;
  id?: string;
}

export default function MemberFormContainer(props: Props) {
  const { height, id } = props;

  const navigate = useNavigate();
  const [{ fetching: creating }, createMemberMut] = useCreateMemberMutation();

  const [{ data }, reExec] = useQuery<MemberQuery>({
    query: MemberDocument,
    pause: !id,
    variables: { id }
  });

  const formik = useFormik({
    initialValues: data?.member || initialValues,
    enableReinitialize: true,
    onSubmit: async (values) => {
      new GqlApiHandler(await createMemberMut({ createMemberInput: values }))
        .onSuccess(({ notiSuccess }) =>
          notiSuccess("Member successfully created!")
        )
        .onError(({ notiErr }) => notiErr());
      navigate("/app/members");
    }
  });

  return (
    <RootStyle elevation={1} sx={{ height: `${height}px` }}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              value={formik.values.firstName || ""}
              onChange={(e) =>
                formik.setFieldValue("firstName", e.target.value)
              }
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              value={formik.values.lastName || ""}
              onChange={(e) => formik.setFieldValue("lastName", e.target.value)}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              value={formik.values.email || ""}
              onChange={(e) => formik.setFieldValue("email", e.target.value)}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="center">
          <LoadingButton
            variant="contained"
            sx={{ mt: 2 }}
            size="large"
            type="submit"
            loading={creating}
          >
            Create Member
          </LoadingButton>
        </Box>
      </form>
    </RootStyle>
  );
}
