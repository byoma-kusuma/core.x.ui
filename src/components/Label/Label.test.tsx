import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Label from ".";

describe("Label", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Label type="rounded" color="primary" label="Test Label" />
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders with the correct label", () => {
    render(<Label type="rounded" color="primary" label="Test Label" />);
    expect(screen.getByText("Test Label")).toBeInTheDocument();
  });
});
