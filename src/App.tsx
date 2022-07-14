import * as React from "react";
import AppRoutes from "./routes/AppRoutes";
import "simplebar/dist/simplebar.min.css";
import ThemeProvider from "./theme";
import { SnackbarProvider } from "notistack";
import { createBrowserHistory } from "history";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";

// browserhistory shared accross the whole app
export const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <HistoryRouter history={history}>
          <SnackbarProvider>
            <AppRoutes />
          </SnackbarProvider>
        </HistoryRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
