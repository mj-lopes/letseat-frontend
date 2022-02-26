import { Global, MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./theme/GlobalTheme";
import MantineTheme from "./theme/MantineTheme";

ReactDOM.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS theme={MantineTheme}>
      <GlobalStyle />
      <App />
    </MantineProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
