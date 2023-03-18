import { Autocomplete, TextField } from "@mui/material";
import * as React from "react";

enum GenderType {
  MALE = "Male",
  FEMALE = "Female",
  OTHER = "Other",
  PREFER_NOT_TO_SAY = "Prefer not to say"
}

interface Props {
  value: GenderType | null;
  onChange: (v: GenderType | null) => void;
}

export default function GenderSelect(props: Props) {
  const { value, onChange } = props;

  const options = Object.values(GenderType);

  return (
    <Autocomplete
      id="asynchronous-demo"
      options={options}
      value={value || null}
      onChange={(_, v) => onChange(v || null)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Gender"
          fullWidth
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>{params.InputProps.endAdornment}</React.Fragment>
            )
          }}
        />
      )}
    />
  );
}
