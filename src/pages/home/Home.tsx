import {
  Container,
  Grid,
  Space,
  Text,
  Box,
  MediaQuery,
  Image,
} from "@mantine/core";
import { Titulo, HL, Aspas } from "../../components";
import { Pesquisa } from "./Pesquisa";
import { useStyles } from "./style";

import bgPesquise from "../../assets/BGPesquisa.png";
import FormPesquise from "../../assets/FormPesquisa.png";
import Search from "../../assets/SearchNavegue.png";
import Receita from "../../assets/Receita.png";
import QuoteBG from "../../assets/QuoteBG.png";

export const Home = () => {
  const { classes } = useStyles();
  return (
    <>
      <div className={classes.imgBG}>
        <Container className={classes.tituloWrapper} size={"xl"}>
          <Titulo align="center" mb="md">
            O que Vamos Comer Hoje?
          </Titulo>
          <Pesquisa />
        </Container>
      </div>
      <Space mt={"12rem"} />

      <Container size={"xl"} className={classes.containerHomePage}>
        <Titulo order={2} align="center" decoracaoLatel>
          Como Funciona
        </Titulo>

        <Space my={"4rem"} />

        <Grid>
          <Grid.Col md={5} xs={12}>
            <Box sx={{ position: "relative" }}>
              <Image src={bgPesquise} alt="" height={"300px"} />
              <Image
                src={FormPesquise}
                sx={{
                  position: "absolute",
                  bottom: "-2.5%",
                  left: "5%",
                  right: "5%",
                  filter: "drop-shadow(1px 3px 3px #8c8c8c)",
                }}
              />
            </Box>
          </Grid.Col>

          <Grid.Col md={7} xs={12}>
            <Titulo order={3}>Pesquise</Titulo>
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
      <Space my={"2rem"} />

      <Box sx={(theme) => ({ backgroundColor: theme.colors.vermelho[4] })}>
        <Container size="xl">
          <MediaQuery
            smallerThan={"md"}
            styles={{ flexDirection: "column-reverse" }}
          >
            <Grid>
              <Grid.Col md={7} xs={12}>
                <Titulo order={3} cor="branco">
                  Navegue
                </Titulo>
                <Text color="white" size="lg" my={"md"}>
                  Escolha a sua próxima refeição através da nossa lista de{" "}
                  <HL corBG="escuro">+5 mil</HL> receitas. Massas, carnes,
                  lanches... <HL corBG="escuro">Você escolhe!</HL>
                </Text>
              </Grid.Col>
              <Grid.Col md={5} xs={12}>
                <Image src={Search} alt="" height={"300px"} />
              </Grid.Col>
            </Grid>
          </MediaQuery>
        </Container>
      </Box>

      <Space my={"2rem"} />

      <Container size="xl">
        <Grid>
          <Grid.Col md={5} xs={12}>
            <Image src={Receita} alt="" height={"300px"} />
          </Grid.Col>
          <Grid.Col md={7} xs={12}>
            <Titulo order={3}>Mãos na massa</Titulo>
            <Text color={"#3B2803"} size="lg" my={"md"}>
              Agora é com <HL>você</HL>. Hora de <HL>pôr as mãos na massa</HL> e
              preparar aquele prato para a pessoa que você ama. Pode contar que
              você mesmo que criou, não reclamaremos por credito ;) <br /> Ou
              faça para você mesmo, seja livre para experimentar <HL>❤</HL>
            </Text>
          </Grid.Col>
        </Grid>
      </Container>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `url(${QuoteBG})`,
          height: "500px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          padding: "0 1rem",
        }}
      >
        <Aspas />
        <Titulo align="center" cor="vermelho" sombra order={3}>
          There is no love sincerer than the love of food.
        </Titulo>
      </div>
    </>
  );
};
