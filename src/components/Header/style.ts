import { createStyles } from "@mantine/core";

const CORBG = "rgba(0, 43, 66, 0.8)";

const useStyles = createStyles((theme, params, getRef) => {
  return {
    background: {
      zIndex: 1000,
      height: "80px",
      backgroundColor: CORBG,
      position: "fixed",
      width: "100%",
    },
    semiCirculo: {
      position: "relative",
      bottom: "-80px",
      margin: "auto",

      height: "60px",
      maxWidth: "130px",

      background: CORBG,
      borderRadius: "0px 0px 60px 60px",
    },

    logo: {
      textAlign: "center",
      position: "relative",
      top: "-70px",
    },
  };
});

export { useStyles };
