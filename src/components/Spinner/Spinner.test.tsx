import React from "react";
import { render, screen } from "@testing-library/react";
import Spinner from ".";
import "@testing-library/jest-dom";

test("renders Spinner correctly", () => {
  render(<Spinner />);

  expect(screen.getByRole("progressbar")).toBeInTheDocument();
});

test("renders default loading text when isModuleLoader is true", () => {
  render(<Spinner isModuleLoader={true} />);

  expect(
    screen.getByText("This section is being generated! Please wait!")
  ).toBeInTheDocument();
});

test("renders custom loading text when isModuleLoader is true and moduleText is provided", () => {
  render(
    <Spinner isModuleLoader={true} moduleText={"Loading custom module..."} />
  );

  expect(screen.getByText("Loading custom module...")).toBeInTheDocument();
});

test("renders optional node", () => {
  render(<Spinner optionalNode={<div>Optional Node</div>} />);

  expect(screen.getByText("Optional Node")).toBeInTheDocument();
});

test("renders image when isModuleLoader is true", () => {
  const { container } = render(<Spinner isModuleLoader={true} />);

  expect(container.querySelector("img")).toBeInTheDocument();
});
