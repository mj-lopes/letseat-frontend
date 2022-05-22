import { createStyles } from "@mantine/core";

export const useReceitaStyle = createStyles((tema) => ({
  containerGeral: {
    display: "flex",
    gap: "1rem",
    paddingTop: "4rem",
  },

  containerReceita: {
    flex: "1",
    margin: "2rem",
    padding: "1rem 2rem 1rem 2rem",

    background: "#f6f3e9", // f5f0e1 - fffbee - f6f2e5
    transform: "rotate(-1deg)",
    boxShadow: tema.shadows.sm,
    border: `1px solid ${tema.colors.red[1]}`,
  },

  conteudoReceita: {
    flex: "1",
    transform: "rotate(1deg)",
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  caracteristicas: {
    display: "flex",
    gap: "3rem",
    justifyContent: "flex-end",
    marginBottom: "1rem",

    textTransform: "capitalize",
    textAlign: "center",

    color: tema.colors.azul[9],
  },

  img: {
    alignSelf: "center",
    borderRadius: tema.radius.md,
    cursor: "pointer",
  },
}));
