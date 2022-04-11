import { Title, TitleProps } from "@mantine/core";
import { memo } from "react";
import { useStyles } from "./style";

interface ITitulo extends TitleProps {
  texto: string;
  decoracaoLatel?: boolean;
  sombra?: boolean;
  cor?: "azul" | "vermelho" | "branco";
}

export const componenteSubtitulo = ({
  texto,
  decoracaoLatel = false,
  sombra = false,
  cor = "azul",
  ...props
}: ITitulo) => {
  const { classes } = useStyles({ decoracaoLatel, sombra, cor });

  return (
    <Title className={classes.titulo} {...props}>
      {texto}
    </Title>
  );
};

export const Subtitulo = memo(componenteSubtitulo);
