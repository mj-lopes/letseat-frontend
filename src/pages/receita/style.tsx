import { createStyles } from "@mantine/core";

export const useReceitaStyle = createStyles(
  (tema, { mobile }: { mobile: boolean }) => ({
    containerGeral: {
      display: "flex",
      flexDirection: mobile ? "column" : "row",
      gap: "1rem",
      paddingTop: "4rem",
    },

    containerReceita: {
      flex: "1",
      margin: mobile ? "" : "2rem",
      padding: mobile ? "" : "1rem 2rem 1rem 2rem",

      background: "#f6f3e9", // f5f0e1 - fffbee - f6f2e5
      transform: mobile ? "" : "rotate(-1deg)",
      boxShadow: tema.shadows.sm,
      border: `1px solid ${tema.colors.red[1]}`,
    },

    conteudoReceita: {
      flex: "1",
      transform: mobile ? "" : "rotate(1deg)",
    },

    cardHeader: {
      display: "flex",
      flexDirection: mobile ? "column" : "row",
      gap: "1rem",
      alignItems: "center",
      justifyContent: "space-between",
    },

    caracteristicas: {
      display: "flex",
      justifyContent: "flex-end",
      marginBottom: "1rem",
      gap: "3rem",
      textTransform: "capitalize",
      textAlign: "center",

      color: tema.colors.azul[9],
    },

    img: {
      alignSelf: "center",
      borderRadius: tema.radius.md,
      cursor: "pointer",
    },
  }),
);
