import { getIcon } from "./../utils/icon";

const navConfig = [
  {
    title: "dashboard",
    path: "/dashboard/app",
    icon: getIcon("eva:pie-chart-2-fill")
  },
  {
    title: "members",
    path: "/dashboard/members",
    icon: getIcon("eva:people-fill")
  }
];

export default navConfig;
