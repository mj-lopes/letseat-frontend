import { Title, TitleProps } from "@mantine/core";
import { useStyles } from "./style";

interface ITitulo extends TitleProps {
  texto: string;
  decoracaoLatel?: boolean;
}

export const Titulo = ({
  texto,
  decoracaoLatel = false,
  ...props
}: ITitulo) => {
  const { classes } = useStyles({ decoracaoLatel });

  return (
    <Title className={classes.titulo} {...props}>
      {texto}
    </Title>
  );
};
