import { Container } from "@mantine/core";
import { Titulo } from "../../components/Titulo";
import { useStyles } from "./style";

export const Home = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.imgBG}>
      <Container className={classes.tituloWrapper}>
        <Titulo texto="O que Vamos Comer Hoje?" />
      </Container>
    </div>
  );
};
