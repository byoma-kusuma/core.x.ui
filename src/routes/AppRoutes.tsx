import { useRoutes } from "react-router-dom";
import routes from ".";

export default function Routes() {
  const elements = useRoutes(routes);
  return elements;
}
