import * as React from "react";
import AppRoutes from "./routes/AppRoutes";
import "simplebar/dist/simplebar.min.css";
import ThemeProvider from "./theme";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <BrowserRouter>
          <React.Suspense fallback={<div>Loading...</div>}>
            <AppRoutes />
          </React.Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
