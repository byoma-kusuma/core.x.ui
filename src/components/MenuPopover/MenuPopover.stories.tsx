import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import MenuPopover, { MenuPopoverProps } from ".";
import Button from "@mui/material/Button";

export default {
  title: "Components/MenuPopover",
  component: MenuPopover
} as Meta;

const Template: Story<MenuPopoverProps> = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div>
      <Button ref={anchorRef} onClick={handleToggle}>
        Open Popover
      </Button>
      <MenuPopover
        open={open}
        anchorEl={anchorRef.current}
        onClose={handleToggle}
      >
        <div>Popover content</div>
      </MenuPopover>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
