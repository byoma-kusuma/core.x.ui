import { LoadingButton } from "@mui/lab";
import { Box, Grid, Paper, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useFormik } from "formik";
import { omit } from "lodash";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "urql";
import {
  AbhisekhaDocument,
  AbhisekhaQuery,
  CreateAbhisekhaInput,
  useCreateAbhisekhaMutation,
  useUpdateAbhisekhaMutation
} from "../../generated/graphql";
import GqlApiHandler from "../../services/GqlApiHandler";

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
  teacher: ""
};

export default function AbhisekhaFormContainer(props: Props) {
  const { id } = props;

  const navigate = useNavigate();

  const [{ fetching: creating }, createAbhisekhaMut] =
    useCreateAbhisekhaMutation();
  const [{ fetching: updating }, updateAbhisekhaMut] =
    useUpdateAbhisekhaMutation();

  const [{ data }] = useQuery<AbhisekhaQuery>({
    query: AbhisekhaDocument,
    pause: !id,
    variables: { abhisekhaId: id }
  });

  const formik = useFormik({
    initialValues: data
      ? omit(data?.abhisekha, [
          "__typename",
          "createdAt",
          "updatedAt",
          "abhisekhaMembers",
          "abhisekhaResources"
        ])
      : initialValues,
    enableReinitialize: true,
    onSubmit: async (values) => {
      if (id) {
        // edit mode
        new GqlApiHandler(
          await updateAbhisekhaMut({ updateAbhisekhaInput: { id, ...values } })
        )
          .onSuccess(({ notiSuccess }) => {
            notiSuccess("Abhisekha successfully updated!");
            navigate("/app/abhisekhas");
          })
          .onError(({ notiErr }) => notiErr());
      } else {
        // create mode
        new GqlApiHandler(
          await createAbhisekhaMut({
            createAbhisekhaInput: values as CreateAbhisekhaInput
          })
        )
          .onSuccess(({ notiSuccess }) => {
            notiSuccess("Abhisekha successfully created!");
            navigate("/app/abhisekhas");
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
                <Grid item xs={6} sm={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    value={formik.values.name}
                    onChange={(e) =>
                      formik.setFieldValue("name", e.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={6} sm={6}>
                  <TextField
                    fullWidth
                    label="Teacher"
                    value={formik.values.teacher}
                    onChange={(e) =>
                      formik.setFieldValue("teacher", e.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Abhisekha Description"
                    value={formik.values.description}
                    onChange={(e) =>
                      formik.setFieldValue("description", e.target.value)
                    }
                  />
                </Grid>
              </Grid>
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
                  {id ? "Update Abhisekha" : "Create Abhisekha"}
                </LoadingButton>
              </Box>
            </form>
          </form>
        </RootStyle>
      </Grid>
    </>
  );
}
