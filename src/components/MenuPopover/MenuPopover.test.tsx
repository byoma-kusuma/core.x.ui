import * as React from "react";
import { render, screen } from "@testing-library/react";
import MenuPopover from "."; // replace with the path to your MenuPopover component

describe("MenuPopover", () => {
  test("renders correctly when open", () => {
    const testText = "Test child component";
    render(<button id="test-button"></button>);
    render(
      <div>
        <MenuPopover
          anchorEl={document.getElementById("test-button")}
          open={true}
        >
          <div>{testText}</div>
        </MenuPopover>
      </div>
    );

    expect(screen.getByRole("presentation")).toBeVisible(); // check if the popover is open
    expect(screen.getByText(testText)).toBeInTheDocument(); // check if children are rendered correctly
  });
});
