import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import PhotoUploader, { PhotoUploaderProps } from "."; // Adjust the path as needed

export default {
  title: "Components/PhotoUploader",
  component: PhotoUploader
} as Meta;

const Template: Story<PhotoUploaderProps> = (args) => (
  <PhotoUploader {...args} />
);

export const Default = Template.bind({});
Default.args = {
  height: 300,
  children: <div>Additional content goes here...</div>
};
