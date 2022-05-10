import { createStyles } from "@mantine/core";

const CORBG = "rgba(0, 43, 66, 0.95)";

const useStyles = createStyles((theme, params, getRef) => {
  return {
    background: {
      zIndex: 1000,
      height: "70px",
      // 80
      backgroundColor: CORBG,
      position: "fixed",
      width: "100%",
    },
    semiCirculo: {
      position: "relative",
      bottom: "-70px",
      // -80
      margin: "auto",

      height: "60px",
      // 60
      maxWidth: "130px",
      // 110
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
