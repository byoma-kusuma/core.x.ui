import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NavSection from ".";

// Mock navigation config
const mockNavConfig = [
  {
    title: "Home",
    path: "/",
    icon: "" as const,
    children: []
  },
  {
    title: "About",
    path: "/about",
    icon: "" as const,
    children: [
      { title: "Team", path: "/about/team", icon: "" as const },
      { title: "Work", path: "/about/work", icon: "" as const }
    ]
  }
];

describe("NavSection", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <NavSection navConfig={mockNavConfig} />
      </BrowserRouter>
    );
  });

  it("renders correct navigation items", () => {
    render(
      <BrowserRouter>
        <NavSection navConfig={mockNavConfig} />
      </BrowserRouter>
    );

    expect(screen.getByTestId("sidebar=Home")).toBeInTheDocument();
    expect(screen.getByTestId("sidebar=About")).toBeInTheDocument();
  });

  it("renders correct children for navigation items", () => {
    render(
      <BrowserRouter>
        <NavSection navConfig={mockNavConfig} />
      </BrowserRouter>
    );

    // Initially, children should not be visible
    expect(screen.queryByTestId("sidebar-children-Team")).toBeNull();
    expect(screen.queryByTestId("sidebar-children-Work")).toBeNull();

    // Click to open the children
    fireEvent.click(screen.getByTestId("sidebar=About"));

    // Now, children should be visible
    expect(screen.getByTestId("sidebar-children-Team")).toBeInTheDocument();
    expect(screen.getByTestId("sidebar-children-Work")).toBeInTheDocument();
  });
});
