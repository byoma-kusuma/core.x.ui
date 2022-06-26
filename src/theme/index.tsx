import * as React from "react";
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider
} from "@mui/material/styles";
import palette from "./palette";
import typography from "./typography";
import componentsOverride from "./overrides";
import shadows, { customShadows } from "./shadows";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const themeOptions = {
  palette,
  shape: { borderRadius: 8 },
  typography,
  shadows,
  customShadows
} as const;

declare module "@mui/material/styles" {
  interface Theme {
    palette: typeof palette;
    typography: typeof typography;
    shadows: typeof shadows;
    customShadows: typeof customShadows;
  }
  interface ThemeOptions {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    palette?: typeof palette;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    typography?: typeof typography;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    shadows?: typeof shadows;
    customShadows?: typeof customShadows;
  }
}

export default function ThemeProvider(props: ThemeProviderProps) {
  const { children } = props;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
