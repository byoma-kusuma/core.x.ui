import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Scrollbar, { ScrollbarProps } from "."; // Adjust the path as needed

export default {
  title: "Components/Scrollbar",
  component: Scrollbar
} as Meta;

const Template: Story<ScrollbarProps> = (args) => <Scrollbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  sx: { width: 500, height: 500, overflowY: "auto" },
  children: (
    <div>
      <p>Scrollable content...</p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint modi
      cupiditate eum veritatis saepe. Alias omnis dolor voluptate officia ex
      perspiciatis, facilis optio inventore iusto dicta eius, sint odio
      consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Sint modi cupiditate eum veritatis saepe. Alias omnis dolor voluptate
      officia ex perspiciatis, facilis optio inventore iusto dicta eius, sint
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint modi Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Sint modi cupiditate
      eum veritatis saepe. Alias omnis dolor voluptate officia ex perspiciatis,
      facilis optio inventore iusto dicta eius, sint odio consequuntur. Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Sint modi cupiditate
      eum veritatis saepe. Alias omnis dolor voluptate officia ex perspiciatis,
      facilis optio inventore iusto dicta eius, sint odi
    </div>
  )
};
