import { Breakpoint, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function useResponsive(
  query: "up" | "down" | "between" | "only",
  key?: number | Breakpoint,
  start?: number | Breakpoint,
  end?: number | Breakpoint
) {
  const theme = useTheme();

  //   @ts-ignore
  const mediaUp = useMediaQuery(theme.breakpoints.up(key));

  //   @ts-ignore
  const mediaDown = useMediaQuery(theme.breakpoints.down(key));

  // @ts-ignore
  const mediaBetween = useMediaQuery(theme.breakpoints.between(start, end));

  const mediaOnly = useMediaQuery(
    // @ts-ignore
    theme.breakpoints.only(typeof key === "number" ? "xs" : key)
  );

  if (query === "up") {
    return mediaUp;
  }

  if (query === "down") {
    return mediaDown;
  }

  if (query === "between") {
    return mediaBetween;
  }

  if (query === "only") {
    return mediaOnly;
  }
  return null;
}
