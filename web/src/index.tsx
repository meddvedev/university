import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ruRU } from "@mui/material/locale";

import { App } from "./App";

import { createTheme, palettes, ru, ThemeProvider } from "@elonkit/react";
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const theme = createTheme(
  {
    palette: {
      ...palettes.common,
      ...palettes.light
    }
  },
  {
    ...ruRU,
    ru
  }
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
