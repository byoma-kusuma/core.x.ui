import { Box, Breadcrumbs, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useNavigate } from "react-router-dom";

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 5, 1, 5),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1)
  }
}));

const HeaderRoot = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingBottom: theme.spacing(2)
}));

interface Crumb {
  route: string;
  label: string;
  key: string;
}

interface PageWidthHeaderProps {
  children: React.ReactNode;
  header?: string;
  crumbs?: Array<Crumb>;
  actionButton?: JSX.Element;
}

export default function PageWidthHeader(props: PageWidthHeaderProps) {
  const { children, header, crumbs, actionButton = <div /> } = props;
  const navigate = useNavigate();
  return (
    <RootStyle>
      {(header || crumbs) && (
        <HeaderRoot>
          <Box>
            {header && (
              <Typography
                variant="h4"
                sx={(theme) => ({ paddingBottom: theme.spacing(1) })}
              >
                {header}
              </Typography>
            )}
            {crumbs && (
              <Box sx={(theme) => ({ paddingBottom: theme.spacing(1) })}>
                {/* &bull; is used for vertically middle aligned dot */}
                <Breadcrumbs aria-label="breadcrumb" separator={<>&bull;</>}>
                  {crumbs.map(({ label, route, key }, i) => (
                    <Link
                      onClick={() => {
                        if (i === crumbs.length - 1) return;
                        navigate(route);
                      }}
                      key={key}
                      underline={i === crumbs.length - 1 ? "none" : "hover"}
                      sx={(theme) => ({
                        cursor: i === crumbs.length - 1 ? "default" : "pointer",
                        fontWeight: theme.typography.fontWeightRegular,
                        color:
                          i === crumbs.length - 1
                            ? theme.palette.text.disabled
                            : theme.palette.text.primary,
                        fontSize: theme.typography.body2,
                        padding: theme.spacing(0, 1, 0, i === 0 ? 0 : 1)
                      })}
                    >
                      {label}
                    </Link>
                  ))}
                </Breadcrumbs>
              </Box>
            )}
          </Box>
          <div>{actionButton}</div>
        </HeaderRoot>
      )}
      {children}
    </RootStyle>
  );
}
