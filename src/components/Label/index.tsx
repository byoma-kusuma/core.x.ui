import { Chip, ChipProps } from "@mui/material";
import { omit } from "lodash";
import * as React from "react";

export interface Labelprops extends ChipProps {
  type: "rounded" | "squared" | "semi-rounded";
  vivid?: boolean;
}

function getBorderRadiusFromType(type: Labelprops["type"]) {
  if (type === "rounded") {
    return "16px";
  }
  if (type === "semi-rounded") {
    return "6px";
  }
  return "2px";
}

function interceptColor(color: ChipProps["color"], vivid: boolean) {
  return {
    bgcolor: vivid ? `${color}.light` : `${color}.lighter`,
    color: `${color}.darker`
  };
}

export default function Label(props: Labelprops) {
  const { type, vivid = false, ...chipProps } = props;
  return (
    <Chip
      {...omit(chipProps, ["color", "sx"])}
      sx={{
        borderRadius: getBorderRadiusFromType(type),
        fontWeight: 800,
        fontSize: "0.75rem",
        ...interceptColor(chipProps.color, vivid),
        ...chipProps.sx
      }}
      size="small"
    />
  );
}
