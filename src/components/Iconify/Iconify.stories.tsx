import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Iconify, { IconifyProps } from ".";

export default {
  title: "Components/Iconify",
  component: Iconify
} as Meta;

const Template: Story<IconifyProps> = () => <Iconify icon="eva:info-outline" />;
export const Default = Template.bind({});
