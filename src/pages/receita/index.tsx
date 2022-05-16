import React, { useContext, useEffect, useState } from "react";

import {
  Box,
  Card,
  Divider,
  Group,
  Image,
  List,
  ListItem,
  Text,
} from "@mantine/core";
import { Subtitulo, Titulo } from "../../components";

import { Link, useParams } from "react-router-dom";

import { GlobalContext } from "../../contextApi";
import { pegarReceitaPorID } from "../../api";

import { IReceita } from "../../types/receita";

import lista from "../../assets/lista.svg";
import panela from "../../assets/panela.svg";
import estrela from "../../assets/estrela.svg";
import prato from "../../assets/prato.svg";
import tempo from "../../assets/tempo.svg";

import { useReceitaStyle } from "./style";

export const Receita = () => {
  const { id } = useParams();
  const [data, setData] = useState<IReceita>({} as IReceita);
  const global = useContext(GlobalContext);
  const { classes } = useReceitaStyle();

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

  return (
    <Box className={classes.containerGeral}>
      <Image
        withPlaceholder
        src={data?.imgUrl}
        height="100vh"
        width="30vw"
        sx={{ alignSelf: "center" }}
        radius="sm"
      />

      <Card className={classes.containerReceita}>
        <div className={classes.conteudoReceita}>
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

          <Divider orientation="horizontal" sx={{ margin: ".5rem 0 2rem 0" }} />

          <Titulo decoracaoLatel align="center" cor="vermelho">
            {data?.titulo}
          </Titulo>

          <Box sx={{ margin: "1rem 0" }}>
            <Box sx={{ display: "flex", gap: ".725rem" }}>
              <img src={lista} alt="" />
              <Subtitulo>Ingredientes</Subtitulo>
            </Box>

            <List withPadding>
              {data.ingredientes?.map((ingrediente) => (
                <List.Item
                  key={`Ingrediente - ${ingrediente}`}
                  style={{ color: "#3B2803" }}
                >
                  {ingrediente}
                </List.Item>
              ))}
            </List>
          </Box>

          <Box sx={{ margin: "1rem 0" }}>
            <Box sx={{ display: "flex", gap: ".725rem" }}>
              <img src={panela} alt="" />
              <Subtitulo>Instruções</Subtitulo>
            </Box>

            <List withPadding type="order">
              {data.instrucoes?.map((etapa) => (
                <List.Item
                  key={`Etapa - ${etapa}`}
                  style={{ color: "#3B2803" }}
                >
                  {etapa}
                </List.Item>
              ))}
            </List>
          </Box>
        </div>
      </Card>
    </Box>
  );
};
