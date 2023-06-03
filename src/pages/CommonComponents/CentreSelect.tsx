import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import * as React from "react";
import { useCentresQuery } from "generated/graphql";

interface Props {
  value: number | null;
  onChange: (v: number | null) => void;
}

export default function CentreSelect(props: Props) {
  const { value, onChange } = props;

  const [{ data, fetching }] = useCentresQuery();

  return (
    <Autocomplete
      id="asynchronous-demo"
      getOptionLabel={(option) => option.displayText || ""}
      options={data?.centres || []}
      value={data?.centres.find((c) => c.id === value) || null}
      onChange={(_, v) => onChange(v?.id || null)}
      loading={fetching}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Centre"
          fullWidth
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
