import { createStyles } from "@mantine/core";

const CORBG = "rgba(0, 43, 66, 0.8)";

const useStyles = createStyles((theme, params, getRef) => {
  return {
    background: {
      height: "80px",
      backgroundColor: CORBG,
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
