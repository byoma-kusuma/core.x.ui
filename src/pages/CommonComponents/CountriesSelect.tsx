import { Autocomplete, TextField } from "@mui/material";
import * as React from "react";
import * as countries from "i18n-iso-countries";
import countriesJson from "i18n-iso-countries/langs/en.json";

interface Props {
  value: string | null;
  onChange: (v: string | null) => void;
  textFieldProps?: React.ComponentProps<typeof TextField>;
}

countries.registerLocale(countriesJson);

export default function CountrySelect(props: Props) {
  const { value, onChange, textFieldProps = {} } = props;

  console.log(countries.getNames("en"));

  const countryOptions = React.useMemo(() => {
    return Object.entries(countries.getNames("en")).map(([code, name]) => ({
      code,
      name
    }));
  }, []);

  return (
    <Autocomplete
      id="asynchronous-demo"
      getOptionLabel={(option) => option.name || ""}
      options={countryOptions}
      value={
        value ? { code: value, name: countries.getName(value, "en") } : null
      }
      onChange={(_, v) => onChange(v?.code || null)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Country"
          fullWidth
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>{params.InputProps.endAdornment}</React.Fragment>
            )
          }}
          {...textFieldProps}
        />
      )}
    />
  );
}
