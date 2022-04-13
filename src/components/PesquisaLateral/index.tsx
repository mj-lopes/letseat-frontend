import React, { memo, useContext, useState } from "react";
import { Box, Radio, RadioGroup, Text } from "@mantine/core";
import {
  BadgeIngrediente,
  Botao,
  InputSearch,
  Subtitulo,
  RatingEstrela,
  SliderPreparo,
} from "../../components";

import { GlobalContext } from "../../contextApi";
import { useStyles } from "./style";
import { pegarReceitaPorIngredientes, pegarReceitaPorNome } from "../../api";

const Pesquisa = () => {
  const [input, setInput] = useState("");
  const global = useContext(GlobalContext);
  const { classes } = useStyles();

  const handleSubmitPesquisa = async () => {
    if (global.tipoPesquisa === "ingredientes") {
      try {
        const { url, options } = pegarReceitaPorIngredientes(
          1,
          12,
          4,
          90,
          global.listaIngredientes,
        );
        const resp = await fetch(url, options).then((resp) => resp.json());

        console.log(resp);
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const { url, options } = pegarReceitaPorNome(1, 12, 4, 90, input);
        const resp = await fetch(url, options).then((resp) => resp.json());
        console.log(resp);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <aside className={classes.aside}>
      <Subtitulo texto="Pesquise" decoracaoLatel cor="vermelho" />

      <RadioGroup
        color={"vermelho"}
        my="md"
        value={global.tipoPesquisa}
        onChange={(e: "receita" | "ingredientes") =>
          global.selecionarTipoPesquisa(e)
        }
      >
        <Radio value="receita">Nome</Radio>
        <Radio value="ingredientes">Ingredientes</Radio>
      </RadioGroup>

      <InputSearch
        label="pesquisa"
        onChange={({ currentTarget }) => setInput(currentTarget.value)}
        value={input}
        placeholder="Ovo com areia"
        my="md"
      />

      {global.tipoPesquisa === "ingredientes" &&
      global.listaIngredientes.length ? (
        <BadgeIngrediente
          ingredientes={global.listaIngredientes}
          onClick={(ingrediente: string) =>
            global.removerIngrediente(ingrediente)
          }
        />
      ) : (
        ""
      )}

      <Box className={classes.wrapperBotoes}>
        {global.tipoPesquisa === "ingredientes" ? (
          <Botao
            cor="vermelho"
            uppercase
            onClick={() => global.addIngrediente(input)}
          >
            add ingrediente
          </Botao>
        ) : (
          ""
        )}
        <Botao cor="azul" uppercase fullWidth onClick={handleSubmitPesquisa}>
          pesquisar
        </Botao>
      </Box>

      <Subtitulo texto="Filtros" decoracaoLatel cor="vermelho" my="md" />

      <Text weight="bold" color="azul">
        Tempo máximo
      </Text>

      <SliderPreparo
        valor={global.paramFiltro.tempoPreparo}
        onChange={(valor: number) =>
          global.alterarCampoFiltro("tempoPreparo", valor)
        }
      />

      <div className={classes.estrelas}>
        <Text weight="bold" color="azul" align="left">
          Classificação minima
        </Text>
        <RatingEstrela
          valor={global.paramFiltro.estrela}
          onChange={(valor: number) =>
            global.alterarCampoFiltro("estrela", valor)
          }
        />
      </div>
    </aside>
  );
};

export const PesquisaLateral = memo(Pesquisa);
