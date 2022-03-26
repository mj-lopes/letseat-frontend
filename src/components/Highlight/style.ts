import { createStyles } from "@mantine/core";

interface IHighlight {
  corBG: "escuro" | "claro";
}

const useStyles = createStyles((theme, { corBG }: IHighlight, getRef) => {
  return {
    highlight: {
      fontWeight: "bold",
      color:
        corBG === "claro" ? theme.colors.vermelho[3] : theme.colors.dark[8],
    },
  };
});

export { useStyles };
