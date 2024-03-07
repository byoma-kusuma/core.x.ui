import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { alpha } from "@mui/material/styles";
import {
  Divider,
  MenuItem,
  Avatar,
  IconButton,
  DividerProps
} from "@mui/material";
import MenuPopover from "../MenuPopover";

interface SchemaTypeMenu {
  label: string;
  linkTo?: string;
  icon?: string;
  onClick?: () => void;
  type: "menu";
}

interface DividerTypeMenu extends DividerProps {
  type: "divider";
}

interface CustomNodeTypeMenu {
  element: JSX.Element;
  type: "custom";
}

type MenuSchema = SchemaTypeMenu | DividerTypeMenu | CustomNodeTypeMenu;

interface AvatarPopoverProps {
  photoUrl: string;
  schema: Array<MenuSchema>;
}

export default function AvatarPopover(props: AvatarPopoverProps) {
  const { photoUrl, schema } = props;

  const [anchorEl, setAnchorlEl] =
    React.useState<HTMLButtonElement | null>(null);

  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorlEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorlEl(null);
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        data-testid="navigation-profilePicture-menu"
        sx={{
          p: 0,
          ...(open
            ? {
                "&:before": {
                  zIndex: 1,
                  content: "''",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  position: "absolute",
                  bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8)
                }
              }
            : {})
        }}
      >
        <Avatar src={photoUrl} alt="photoURL" />
      </IconButton>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={anchorEl}
        onClose={handleClose}
        sx={{
          p: 0,
          mt: 1.5,
          ml: 0.75,
          "& .MuiMenuItem-root": {
            typography: "body2",
            borderRadius: 0.75
          }
        }}
      >
        {schema.map((schemaItem, i) => (
          <div key={i}>
            {schemaItem.type === "custom" && schemaItem.element}
            {schemaItem.type === "divider" && (
              <Divider sx={{ borderStyle: "dashed" }} />
            )}
            {schemaItem.type === "menu" && (
              <MenuItem
                key={schemaItem.label}
                {...(schemaItem.linkTo
                  ? { component: RouterLink, to: schemaItem.linkTo }
                  : {})}
                onClick={() => {
                  handleClose();
                  if (schemaItem?.onClick) schemaItem?.onClick();
                }}
              >
                {schemaItem.label}
              </MenuItem>
            )}
          </div>
        ))}
      </MenuPopover>
    </>
  );
}
