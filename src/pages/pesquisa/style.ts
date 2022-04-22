import { createStyles } from "@mantine/core";

export const usePgPesquisaStyle = createStyles((theme) => {
  return {
    pesquisaContainer: {
      minHeight: "100vh",
      display: "flex",
      gap: "1rem",
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
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, 300px)",
      gap: "1rem",
      justifyContent: "space-between",
      marginBottom: "10rem",
    },
  };
});
