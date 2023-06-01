import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Iconify, { getIcon } from ".";

describe("Iconify", () => {
  it("renders without crashing", () => {
    const { container } = render(<Iconify icon={getIcon("testIconName")} />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
