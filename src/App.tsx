import * as React from "react";
import AppRoutes from "./routes/AppRoutes";
import "simplebar/dist/simplebar.min.css";
import ThemeProvider from "./theme";
import { closeSnackbar, SnackbarProvider } from "notistack";
import { createBrowserHistory } from "history";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { Button } from "@mui/material";
import { ConfirmProvider } from "material-ui-confirm";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";

// browserhistory shared accross the whole app
export const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <HistoryRouter history={history}>
          <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{
              horizontal: "right",
              vertical: "bottom"
            }}
            autoHideDuration={2000}
            action={(sId) => (
              <Button
                onClick={() => closeSnackbar(sId)}
                sx={{ color: "text.primary" }}
              >
                Dismiss
              </Button>
            )}
          >
            <ConfirmProvider>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <AppRoutes />
              </LocalizationProvider>
            </ConfirmProvider>
          </SnackbarProvider>
        </HistoryRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
