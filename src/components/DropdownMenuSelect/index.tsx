import * as React from "react";
import { alpha } from "@mui/material/styles";
import { Box, MenuItem, Stack, IconButton } from "@mui/material";
import MenuPopover from "../MenuPopover";

interface SelectItem {
  label: string;
  icon?: string;
  onClick: () => void;
}

export interface DropdownMenuSelectProps {
  items: Array<SelectItem>;
}

export default function DropdownMenuSelect(props: DropdownMenuSelectProps) {
  const { items } = props;

  const anchorRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (
    index: number,
    items: DropdownMenuSelectProps["items"]
  ) => {
    setActiveIndex(index);
    items[index].onClick();
    setOpen(false);
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: "8px",
          width: 40,
          height: 40,
          ...(open && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.focusOpacity
              )
          })
        }}
      >
        <img src={items[activeIndex].icon} alt={items[activeIndex].label} />
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{
          mt: 1.5,
          ml: 0.75,
          width: 180,
          "& .MuiMenuItem-root": {
            px: 1,
            typography: "body2",
            borderRadius: 0.75
          }
        }}
      >
        <Stack spacing={0.75}>
          {items.map((option, idx) => (
            <MenuItem
              key={option.label}
              selected={idx === activeIndex}
              onClick={() => handleChange(idx, items)}
            >
              {option.icon && (
                <Box
                  component="img"
                  alt={option.label}
                  src={option.icon}
                  sx={{ width: 28, mr: 2 }}
                />
              )}

              {option.label}
            </MenuItem>
          ))}
        </Stack>
      </MenuPopover>
    </>
  );
}
