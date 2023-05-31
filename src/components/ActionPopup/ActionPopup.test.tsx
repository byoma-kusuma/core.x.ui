import { render, fireEvent, screen } from "@testing-library/react";
import ActionPopup from "./";
import * as React from "react";

describe("ActionPopup", () => {
  const handleClose = jest.fn();
  const handleActionClick = jest.fn();

  const actionItems = [
    { name: "Action 1", onClick: handleActionClick },
    { name: "Action 2", onClick: handleActionClick }
  ];

  beforeEach(() => {
    handleClose.mockClear();
    handleActionClick.mockClear();
  });

  it("renders without crashing", () => {
    render(
      <ActionPopup
        open={false}
        handleClose={handleClose}
        actionItems={actionItems}
      />
    );
  });

  it("displays action items", () => {
    render(
      <ActionPopup
        open={true}
        handleClose={handleClose}
        actionItems={actionItems}
      />
    );

    expect(screen.getByText("Action 1")).toBeInTheDocument();
    expect(screen.getByText("Action 2")).toBeInTheDocument();
  });

  it("invokes handleClose when the cancel button is clicked", () => {
    render(
      <ActionPopup
        open={true}
        handleClose={handleClose}
        actionItems={actionItems}
      />
    );

    fireEvent.click(screen.getByText("Cancel"));

    expect(handleClose).toHaveBeenCalled();
  });

  it("invokes action item onClick and handleClose when an action card is clicked", () => {
    render(
      <ActionPopup
        open={true}
        handleClose={handleClose}
        actionItems={actionItems}
      />
    );

    fireEvent.click(screen.getByText("Action 1"));

    expect(handleActionClick).toHaveBeenCalled();
    expect(handleClose).toHaveBeenCalled();
  });
});
