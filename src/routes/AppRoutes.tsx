import { useRoutes } from "react-router-dom";
import routes from ".";
import { useMeQuery } from "../generated/graphql";

export default function Routes() {
  const elements = useRoutes(routes);
  return elements;
}
