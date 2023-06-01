// Importing necessary libraries and components
import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import InfoProvider, { InfoProviderProps } from ".";

export default {
  title: "Components/InfoProvider",
  component: InfoProvider
} as Meta;

// Defining a Template for generating story variants
const Template: Story<InfoProviderProps> = (args) => <InfoProvider {...args} />;

// Story Variants based on the Template
export const Default = Template.bind({});
Default.args = {
  info: "Default tooltip information"
};

export const LongerInformation = Template.bind({});
LongerInformation.args = {
  info: "This is a tooltip with a longer piece of information"
};
