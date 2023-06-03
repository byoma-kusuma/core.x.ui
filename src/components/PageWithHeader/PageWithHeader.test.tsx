import * as React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PageWithHeader from ".";

describe("PageWithHeader", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <PageWithHeader>Hi</PageWithHeader>
      </BrowserRouter>
    );
  });

  it("renders a header if passed", () => {
    const { getByText } = render(
      <BrowserRouter>
        <PageWithHeader header="Test Header">Hi</PageWithHeader>
      </BrowserRouter>
    );
    expect(getByText("Test Header")).toBeInTheDocument();
  });

  it("renders children", () => {
    const { getByText } = render(
      <BrowserRouter>
        <PageWithHeader>
          <div>Test Child</div>
        </PageWithHeader>
      </BrowserRouter>
    );
    expect(getByText("Test Child")).toBeInTheDocument();
  });

  it("handles breadcrumbs correctly", () => {
    const crumbs = [
      { route: "/", label: "Home", key: "home" },
      { route: "/test", label: "Test", key: "test" }
    ];
    const { getByText } = render(
      <BrowserRouter>
        <PageWithHeader crumbs={crumbs}>Hi</PageWithHeader>
      </BrowserRouter>
    );

    crumbs.forEach((crumb) => {
      expect(getByText(crumb.label)).toBeInTheDocument();
    });
  });
});
