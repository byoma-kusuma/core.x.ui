import * as React from "react";
import { render, fireEvent, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import InfoProvider from ".";

describe("InfoProvider", () => {
  it("renders without crashing", () => {
    const { container } = render(<InfoProvider info="Test information" />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("displays tooltip with correct information on hover", async () => {
    render(<InfoProvider info="Test information" />);
    const tooltip = screen.getByTestId("info-icon-tooltip");
    act(() => {
      fireEvent(
        tooltip,
        new MouseEvent("mouseover", {
          bubbles: true
        })
      );
    });
    const tip = await screen.findByRole("tooltip");
    expect(tip).toBeInTheDocument();
    expect(tip).toHaveTextContent("Test information");
  });
});
