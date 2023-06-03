import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Sidebar, { SidebarProps } from ".";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Components/Sidebar",
  component: Sidebar
} as Meta;

const Template: Story<SidebarProps> = (args) => (
  <BrowserRouter>
    <Sidebar {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
  isOpenSidebar: true,
  onCloseSidebar: () => ({}),
  navigationSchema: [
    {
      title: "Dashboard",
      path: "/",
      icon: ""
    },
    {
      title: "Products",
      path: "/products",
      icon: ""
    }
  ],
  currentUser: {
    fullName: "John Doe",
    role: "Admin",
    link: "#",
    avatar: "https://via.placeholder.com/150"
  },
  menuLogoUrl: "https://via.placeholder.com/40"
};
