import { createStyles } from "@mantine/core";

interface ITitulo {
  decoracaoLatel: boolean;
  sombra: boolean;
}

const useStyles = createStyles((theme, { decoracaoLatel, sombra }: ITitulo) => {
  return {
    titulo: {
      display: decoracaoLatel ? "flex" : "block",
      justifyContent: decoracaoLatel ? "space-between" : "center",
      alignItems: "center",
      gap: "1rem",
      color: sombra ? "#D92211" : "#003049",
      fontSize: "clamp(1rem, 1rem + 6vw, 4.5rem)",
      textShadow: sombra ? "clamp(1px, 1px + .1vw, 3px) 1px #003049" : "",

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
