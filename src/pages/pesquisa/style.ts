import { createStyles } from "@mantine/core";

export const usePgPesquisaStyle = createStyles(
  (theme, { mobile }: { mobile: boolean }) => {
    return {
      pesquisaContainer: {
        minHeight: "100vh",
        display: "flex",
        gap: "1rem",
      },
      resultadoPesquisaContainer: {
        flex: "1",
        margin: "7rem 1rem 0 1rem",
      },
      textoQTTotalReceitas: {
        marginBottom: "32px",
        position: "relative",
        left: mobile ? "" : "300px",

        fontWeight: "bold",
      },
      cardReceitasContainer: {
        display: "flex",
        flexWrap: "wrap",
        gap: "3rem",
        justifyContent: "space-between",
        marginBottom: "4rem",
      },

      tituloSemResultadoDeBusca: {
        marginTop: "6rem",
        textAlign: "center",
      },

      imgBuscaSemResultado: {
        display: "flex",
        justifyContent: "center",
        marginTop: "3rem",
      },
    };
  },
);
