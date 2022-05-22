import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => {
  return {
    aside: {
      padding: "0rem 1rem 0 1rem",
      width: "340px",
      backgroundColor: "white",
    },
    estrelas: {
      margin: "3rem auto 1rem auto",
      textAlign: "center",
    },
    wrapperBotoes: {
      display: "flex",
      gap: ".5rem",
      marginTop: "1rem",
    },
    drawer: {
      marginTop: "4rem",
    },
    btnDrawer: {
      position: "fixed",
      marginTop: "1rem",
      marginLeft: "1rem",
      zIndex: 1000000,
    },
  };
});
