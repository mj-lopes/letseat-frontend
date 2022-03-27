import { createStyles } from "@mantine/core";

interface Ibotao {
  cor: "azul" | "vermelho";
}

export const useStyles = createStyles((theme, { cor }: Ibotao) => {
  return {
    botao: {
      backgroundColor:
        cor === "azul" ? theme.colors.azul[1] : theme.colors.vermelho[3],

      transition: ".3s",

      ":hover": {
        marginTop: "-2px",
        backgroundColor:
          cor === "azul" ? theme.colors.azul[4] : theme.colors.vermelho[6],
      },
    },
  };
});
