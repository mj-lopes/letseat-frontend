import { Box, Radio, RadioGroup, Text } from "@mantine/core";
import React, { ChangeEvent, memo, useContext, useState } from "react";
import {
  BadgeIngrediente,
  Botao,
  InputSearch,
  Subtitulo,
} from "../../components";
import { GlobalContext } from "../../contextApi";
import { RatingEstrela } from "../RatingEstrelas";
import { SliderPreparo } from "../Slider";
import { useStyles } from "./style";

const Pesquisa = () => {
  const [input, setInput] = useState("");
  const global = useContext(GlobalContext);
  const { classes } = useStyles();

  const handleSubmitPesquisa = () => {
    if (global.tipoPesquisa === "ingredientes") {
      console.table(global.paramFiltro);
      console.log(JSON.stringify({ ingredientes: global.listaIngredientes }));
    } else {
      console.table(global.paramFiltro);
      console.log(global.tipoPesquisa);
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

      {global.tipoPesquisa === "ingredientes"
        ? global.listaIngredientes.map((ingrediente) => (
            <BadgeIngrediente
              onClick={() => global.removerIngrediente(ingrediente)}
              key={`ingrediente - ${ingrediente}`}
            >
              {ingrediente}
            </BadgeIngrediente>
          ))
        : ""}

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
        onChange={(valor) => global.alterarCampoFiltro("tempoPreparo", valor)}
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
