import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Toolbar,
  Tooltip,
  IconButton,
  Typography,
  OutlinedInput,
  InputAdornment,
  Box,
  FormControlLabel,
  Checkbox,
  Tabs,
  Tab,
  Button
} from "@mui/material";
import Iconify from "../Iconify";
import { FilterSchema } from ".";
import { DebounceInput } from "react-debounce-input";

const ToolBarStyle = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1, 0, 3),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
    height: "auto"
  }
}));

const FilterBarStyle = styled("div")(({ theme }) => ({
  height: "auto",
  borderTop: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(3),
  transition: "1s ease"
}));

const TopAdornmentStyle = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.grey[500_12],
  padding: theme.spacing(0),
  boxShadow: theme.customShadows.z1
}));

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
  width: 240,
  transition: theme.transitions.create(["box-shadow", "width"], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  "&.Mui-focused": { width: 320, boxShadow: theme.customShadows.z8 },
  "& fieldset": {
    borderWidth: "1px !important",
    borderColor: `${theme.palette.grey[500_32]} !important`
  },
  [theme.breakpoints.down("sm")]: {
    width: 140,
    height: 40,
    "&.Mui-focused": { width: 160, boxShadow: theme.customShadows.z8 }
  }
}));

export interface CoolTableToolbarCustomActionProps {
  buttonText: string;
  fn: () => any;
}

interface CoolTableToolbarProps<T> {
  selectedCount: number;
  searchQuery: string;
  totalCount: number;
  onSearch: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    s: string
  ) => void;
  onSelectToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filterSchema: {
    onTabChange: (v: number) => void;
    tab: number | null;
    schema: Array<FilterSchema<T>> | undefined;
  };
  onSelectActionButtonClick: () => void;
  dense: boolean;
  toolbarCustomActions?: Array<CoolTableToolbarCustomActionProps>;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

export default function CoolTableToolbar<T>(props: CoolTableToolbarProps<T>) {
  const {
    selectedCount,
    searchQuery,
    onSearch,
    onSelectToggle,
    filterSchema,
    onSelectActionButtonClick,
    toolbarCustomActions,
    dense
  } = props;

  const [showFilter, setShowFilter] = React.useState(false);

  return (
    <>
      {filterSchema.schema && filterSchema?.tab !== null && (
        <TopAdornmentStyle>
          <Tabs
            value={filterSchema.tab}
            onChange={(_, v) => {
              filterSchema.onTabChange(v);
            }}
            aria-label="Filter tabs"
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
          >
            {filterSchema.schema.map((schemaItem) => (
              <Tab
                label={schemaItem.label}
                {...a11yProps(schemaItem.id)}
                key={schemaItem.id}
                sx={(theme) => ({
                  fontWeight: theme.typography.fontWeightMedium
                })}
              />
            ))}
          </Tabs>
        </TopAdornmentStyle>
      )}
      <ToolBarStyle
        sx={{
          ...(selectedCount > 0 && {
            color: "primary.main",
            bgcolor: "primary.lighter"
          }),
          height: dense ? 64 : 96
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <SearchStyle
            value={searchQuery}
            placeholder="Search ..."
            autoFocus
            inputComponent={DebounceInput}
            sx={{ height: dense ? "40px" : "56px" }}
            inputProps={{
              debounceTimeout: 300,
              onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                onSearch(e, e.target.value)
            }}
            startAdornment={
              <InputAdornment position="start">
                <Iconify
                  icon="eva:search-fill"
                  sx={{ color: "text.disabled", width: 20, height: 20 }}
                />
              </InputAdornment>
            }
          />
          <Box sx={(theme) => ({ padding: theme.spacing(0, 0, 0, 3) })}>
            <Typography component="div" variant="caption">
              {selectedCount || "None"} selected
            </Typography>
            <FormControlLabel
              control={<Checkbox onChange={onSelectToggle} size="small" />}
              label={
                <Typography component="div" variant="caption">
                  Select All
                </Typography>
              }
            />
          </Box>
          {selectedCount > 0 && (
            <Tooltip title="Action Button">
              <IconButton onClick={onSelectActionButtonClick}>
                <Iconify icon="icon-park-twotone:transaction-order" />
              </IconButton>
            </Tooltip>
          )}
        </Box>

        {toolbarCustomActions?.map((c) => {
          return (
            <Button
              variant="outlined"
              color="primary"
              size="small"
              onClick={() => c.fn()}
              data-testid={c.buttonText + "Id"}
              key={c.buttonText + "key"}
            >
              {c.buttonText}
            </Button>
          );
        })}

        <Tooltip title="Filter list">
          <IconButton onClick={() => setShowFilter((p) => !p)}>
            <Iconify icon="ic:round-filter-list" />
          </IconButton>
        </Tooltip>
      </ToolBarStyle>
      {showFilter && (
        <FilterBarStyle>
          <Typography variant="body1">Add Filters Here</Typography>
        </FilterBarStyle>
      )}
    </>
  );
}
