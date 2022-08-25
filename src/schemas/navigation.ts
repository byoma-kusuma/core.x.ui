import { getIcon } from "../components/Iconify";
import { NavigationItem } from "../types/Navgiation";

const navConfig = [
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
  { title: "New Section", path: "", icon: "", type: "grouper" },
  {
    title: "New Page",
    path: "/app/newpage",
    icon: getIcon("eva:people-fill")
  }
] as Array<NavigationItem>;

export default navConfig;
