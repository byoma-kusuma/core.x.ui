import { Icon } from "@iconify/react";
import { Box, BoxProps, SxProps } from "@mui/material";

interface IconifyProps extends Partial<BoxProps> {
  icon: React.ReactElement | string;
  sx?: SxProps;
}

export default function Iconify(props: IconifyProps) {
  const { icon, sx, ...other } = props;
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
}
