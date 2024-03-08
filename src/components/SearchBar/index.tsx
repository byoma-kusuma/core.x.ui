import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  Input,
  Slide,
  Button,
  IconButton,
  InputAdornment,
  ClickAwayListener
} from "@mui/material";
import Iconify from "../../components/Iconify";

const APPBAR_MOBILE = 32;
const APPBAR_DESKTOP = 46;

const SearchbarStyle = styled("div")(({ theme }) => ({
  top: 0,
  left: 0,
  zIndex: 99,
  width: "100%",
  display: "flex",
  position: "absolute",
  alignItems: "center",
  height: APPBAR_MOBILE,
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)", // Fix on Mobile
  padding: theme.spacing(0, 3),
  boxShadow: theme.customShadows.z8,
  backgroundColor: `${alpha(theme.palette.background.default, 0.72)}`,
  [theme.breakpoints.up("md")]: {
    height: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5)
  }
}));

interface SearchbarProps {
  onSearch: (s: string) => void;
}

export default function Searchbar(props: SearchbarProps) {
  const { onSearch } = props;

  const [isOpen, setOpen] = React.useState(false);
  const [searchString, setSearchString] = React.useState("");

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        {!isOpen && (
          <IconButton onClick={handleOpen}>
            <Iconify icon="eva:search-fill" width={20} height={20} />
          </IconButton>
        )}

        <Slide direction="down" in={isOpen} mountOnEnter unmountOnExit>
          <SearchbarStyle>
            <Input
              autoFocus
              fullWidth
              disableUnderline
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
              placeholder="Search…"
              startAdornment={
                <InputAdornment position="start">
                  <Iconify
                    icon="eva:search-fill"
                    sx={{ color: "text.disabled", width: 20, height: 20 }}
                  />
                </InputAdornment>
              }
              sx={{ mr: 1, fontWeight: "fontWeightBold" }}
            />
            <Button
              variant="contained"
              onClick={() => {
                onSearch(searchString);
                handleClose();
              }}
            >
              Search
            </Button>
          </SearchbarStyle>
        </Slide>
      </div>
    </ClickAwayListener>
  );
}
