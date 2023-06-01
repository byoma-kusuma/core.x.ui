import { Tooltip, TooltipProps } from "@mui/material";
import * as React from "react";
import Iconify from "../Iconify";

export interface InfoProviderProps
  extends Omit<TooltipProps, "title" | "children"> {
  info: string;
}

export default function InfoProvider(props: InfoProviderProps) {
  const { info, ...rest } = props;
  return (
    <Tooltip
      title={info}
      {...rest}
      style={{ cursor: "pointer" }}
      data-testid="info-icon-tooltip"
    >
      <div>
        <Iconify
          icon="eva:info-outline"
          sx={{ height: 24, width: 24 }}
          color="GrayText"
        />
      </div>
    </Tooltip>
  );
}
