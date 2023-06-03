import { Autocomplete, TextField } from "@mui/material";
import { startCase } from "lodash";
import * as React from "react";
import { MembershipType } from "generated/graphql";

interface MembershipSelectProps {
  value: MembershipType | null;
  onChange: (v: MembershipType | null) => void;
}

export function MembershipSelect(props: MembershipSelectProps) {
  const { value, onChange } = props;

  const membershipOptions = Object.values(MembershipType);

  return (
    <Autocomplete
      id="membership-select"
      getOptionLabel={(option) => startCase(option)}
      options={membershipOptions}
      value={value}
      onChange={(_, v) => onChange(v || null)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Membership Type"
          fullWidth
          InputProps={{
            ...params.InputProps
          }}
        />
      )}
    />
  );
}
