import { Title, TitleProps } from "@mantine/core";
import { useStyles } from "./style";

interface ITitulo extends TitleProps {
  texto: string;
  decoracaoLatel?: boolean;
  sombra?: boolean;
}

export const Titulo = ({
  texto,
  decoracaoLatel = false,
  sombra = false,
  ...props
}: ITitulo) => {
  const { classes } = useStyles({ decoracaoLatel, sombra });

  return (
    <Title className={classes.titulo} {...props}>
      {texto}
    </Title>
  );
};
