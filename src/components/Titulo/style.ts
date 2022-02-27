import { createStyles } from "@mantine/core";

interface ITitulo {
  decoracaoLatel: boolean;
}

const useStyles = createStyles((theme, { decoracaoLatel }: ITitulo) => {
  return {
    titulo: {
      display: decoracaoLatel ? "flex" : "block",
      justifyContent: decoracaoLatel ? "space-between" : "center",
      alignItems: "center",
      gap: "1rem",
      color: "#003049",
      fontSize: "clamp(1rem, 1rem + 6vw, 4.5rem)",

      "::before, ::after": {
        display: decoracaoLatel ? "inline-block" : "none",
        content: "''",
        maxWidth: "20%",
        width: "100%",
        height: "3px",
        background: "black",
        borderRadius: "3px",
        backgroundColor: "#003049",
      },
    },
  };
});

export { useStyles };
