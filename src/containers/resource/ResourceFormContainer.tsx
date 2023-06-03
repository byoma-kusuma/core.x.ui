import { LoadingButton } from "@mui/lab";
import { Box, Grid, Paper, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useFormik } from "formik";
import { omit } from "lodash";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "urql";
import {
  CreateResourceInput,
  ResourceDocument,
  ResourceQuery,
  useCreateResourceMutation,
  useUpdateResourceMutation
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
  url: "",
  type: ""
};

export default function ResourceFormContainer(props: Props) {
  const { id } = props;

  const navigate = useNavigate();

  const [{ fetching: creating }, createResourceMut] =
    useCreateResourceMutation();
  const [{ fetching: updating }, updateResourceMut] =
    useUpdateResourceMutation();

  const [{ data }] = useQuery<ResourceQuery>({
    query: ResourceDocument,
    pause: !id,
    variables: { resourceId: id }
  });

  const formik = useFormik({
    initialValues: data
      ? omit(data?.resource, [
          "__typename",
          "createdAt",
          "updatedAt",
          "resourceAbhisekhas",
          "resourceEvents",
          "resourceMembers"
        ])
      : initialValues,
    enableReinitialize: true,
    onSubmit: async (values) => {
      if (id) {
        // edit mode
        new GqlApiHandler(
          await updateResourceMut({ updateResourceInput: { id, ...values } })
        )
          .onSuccess(({ notiSuccess }) => {
            notiSuccess("Resource successfully updated!");
            navigate("/app/resources");
          })
          .onError(({ notiErr }) => notiErr());
      } else {
        // create mode
        new GqlApiHandler(
          await createResourceMut({
            createResourceInput: values as CreateResourceInput
          })
        )
          .onSuccess(({ notiSuccess }) => {
            notiSuccess("Resource successfully created!");
            navigate("/app/resources");
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
                    label="Type"
                    value={formik.values.type}
                    onChange={(e) =>
                      formik.setFieldValue("type", e.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Resource URL"
                    value={formik.values.url}
                    onChange={(e) =>
                      formik.setFieldValue("url", e.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Resource Description"
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
                  {id ? "Update Resource" : "Create Resource"}
                </LoadingButton>
              </Box>
            </form>
          </form>
        </RootStyle>
      </Grid>
    </>
  );
}
