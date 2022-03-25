import { createStyles } from "@mantine/core";

export const useStyle = createStyles((theme, params) => {
  return {
    footerContainer: {
      position: "relative",
      background: "#B71000",
      zIndex: "-10",
    },
    footerBGImg: {
      position: "absolute",
      bottom: "1rem",
      left: "1rem",
      zIndex: "-1",
    },
    contatoContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "1rem",
      padding: "1rem 0",

      textAlign: "center",

      "@media screen and (max-width: 600px)": {
        flexDirection: "column",
      },
    },
    redeSociais: {
      display: "flex",
      justifyContent: "center",
      gap: "2rem",
    },
    contatoSeparador: {
      display: "inline-block",
      width: "32px",
      height: "3px",
      background: "#820B00",
    },
    footerCopyright: {
      maxWidth: "480px",
      margin: "auto",
      padding: "2rem 0",
    },
  };
});
