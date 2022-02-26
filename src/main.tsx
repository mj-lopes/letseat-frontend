import { Global, MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./theme/GlobalTheme";

ReactDOM.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <GlobalStyle />
      <App />
    </MantineProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
