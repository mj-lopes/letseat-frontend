import { createStyles } from "@mantine/core";
import estrela from "../../assets/estrela.svg";

export const useStyle = createStyles((theme, params, ref) => {
  return {
    card: {
      flex: "1 1 300px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",

      borderRadius: theme.radius.sm,
      boxShadow: theme.shadows.sm,
      transition: ".3s",

      ":hover": {
        cursor: "pointer",
        boxShadow: theme.shadows.md,
      },

      "& .mantine-Image-image": {
        transition: ".3s",
      },
      "&:hover .mantine-Image-image": {
        transform: "scale(1.2)",
      },
    },

    imagemCard: {
      height: "175px",
      overflow: "hidden",
    },

    estrela: {
      position: "absolute",
      top: "150px",
      right: "15px",
      width: "40px",
      aspectRatio: "1/1",

      textAlign: "center",
      lineHeight: "1",
      fontWeight: "bold",
      color: theme.colors.azul[3],

      boxShadow: theme.shadows.md,
      backgroundColor: "white",
      borderRadius: theme.radius.xl,

      ":before": {
        content: "''",
        display: "block",
        position: "relative",
        width: "12px",
        height: "12px",
        margin: "3px auto",
        backgroundImage: `url(${estrela})`,
      },
    },

    categoria: {
      textAlign: "center",
      lineHeight: "1.2",
      color: theme.colors.azul[0],
    },

    titulo: {
      marginTop: "1rem",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",

      fontFamily: theme.fontFamily,
      fontSize: "1rem",
      fontWeight: "bold",
      textAlign: "center",
      lineHeight: "1.2",
      color: theme.colors.azul[2],

      ":before, :after": {
        content: "''",
        display: "inline-block",
        width: "20%",
        maxWidth: "30px",
        height: "2px",

        backgroundColor: theme.colors.azul[3],
        borderRadius: "6px",
      },
    },
    detalhesContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "3rem",
      padding: "6px 0",
    },
    detalhesItem: {
      textAlign: "center",

      div: {
        color: theme.colors.azul[2],
        fontSize: ".875rem",
        textTransform: "lowercase",
      },
    },
    divisor: {
      borderColor: "#CEE5ED",
    },
  };
});
