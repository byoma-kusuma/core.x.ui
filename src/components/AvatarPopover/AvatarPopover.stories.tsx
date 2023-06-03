import { ComponentStory, ComponentMeta } from "@storybook/react";
import AccountPopover from ".";
import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Box } from "@mui/material";
import ThemeProvider from "theme";

const defaultArgs = {
  photoUrl: "https://via.placeholder.com/150",
  schema: [
    {
      label: "Menu Item 1",
      linkTo: "/link1",
      type: "menu" as const
    },
    {
      type: "divider" as const
    },
    {
      label: "Menu Item 2",
      linkTo: "/link2",
      type: "menu" as const
    },
    {
      type: "custom" as const,
      element: <div>Custom Component</div>
    }
  ]
};

export default {
  title: "Components/AccountPopover",
  component: AccountPopover,
  argTypes: {
    photoUrl: {
      control: "text",
      description: "URL of the photo",
      defaultValue: defaultArgs.photoUrl
    },
    schema: {
      description:
        "Menu schema for the popover. The schema is an array of objects, where each object represents a menu item or a divider or a custom component."
    }
  }
} as ComponentMeta<typeof AccountPopover>;

const Template: ComponentStory<typeof AccountPopover> = (args) => (
  <Router>
    <ThemeProvider>
      <Box>
        <AccountPopover {...args} />
      </Box>
    </ThemeProvider>
  </Router>
);

export const Default = Template.bind({});
Default.args = defaultArgs;
