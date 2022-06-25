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
    // @ts-ignore -- need a ts wizard to resolve this
    palette?: typeof palette;
    // @ts-ignore -- need a ts wizard to resolve this
    typography?: typeof typography;
    // @ts-ignore -- need a ts wizard to resolve this
    shadows?: typeof shadows;
    customShadows?: typeof customShadows;
  }
}

export default function ThemeProvider(props: ThemeProviderProps) {
  const { children } = props;

  // @ts-ignore -- need a ts wizard to resolve this
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
