import { IconButton } from "@mui/material";
import * as React from "react";
import Iconify from "../Iconify";

export default function ContactsPopover() {
  const anchorRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <IconButton
      ref={anchorRef}
      color={open ? "primary" : "default"}
      onClick={handleOpen}
      sx={{ width: 40, height: 40 }}
    >
      <Iconify icon="eva:people-fill" width={20} height={20} />
    </IconButton>
  );
}
