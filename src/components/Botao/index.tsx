import React from "react";
import { Button, SharedButtonProps } from "@mantine/core";

import { useStyles } from "./style";

interface Ibotao extends SharedButtonProps {
  children: string;
  cor: "azul" | "vermelho";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Botao = ({
  children,
  cor = "azul",
  onClick,
  ...props
}: Ibotao) => {
  const { classes } = useStyles({ cor });
  return (
    <Button className={classes.botao} {...props} onClick={onClick}>
      {children}
    </Button>
  );
};
