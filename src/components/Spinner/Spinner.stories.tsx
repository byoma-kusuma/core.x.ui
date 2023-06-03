import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Spinner from ".";

export default {
  title: "Components/Spinner",
  component: Spinner,
  argTypes: {
    isModuleLoader: { control: "boolean" },
    moduleText: { control: "text" },
    circularProgressProps: { control: "object" },
    optionalNode: { control: false }
  }
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args} />
);

export const DefaultSpinner = Template.bind({});
DefaultSpinner.args = {};

export const ModuleLoaderSpinner = Template.bind({});
ModuleLoaderSpinner.args = {
  isModuleLoader: true
};

export const CustomTextSpinner = Template.bind({});
CustomTextSpinner.args = {
  isModuleLoader: true,
  moduleText: "Custom loading message..."
};

export const CustomCircularProgressSpinner = Template.bind({});
CustomCircularProgressSpinner.args = {
  circularProgressProps: {
    color: "secondary",
    size: 60
  }
};

export const SpinnerWithOptionalNode = Template.bind({});
SpinnerWithOptionalNode.args = {
  optionalNode: <div>Optional Node</div>
};
