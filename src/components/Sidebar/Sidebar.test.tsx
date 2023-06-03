import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Sidebar, { SidebarProps } from ".";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

const mockCloseSidebar = jest.fn();

const mockProps: SidebarProps = {
  isOpenSidebar: true,
  onCloseSidebar: mockCloseSidebar,
  navigationSchema: [
    {
      title: "Dashboard",
      path: "/",
      icon: ""
    },
    {
      title: "Products",
      path: "/products",
      icon: ""
    }
  ],
  currentUser: {
    fullName: "John Doe",
    role: "Admin",
    link: "#",
    avatar: "https://via.placeholder.com/150"
  },
  menuLogoUrl: "https://via.placeholder.com/40"
};

test("renders Sidebar correctly", () => {
  const { getByText } = render(
    <BrowserRouter>
      <Sidebar {...mockProps} />
    </BrowserRouter>
  );

  expect(getByText("Dashboard")).toBeInTheDocument();
  expect(getByText("Products")).toBeInTheDocument();
  expect(getByText("John Doe")).toBeInTheDocument();
  expect(getByText("Admin")).toBeInTheDocument();
});

test("closes Sidebar when clicked outside", () => {
  render(
    <BrowserRouter>
      <Sidebar {...mockProps} />
    </BrowserRouter>
  );

  fireEvent.click(document);

  expect(mockCloseSidebar).toHaveBeenCalled();
});
