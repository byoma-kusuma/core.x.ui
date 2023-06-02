import * as React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import NavigationBar, { NavigationBarProps } from ".";
import ThemeProvider from "../../theme";
import { Box } from "@mui/material";

export default {
  title: "Components/NavigationBar",
  component: NavigationBar,
  argTypes: {
    onHamburgerClick: { action: "clicked" },
    onSearch: { action: "searched" },
    stackItemsRenderer: { control: false }
  }
} as Meta;

const Template: Story<NavigationBarProps> = (args) => (
  <ThemeProvider>
    <Box width="100%">
      <NavigationBar {...args} />
    </Box>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  onHamburgerClick: () => {
    console.log("haha");
  },
  onSearch: (s) => {
    console.log(s);
  },
  stackItemsRenderer: () => <div>Default Item</div>
};

export const MultipleItems = Template.bind({});
MultipleItems.args = {
  ...Default.args,
  stackItemsRenderer: () => (
    <Box color="black" display="flex">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Box>
  )
};

export const NoItems = Template.bind({});
NoItems.args = {
  ...Default.args,
  stackItemsRenderer: () => <></>
};
