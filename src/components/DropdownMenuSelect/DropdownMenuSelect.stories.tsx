// Importing necessary libraries and components
import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import DropdownMenuSelect, { DropdownMenuSelectProps } from ".";

export default {
  title: "Components/DropdownMenuSelect",
  component: DropdownMenuSelect
} as Meta;

// Dummy onClick function
const onClick = () => console.log("Clicked!");

// Dummy items
// Dummy items
const items = [
  {
    label: "Item 1",
    icon: "https://placeimg.com/50/50/animals",
    onClick: onClick
  },
  {
    label: "Item 2",
    icon: "https://placeimg.com/100/100/arch",
    onClick: onClick
  },
  {
    label: "Item 3",
    icon: "https://placeimg.com/100/100/nature",
    onClick: onClick
  }
];

// Defining a Template for generating story variants
const Template: Story<DropdownMenuSelectProps> = (args) => (
  <DropdownMenuSelect {...args} />
);

// Story Variants based on the Template
export const Default = Template.bind({});
Default.args = {
  items: items
};
