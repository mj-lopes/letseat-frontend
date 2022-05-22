import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, params, getRef) => {
  return {
    background: {
      zIndex: 1000,
      height: "60px",
      backgroundColor: theme.fn.rgba(theme.colors.azul[4], 0.95),
      position: "fixed",
      width: "100%",
    },
    semiCirculo: {
      position: "relative",
      bottom: "-60px",
      margin: "auto",
      height: "45px",
      maxWidth: "110px",

      background: theme.fn.rgba(theme.colors.azul[4], 0.95),

      borderRadius: "0px 0px 45px 45px",
    },

    logo: {
      textAlign: "center",
      position: "relative",
      top: "-65px",
    },
  };
});

export { useStyles };
