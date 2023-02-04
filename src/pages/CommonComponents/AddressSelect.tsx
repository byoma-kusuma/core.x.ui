import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import * as React from "react";
import { useAddressesQuery } from "../../generated/graphql";

export default function AddressSelect() {
  const [{ data, fetching }] = useAddressesQuery();

  return (
    <Autocomplete
      id="asynchronous-demo"
      sx={{ width: 300 }}
      getOptionLabel={(option) => option.city || ""}
      options={data?.addresses || []}
      loading={fetching}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Address"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {fetching ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            )
          }}
        />
      )}
    />
  );
}
