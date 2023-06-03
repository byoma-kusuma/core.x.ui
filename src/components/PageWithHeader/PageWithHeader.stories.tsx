import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Story, Meta } from "@storybook/react/types-6-0";
import PageWithHeader, { PageWithHeaderProps } from "."; // Adjust the path as needed

export default {
  title: "Components/PageWithHeader",
  component: PageWithHeader,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ]
} as Meta;

const Template: Story<PageWithHeaderProps> = (args) => (
  <PageWithHeader {...args} />
);

export const Default = Template.bind({});
Default.args = {
  header: "Sample Header",
  children: <div>Page content goes here...</div>
};

export const WithBreadcrumbs = Template.bind({});
WithBreadcrumbs.args = {
  header: "Sample Header",
  children: <div>Page content goes here...</div>,
  crumbs: [
    { route: "/", label: "Home", key: "home" },
    { route: "/about", label: "About", key: "about" }
  ]
};

export const WithActionButton = Template.bind({});
WithActionButton.args = {
  header: "Sample Header",
  children: <div>Page content goes here...</div>,
  actionButton: <button>Action Button</button>
};

export const LoadingState = Template.bind({});
LoadingState.args = {
  header: "Sample Header",
  children: <div>Page content goes here...</div>,
  loading: true
};
