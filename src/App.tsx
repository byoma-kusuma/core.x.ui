import * as React from "react";
import AppRoutes from "./routes/AppRoutes";
import "simplebar/dist/simplebar.min.css";
import ThemeProvider from "./theme";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <BrowserRouter>
          <SnackbarProvider>
            <AppRoutes />
          </SnackbarProvider>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
