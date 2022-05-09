import { Title, TitleProps } from "@mantine/core";
import { memo } from "react";
import { useStyles } from "./style";

interface ITitulo extends TitleProps {
  children: string;
  decoracaoLatel?: boolean;
  sombra?: boolean;
  cor?: "azul" | "vermelho" | "branco";
}

export const componenteSubtitulo = ({
  children,
  decoracaoLatel = false,
  sombra = false,
  cor = "azul",
  ...props
}: ITitulo) => {
  const { classes } = useStyles({ decoracaoLatel, sombra, cor });

  return (
    <Title className={classes.titulo} {...props}>
      {children}
    </Title>
  );
};

export const Subtitulo = memo(componenteSubtitulo);
