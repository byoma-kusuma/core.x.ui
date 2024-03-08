import { Autocomplete, TextField } from "@mui/material";
import { startCase } from "lodash";
import * as React from "react";
import { CalendarType } from "generated/graphql";

interface CalendarSelectProps {
  value: CalendarType | null;
  onChange: (v: CalendarType | null) => void;
}

export function CalendarTypeSelect(props: CalendarSelectProps) {
  const { value, onChange } = props;

  const calendarTypeOptions = Object.values(CalendarType);

  return (
    <Autocomplete
      id="calendar-select"
      getOptionLabel={(option) => startCase(option)}
      options={calendarTypeOptions}
      value={value}
      onChange={(_, v) => onChange(v || null)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Calendar Type"
          fullWidth
          InputProps={{
            ...params.InputProps
          }}
        />
      )}
    />
  );
}
