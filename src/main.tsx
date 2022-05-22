import { Global, MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStorage } from "./contextApi";
import GlobalStyle from "./theme/GlobalTheme";
import MantineTheme from "./theme/MantineTheme";

ReactDOM.render(
  <GlobalStorage>
    <MantineProvider withGlobalStyles withNormalizeCSS theme={MantineTheme}>
      <GlobalStyle />
      <App />
    </MantineProvider>
  </GlobalStorage>,
  document.getElementById("root"),
);
