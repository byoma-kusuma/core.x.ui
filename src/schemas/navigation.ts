import { getIcon } from "../components/Iconify";

export interface NavigationItem {
  title: string;
  path: string;
  icon: JSX.Element | "";
  info?: string;
  children?: Array<NavigationItem>;
  type?: "grouper";
}

const navConfig: Array<NavigationItem> = [
  { title: "General", path: "", icon: "", type: "grouper" },
  {
    title: "dashboard",
    path: "/app/dashboard",
    icon: getIcon("eva:pie-chart-2-fill")
  },
  {
    title: "members",
    path: "/app/members",
    icon: getIcon("eva:people-fill")
  },
  {
    title: "users",
    path: "/app/users",
    icon: getIcon("eva:person-add-fill")
  },
  {
    title: "groups",
    path: "/app/groups",
    icon: getIcon("eva:keypad-fill")
  },
  {
    title: "abhisekhas",
    path: "/app/abhisekhas",
    icon: getIcon("eva:award-outline")
  },
  { title: "New Section", path: "", icon: "", type: "grouper" },
  {
    title: "New Page",
    path: "/app/newpage",
    icon: getIcon("eva:people-fill")
  }
];

export default navConfig;
