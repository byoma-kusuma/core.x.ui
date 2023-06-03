import * as React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import NavSection, { NavSectionProps } from ".";
import { Box } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { NavigationItem } from "schemas/navigation";
import ThemeProvider from "theme";

export default {
  title: "Components/NavSection",
  component: NavSection,
  argTypes: {
    navConfig: { control: false }
  }
} as Meta;

const navConfig: NavigationItem[] = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: ""
  },
  {
    title: "Profile",
    path: "/profile",
    icon: ""
  },
  {
    path: "/group1",
    title: "Group 1",
    children: [
      {
        title: "Subitem 1",
        path: "/subitem1",
        icon: ""
      },
      {
        title: "Subitem 2",
        path: "/subitem2",
        icon: ""
      }
    ]
  }
];

const Template: Story<NavSectionProps> = (args) => (
  <BrowserRouter>
    <ThemeProvider>
      <Box width="100%">
        <NavSection {...args} />
      </Box>
    </ThemeProvider>
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
  navConfig: navConfig
};

export const NoItems = Template.bind({});
NoItems.args = {
  navConfig: []
};

export const SingleItem = Template.bind({});
SingleItem.args = {
  navConfig: [navConfig[0]]
};

export const GroupItems = Template.bind({});
GroupItems.args = {
  navConfig: [navConfig[2]]
};
