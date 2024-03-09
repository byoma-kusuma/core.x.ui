import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavigationBar from ".";
jest.mock(
  "components/SearchBar",
  // eslint-disable-next-line react/display-name
  () => (props: { onSearch: (v: string) => void }) =>
    (
      <input
        type="text"
        onChange={(e) => props.onSearch(e.target.value)}
        placeholder="Search"
      />
    )
);

describe("<NavigationBar />", () => {
  const setup = () => {
    const onHamburgerClick = jest.fn();
    const onSearch = jest.fn();
    const stackItemsRenderer = jest.fn().mockReturnValue(<div>Item</div>);
    render(
      <NavigationBar
        onHamburgerClick={onHamburgerClick}
        stackItemsRenderer={stackItemsRenderer}
      />
    );

    return { onHamburgerClick, onSearch, stackItemsRenderer };
  };

  it("renders without error", () => {
    setup();
    const buttons = screen.getAllByRole("button");
    expect(buttons[0]).toBeInTheDocument(); // Assuming the first button is the hamburger icon.
  });

  it("responds to hamburger click", () => {
    const { onHamburgerClick } = setup();
    const buttons = screen.getAllByRole("button");
    fireEvent.click(buttons[0]);
    expect(onHamburgerClick).toHaveBeenCalled();
  });

  it("calls onSearch when input in searchbar changes", () => {
    const { onSearch } = setup();
    fireEvent.change(screen.getByPlaceholderText("Search"), {
      target: { value: "Testing" }
    });
    expect(onSearch).toHaveBeenCalledWith("Testing");
  });

  it("renders stack items", () => {
    setup();
    expect(screen.getByText("Item")).toBeInTheDocument();
  });
});
