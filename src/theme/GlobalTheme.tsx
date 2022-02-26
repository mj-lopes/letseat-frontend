import { Global } from "@mantine/core";

const GlobalStyle = () => (
  <Global
    styles={() => ({
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
