import { Global } from "@mantine/core";

const GlobalStyle = () => (
  <Global
    styles={() => ({
      "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },
      body: {
        background: "teal",
      },
      img: {
        maxWidth: "100%",
      },
    })}
  />
);

export default GlobalStyle;
