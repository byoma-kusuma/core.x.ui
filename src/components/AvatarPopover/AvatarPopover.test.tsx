import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AccountPopover from "./index";
import * as React from "react";

describe("AccountPopover", () => {
  it("should render without crashing", () => {
    const schema = [
      {
        label: "Menu item",
        linkTo: "/link",
        type: "menu" as const
      }
    ];

    const { getByAltText } = render(
      <Router>
        <AccountPopover photoUrl="testUrl" schema={schema} />
      </Router>
    );

    expect(getByAltText("photoURL")).toBeInTheDocument();
  });

  it("should handle the popover menu", () => {
    const schema = [
      {
        label: "Menu item",
        linkTo: "/link",
        type: "menu" as const
      }
    ];

    const { getByTestId, queryByText } = render(
      <Router>
        <AccountPopover photoUrl="testUrl" schema={schema} />
      </Router>
    );

    const profileButton = getByTestId("navigation-profilePicture-menu");
    fireEvent.click(profileButton);

    expect(queryByText("Menu item")).toBeInTheDocument();
  });

  it("should render a divider item", () => {
    const schema = [
      {
        type: "divider" as const
      }
    ];

    const { getByTestId } = render(
      <Router>
        <AccountPopover photoUrl="testUrl" schema={schema} />
      </Router>
    );

    const profileButton = getByTestId("navigation-profilePicture-menu");
    fireEvent.click(profileButton);

    expect(screen.getByRole("separator")).toBeInTheDocument();
  });

  it("should render a custom item", () => {
    const CustomComponent = (
      <div data-testid="custom-component">Custom Component</div>
    );

    const schema = [
      {
        element: CustomComponent,
        type: "custom" as const
      }
    ];

    const { getByTestId } = render(
      <Router>
        <AccountPopover photoUrl="testUrl" schema={schema} />
      </Router>
    );

    const profileButton = getByTestId("navigation-profilePicture-menu");
    fireEvent.click(profileButton);

    expect(screen.getByTestId("custom-component")).toBeInTheDocument();
  });
});
