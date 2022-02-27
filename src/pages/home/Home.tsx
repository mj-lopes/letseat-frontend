import { Container, Grid, Space, Text, Box } from "@mantine/core";
import { Titulo, HL, Footer, Aspas } from "../../components";
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
          <Titulo texto="O que Vamos Comer Hoje?" align="center" />
          <Space my={"32px"} />
          <div
            style={{
              width: "100%",
              height: "260px",
              backgroundColor: "tomato",
            }}
          />
        </Container>
      </div>
      <Space mt={"11rem"} />

      <Container size={"xl"}>
        <Titulo order={2} texto="Como Funciona" align="center" decoracaoLatel />

        <Space my={"4rem"} />

        <Grid>
          <Grid.Col lg={5} md={12}>
            <Box sx={{ position: "relative" }}>
              <img src={bgPesquise} alt="" />
              <img
                src={FormPesquise}
                style={{
                  position: "absolute",
                  bottom: "120px",
                  right: "-160px",
                  boxShadow: "1px 3px 10px 0 #8c8c8c",
                }}
              />
            </Box>
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

        <Space my={"2rem"} />

        <Grid>
          <Grid.Col lg={7} md={12}>
            <Titulo texto="Navegue" />
            <Text color={"#3B2803"} size="lg" my={"md"}>
              Escolha a sua próxima refeição através da nossa lista de{" "}
              <HL>+5 mil</HL> receitas. Massas, carnes, lanches...{" "}
              <HL>Você escolhe!</HL>
            </Text>
          </Grid.Col>
          <Grid.Col lg={5} md={12}>
            <Box>
              <img src={Search} alt="" />
            </Box>
          </Grid.Col>
        </Grid>

        <Space my={"2rem"} />

        <Grid>
          <Grid.Col lg={5} md={12}>
            <Box>
              <img src={Receita} alt="" />
            </Box>
          </Grid.Col>
          <Grid.Col lg={7} md={12}>
            <Titulo texto="Mãos na massa" />
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
        <Titulo
          texto="There is no love sincerer than the love of food."
          align="center"
          sombra
          order={3}
        />
      </div>
    </>
  );
};
