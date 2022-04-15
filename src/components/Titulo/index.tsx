import { Title, TitleProps } from "@mantine/core";
import React, { memo } from "react";
import { useStyles } from "./style";

interface ITitulo extends TitleProps {
  children: React.ReactNode;
  decoracaoLatel?: boolean;
  sombra?: boolean;
  cor?: "azul" | "vermelho" | "branco";
  fontCaveat?: boolean;
}

const componenteTitulo = ({
  children,
  decoracaoLatel = false,
  sombra = false,
  cor = "azul",
  fontCaveat = true,
  ...props
}: ITitulo) => {
  const { classes } = useStyles({ decoracaoLatel, sombra, cor, fontCaveat });

  return (
    <Title className={classes.titulo} {...props}>
      {children}
    </Title>
  );
};

export const Titulo = memo(componenteTitulo);
