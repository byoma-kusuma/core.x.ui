import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Searchbar from ".";
import "@testing-library/jest-dom";
import ThemeProvider from "../../theme";

const mockOnSearch = jest.fn();

test("renders Searchbar correctly", () => {
  const { getByRole } = render(
    <ThemeProvider>
      <Searchbar onSearch={mockOnSearch} />
    </ThemeProvider>
  );

  expect(getByRole("button")).toBeInTheDocument();
});

test("calls onSearch when Search button is clicked", () => {
  const { getByRole, getByPlaceholderText } = render(
    <ThemeProvider>
      <Searchbar onSearch={mockOnSearch} />
    </ThemeProvider>
  );

  fireEvent.click(getByRole("button"));

  const input = getByPlaceholderText("Search…");
  fireEvent.change(input, { target: { value: "test query" } });
  fireEvent.click(screen.getByText("Search"));

  expect(mockOnSearch).toHaveBeenCalledWith("test query");
});
