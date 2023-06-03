import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TabComponentRenderer, { SchemaItem } from ".";

const ComponentA = () => <div>This is Component A</div>;
const ComponentB = () => <div>This is Component B</div>;
const ComponentC = () => <div>This is Component C</div>;

const testSchema: Array<SchemaItem> = [
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

describe("TabComponentRenderer", () => {
  it("renders without crashing", () => {
    render(<TabComponentRenderer schema={testSchema} />);
  });

  it("displays the first tab by default", () => {
    const { getByText } = render(<TabComponentRenderer schema={testSchema} />);
    expect(getByText("This is Component A")).toBeInTheDocument();
  });

  it("displays the tab content associated with the defaultActiveKey prop", () => {
    const { getByText } = render(
      <TabComponentRenderer defaultActiveKey="componentB" schema={testSchema} />
    );
    expect(getByText("This is Component B")).toBeInTheDocument();
  });

  it("changes displayed tab content on tab change", () => {
    const { getByText, queryByText } = render(
      <TabComponentRenderer schema={testSchema} />
    );
    const tabB = getByText("Component B");
    fireEvent.click(tabB);

    expect(getByText("This is Component B")).toBeInTheDocument();
    expect(queryByText("This is Component A")).not.toBeInTheDocument();
  });
});
