import * as React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Label, { Labelprops } from ".";

export default {
  title: "Components/Label",
  component: Label,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["rounded", "semi-rounded", "squared"]
      }
    },
    vivid: {
      control: "boolean"
    },
    color: {
      control: "color"
    }
  }
} as Meta;

const Template: Story<Labelprops> = (args) => <Label {...args} />;

export const Rounded = Template.bind({});
Rounded.args = {
  label: "Rounded Label",
  type: "rounded",
  vivid: false,
  color: "primary"
};

export const SemiRounded = Template.bind({});
SemiRounded.args = {
  label: "Semi Rounded Label",
  type: "semi-rounded",
  vivid: true,
  color: "secondary"
};

export const Squared = Template.bind({});
Squared.args = {
  label: "Squared Label",
  type: "squared",
  vivid: false,
  color: "error"
};
