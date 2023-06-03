import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Searchbar, { SearchbarProps } from "."; // Adjust the path as needed
import ThemeProvider from "../../theme";

export default {
  title: "Components/Searchbar",
  component: Searchbar
} as Meta;

const Template: Story<SearchbarProps> = (args) => (
  <ThemeProvider>
    <Searchbar {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  onSearch: (s) => {
    alert(`Searching for: ${s}`);
  }
};
