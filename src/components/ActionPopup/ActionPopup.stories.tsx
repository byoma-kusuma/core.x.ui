import { ComponentStory, ComponentMeta } from "@storybook/react";
import ActionPopup from ".";
import * as React from "react";

const defaultArgs = {
  actionItems: [
    {
      name: "Action 1",
      onClick: () => console.log("Action 1 clicked")
    },
    {
      name: "Action 2",
      onClick: () => console.log("Action 2 clicked")
    }
  ]
};

export default {
  title: "ActionPopup",
  component: ActionPopup,
  argTypes: {
    handleClose: {
      description:
        "Callback function to close the popup. Invoked when the cancel button is clicked.",
      table: {
        type: { summary: "function" }
      },
      control: { disable: true }
    },
    actionItems: {
      description:
        "Array of action items. Each item should be an object containing a `name` and an `onClick` function."
    }
  }
} as ComponentMeta<typeof ActionPopup>;

const Template: ComponentStory<typeof ActionPopup> = (args) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={handleOpen}>Open Action Popup</button>
      <ActionPopup
        open={open}
        handleClose={handleClose}
        actionItems={args.actionItems}
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = defaultArgs;
