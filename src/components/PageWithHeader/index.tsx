import { Box, Breadcrumbs, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import symbols from "../../utils/symbols/commonSymbols";
import Spinner from "../Spinner";

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2, 1, 2),
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

export interface PageWithHeaderProps {
  children: React.ReactNode;
  header?: string;
  crumbs?: Array<Crumb>;
  actionButton?: JSX.Element;
  loading?: boolean;
}

export default function PageWithHeader(props: PageWithHeaderProps) {
  const {
    children,
    header,
    crumbs,
    actionButton = <div />,
    loading = false
  } = props;
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
                <Breadcrumbs
                  aria-label="breadcrumb"
                  separator={symbols.verticallyCenteredDot}
                >
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
      {loading ? <Spinner /> : children}
    </RootStyle>
  );
}
