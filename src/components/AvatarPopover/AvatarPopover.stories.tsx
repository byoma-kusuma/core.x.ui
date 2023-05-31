import { ComponentStory, ComponentMeta } from "@storybook/react";
import AccountPopover from ".";
import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ThemeProvider from "../../theme";
import { Box } from "@mui/material";

export default {
  title: "AccountPopover",
  component: AccountPopover,
  argTypes: {
    photoUrl: {
      control: "text",
      description: "URL of the photo"
    },
    schema: {
      description: "Menu schema for the popover",
      control: { disable: true }
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
Default.args = {
  photoUrl: "https://via.placeholder.com/150",
  schema: [
    {
      label: "Menu Item 1",
      linkTo: "/link1",
      type: "menu"
    },
    {
      type: "divider"
    },
    {
      label: "Menu Item 2",
      linkTo: "/link2",
      type: "menu"
    },
    {
      type: "custom",
      element: <div>Custom Component</div>
    }
  ]
};
