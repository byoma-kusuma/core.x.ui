import { Chip, ChipProps } from "@mui/material";
import * as React from "react";

interface Labelprops extends ChipProps {
  type: "rounded" | "squared" | "semi-rounded";
}

function getBorderRadiusFromType(type: Labelprops["type"]) {
  if (type === "rounded") {
    return "16px";
  }
  if (type === "semi-rounded") {
    return "8px";
  }
  return "2px";
}

export default function Label(props: Labelprops) {
  const { type, ...chipProps } = props;
  return (
    <Chip {...chipProps} sx={{ borderRadius: getBorderRadiusFromType(type) }} />
  );
}
