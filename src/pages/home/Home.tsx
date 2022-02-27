import { Container, Grid, Space, Text } from "@mantine/core";
import { Titulo, HL } from "../../components";
import { useStyles } from "./style";
import bgPesquise from "../../assets/BGPesquisa.png";

export const Home = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.imgBG}>
      <Container className={classes.tituloWrapper} size={"xl"}>
        <Titulo texto="O que Vamos Comer Hoje?" align="center" />
        <Space my={"32px"} />
        <div
          style={{ width: "100%", height: "260px", backgroundColor: "tomato" }}
        />
        <Space my={"8rem"} />

        <Titulo order={2} texto="Como Funciona" align="center" decoracaoLatel />
        <Space my={"4rem"} />
        <Grid>
          <Grid.Col lg={5} md={12}>
            <img src={bgPesquise} alt="" />
          </Grid.Col>
          <Grid.Col lg={7} md={12}>
            <Titulo texto="Pesquise" />
            <Text color={"#3B2803"} size="lg" my={"md"}>
              Tente procurar uma receita pelo o seu nome no campo de pesquisa no{" "}
              <HL>topo da página ou na aba lateral</HL>.
              <br />
              Não sabe o que procurar, porém já possui os ingredientes
              separados? Faça uma busca usando o nosso{" "}
              <HL>sistema de busca por ingredientes</HL>, que lhe entregará uma
              completa lista de receitas possiveis com o que você houver na
              cozinha.
            </Text>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};
