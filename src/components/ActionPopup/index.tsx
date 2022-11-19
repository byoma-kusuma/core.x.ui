import {
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { styled } from "@mui/material/styles";

interface ActionItem {
  name: string;
  details?: string;
  onClick: () => void;
}

interface Props {
  open: boolean;
  handleClose: () => void;
  actionItems: Array<ActionItem>;
}

const ActionCard = styled(Card)(() => ({
  borderRadius: 0,
  height: "160px",
  marginLeft: "8px",
  marginRight: "8px",
  width: "160px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  border: "1px solid lightgrey",
  "&:hover": {
    boxShadow: "8px 4px lightgrey"
  }
}));

export default function ActionPopoup(props: Props) {
  const { open, handleClose, actionItems } = props;
  return (
    <Dialog
      open={open}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Pick an action</DialogTitle>
      <DialogContent>
        <Box display="flex" justifyContent="space-between" p={2}>
          {actionItems.map((item, i) => (
            <ActionCard
              key={i}
              /* elevation={6} */
              onClick={() => {
                handleClose();
                item.onClick();
              }}
            >
              {item.name}
            </ActionCard>
          ))}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="contained">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
