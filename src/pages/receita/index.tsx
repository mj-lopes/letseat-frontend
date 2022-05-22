import React, { useContext, useEffect, useRef, useState } from "react";
import { Box, Card, Divider, Image, List, Modal, Text } from "@mantine/core";
import { Link, useParams } from "react-router-dom";
import { pegarReceitaPorID } from "../../api";
import estrela from "../../assets/estrela.svg";
import lista from "../../assets/lista.svg";
import panela from "../../assets/panela.svg";
import prato from "../../assets/prato.svg";
import tempo from "../../assets/tempo.svg";
import { Loading, Subtitulo, Titulo } from "../../components";
import { GlobalContext } from "../../contextApi";
import { IReceita } from "../../types/receita";
import { useReceitaStyle } from "./style";
import { useMediaQuery } from "@mantine/hooks";

export const Receita = () => {
  const { id } = useParams();
  const [data, setData] = useState<IReceita>({} as IReceita);
  const [modalEstaAberto, setModalEstaAberto] = useState<boolean>(false);

  const global = useContext(GlobalContext);

  const screenMobile = useMediaQuery("(max-width: 900px)");
  const { classes } = useReceitaStyle({ mobile: screenMobile });

  useEffect(() => {
    if (id) {
      const { url, options } = pegarReceitaPorID(id);

      (async () => {
        const resposta = await global.fetchDados(url, options);
        if ("_id" in resposta) {
          setData(resposta);
        }
      })();
    }
  }, []);

  function handleClickImg() {
    setModalEstaAberto(true);
  }

  function handleClickModal() {
    setModalEstaAberto(false);
  }

  return (
    <>
      <Modal
        opened={modalEstaAberto}
        onClose={handleClickModal}
        centered
        hideCloseButton
        padding={0}
        size="90%"
        zIndex={100000}
      >
        <Image src={data?.imgUrl} radius="sm" fit="contain" />
      </Modal>

      <Loading carregando={global.loading} />

      <Box className={classes.containerGeral}>
        <Image
          withPlaceholder
          src={data?.imgUrl}
          height={screenMobile ? "30vh" : "100vh"}
          width={screenMobile ? "90vw" : "30vw"}
          radius="sm"
          onClick={handleClickImg}
          className={classes.img}
        />

        <Card className={classes.containerReceita}>
          <div className={classes.conteudoReceita}>
            <Titulo decoracaoLatel align="center" cor="vermelho">
              {data?.titulo}
            </Titulo>

            <div className={classes.cardHeader}>
              <div>
                <Subtitulo>
                  <Text
                    component={Link}
                    to={`../pesquisa/categorias/${data.categoria
                      ?.split(" ")
                      .join("+")}`}
                    size="xl"
                  >
                    {data.categoria}
                  </Text>
                </Subtitulo>
              </div>
              <div className={classes.caracteristicas}>
                <div>
                  <img
                    src={estrela}
                    alt={`Classificação: ${data.classificacao} de 5 estrelas`}
                    style={{ width: "20px" }}
                  />
                  <Text>{data.classificacao}</Text>
                </div>

                <div>
                  <img
                    src={prato}
                    alt={`Rendimento: ${data.rendimento} porções`}
                  />
                  <Text>{data.rendimento?.toLocaleLowerCase()}</Text>
                </div>

                <div>
                  <img
                    src={tempo}
                    alt={`Classificação: ${data.preparo} de 5 estrelas`}
                  />
                  <Text>{data.preparo} Minutos</Text>
                </div>
              </div>
            </div>

            <Divider
              orientation="horizontal"
              sx={{ margin: ".5rem 0 2rem 0" }}
            />

            <Box sx={{ margin: ".5rem 0" }}>
              <Box sx={{ display: "flex", gap: ".725rem" }}>
                <img src={lista} alt="" />
                <Subtitulo>Ingredientes</Subtitulo>
              </Box>

              <List withPadding>
                {data.ingredientes?.map((ingrediente) => (
                  <List.Item
                    key={`Ingrediente - ${ingrediente}`}
                    style={{ color: "#3B2803", padding: "4px" }}
                  >
                    {ingrediente}
                  </List.Item>
                ))}
              </List>
            </Box>

            <Box sx={{ margin: ".5rem 0" }}>
              <Box sx={{ display: "flex", gap: ".725rem" }}>
                <img src={panela} alt="" />
                <Subtitulo>Instruções</Subtitulo>
              </Box>

              <List withPadding type="order">
                {data.instrucoes?.map((etapa) => (
                  <List.Item
                    key={`Etapa - ${etapa}`}
                    style={{ color: "#3B2803", padding: "4px" }}
                  >
                    {etapa}
                  </List.Item>
                ))}
              </List>
            </Box>
          </div>
        </Card>
      </Box>
    </>
  );
};
