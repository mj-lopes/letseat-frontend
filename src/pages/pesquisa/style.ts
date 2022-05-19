import { createStyles } from "@mantine/core";

export const usePgPesquisaStyle = createStyles((theme) => {
  return {
    pesquisaContainer: {
      minHeight: "100vh",
      display: "flex",
      gap: "3rem",
    },
    resultadoPesquisaContainer: {
      flex: "1",

      marginTop: "7rem",
      marginRight: "1rem",
    },
    textoQTTotalReceitas: {
      marginBottom: "32px",
      position: "relative",
      left: "300px",

      fontWeight: "bold",
    },
    cardReceitasContainer: {
      display: "flex",
      flexWrap: "wrap",
      // gridTemplateColumns: "repeat(auto-fill, 400px)",
      gap: "3rem",
      justifyContent: "space-between",
      marginBottom: "10rem",
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
});
