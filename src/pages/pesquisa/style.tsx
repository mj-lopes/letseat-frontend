import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme, params) => {
  return {
    aside: {
      padding: "5rem 1rem 0 1rem",
      width: "320px",
      height: "100vh",
      backgroundColor: "white",
    },
    estrelas: {
      margin: "3rem auto 1rem auto",
      textAlign: "center",
    },
  };
});
