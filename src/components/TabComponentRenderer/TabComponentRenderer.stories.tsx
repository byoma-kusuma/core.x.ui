import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TabComponentRenderer, { SchemaItem } from ".";

const ComponentA = () => <div>This is Component A</div>;
const ComponentB = () => <div>This is Component B</div>;
const ComponentC = () => <div>This is Component C</div>;

export default {
  title: "Components/TabComponentRenderer",
  component: TabComponentRenderer,
  argTypes: {
    defaultActiveKey: { control: "text" },
    schema: { control: false } // Disable control for schema
  }
} as ComponentMeta<typeof TabComponentRenderer>;

const Template: ComponentStory<typeof TabComponentRenderer> = (args) => (
  <TabComponentRenderer {...args} />
);

const defaultSchema: Array<SchemaItem> = [
  {
    key: "componentA",
    label: "Component A",
    component: <ComponentA />
  },
  {
    key: "componentB",
    label: "Component B",
    component: <ComponentB />
  },
  {
    key: "componentC",
    label: "Component C",
    component: <ComponentC />
  }
];

export const DefaultTabComponent = Template.bind({});
DefaultTabComponent.args = {
  defaultActiveKey: "componentA",
  schema: defaultSchema
};
