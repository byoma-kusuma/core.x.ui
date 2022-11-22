import {
  Autocomplete,
  Avatar,
  Chip,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import { omit } from "lodash";
import * as React from "react";
import { MembersQuery } from "../../generated/graphql";
import { getMemberFullName } from "../Members/utils";

interface Props {
  value: Array<number>;
  onChange: (
    memberIds: Array<number>,
    members: MembersQuery["members"]
  ) => void;
  options: MembersQuery["members"];
  label?: string;
}

export default function MembersSelectAutocomplete(props: Props) {
  const { value, onChange, options, label } = props;

  const membersDataByMemberId = React.useMemo(
    () =>
      options.reduce((acc, cur) => {
        acc[cur.id] = cur;
        return acc;
      }, {} as Record<number, MembersQuery["members"][0]>),
    [options]
  );

  return (
    <Autocomplete
      disablePortal
      multiple
      fullWidth
      value={value.map((id) => membersDataByMemberId[id]).filter(Boolean)}
      onChange={(_, v) => {
        onChange(
          v.map((m) => m.id),
          v
        );
      }}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip
            key={option.id}
            label={getMemberFullName(option)}
            avatar={<Avatar alt="member-avatar" src={option.photo || ""} />}
            {...omit(getTagProps({ index }), "key")}
          />
        ))
      }
      id="member-select"
      options={options}
      renderOption={(props, option) => (
        <li {...props}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar src={option.photo || ""} />
            <Typography variant="subtitle2">
              {option.id}. {getMemberFullName(option)}
            </Typography>
          </Stack>
        </li>
      )}
      getOptionLabel={(option) => getMemberFullName(option)}
      renderInput={(params) => (
        <TextField {...params} label={label || "Members"} />
      )}
    />
  );
}
