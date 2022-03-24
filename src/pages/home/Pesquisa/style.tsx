import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme, params) => {
  return {
    containerPesquisa: {
      display: "block",
      minHeight: "175px",
      maxWidth: "850px",

      margin: "auto",
      padding: "1rem",

      backgroundColor: "white",
      borderRadius: "6px",
      boxShadow: `1px 3px 5px #999`,

      "@media screen and (max-width: 700px)": {
        display: "flex",
        flexDirection: "column",
      },
    },
    barraDePesquisa: {
      display: "flex",
      gap: "1rem",

      "@media screen and (max-width: 700px)": {
        flexDirection: "column",
      },
    },
    containerBadgers: {
      display: "flex",
      gap: ".5rem",
      flexWrap: "wrap",
    },
  };
});
