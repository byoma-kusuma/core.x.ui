import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DropdownMenuSelect from ".";

const items = [
  {
    label: "Item 1",
    icon: "https://placeimg.com/100/100/animals",
    onClick: jest.fn()
  },
  {
    label: "Item 2",
    icon: "https://placeimg.com/100/100/arch",
    onClick: jest.fn()
  },
  {
    label: "Item 3",
    icon: "https://placeimg.com/100/100/nature",
    onClick: jest.fn()
  }
];

describe("DropdownMenuSelect", () => {
  it("renders without crashing", () => {
    const { container } = render(<DropdownMenuSelect items={items} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("opens dropdown on click", () => {
    render(<DropdownMenuSelect items={items} />);
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.getByText("Item 3")).toBeInTheDocument();
  });

  it("calls onClick handler when item is clicked", () => {
    render(<DropdownMenuSelect items={items} />);
    fireEvent.click(screen.getByRole("button"));
    fireEvent.click(screen.getByText("Item 2"));
    expect(items[1].onClick).toHaveBeenCalled();
  });
});
