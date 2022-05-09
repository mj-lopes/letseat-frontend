import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext, IBuscaReceitas } from "../../contextApi";

import { Text } from "@mantine/core";
import {
  HL,
  Titulo,
  CardReceita,
  Paginacao,
  PesquisaLateral,
} from "../../components";
import { usePgPesquisaStyle } from "./style";

import { pegarReceitaPorIngredientes, pegarReceitaPorNome } from "../../api";
import { IReceita } from "../../types/receita";

export const Pesquisa = () => {
  const { receita } = useParams();
  const global = useContext(GlobalContext);
  const { classes } = usePgPesquisaStyle();
  const [data, setData] = useState<IBuscaReceitas>({} as IBuscaReceitas);
  let novaPesquisa = false;

  // Nova page
  useEffect(() => {
    if (novaPesquisa) return;

    if (receita) {
      const nomeReceita = receita.split(" ").join("+");

      const { url, options } = pegarReceitaPorNome(
        global.paramFiltro.page,
        global.paramFiltro.limite,
        global.paramFiltro.estrela,
        global.paramFiltro.tempoPreparo,
        nomeReceita,
      );

      (async function () {
        const resposta = await global.fetchDados(url, options);
        if ("total" in resposta) {
          setData(resposta);
        }
      })();
    } else {
      const { url, options } = pegarReceitaPorIngredientes(
        global.paramFiltro.page,
        global.paramFiltro.limite,
        global.paramFiltro.estrela,
        global.paramFiltro.tempoPreparo,
        global.listaIngredientes,
      );

      (async function () {
        const resposta = await global.fetchDados(url, options);
        if ("total" in resposta) {
          setData(resposta);
        }
      })();
    }
  }, [global.paramFiltro.page]);

  // Novos filtros, receita ou ingredientes
  useEffect(() => {
    novaPesquisa = true;
    global.paramFiltro.page = 1;
    if (receita) {
      const nomeReceita = receita.split(" ").join("+");

      const { url, options } = pegarReceitaPorNome(
        global.paramFiltro.page,
        global.paramFiltro.limite,
        global.paramFiltro.estrela,
        global.paramFiltro.tempoPreparo,
        nomeReceita,
      );

      (async function () {
        const resposta = await global.fetchDados(url, options);
        if ("total" in resposta) {
          setData(resposta);
        }
      })();
    } else {
      const { url, options } = pegarReceitaPorIngredientes(
        global.paramFiltro.page,
        global.paramFiltro.limite,
        global.paramFiltro.estrela,
        global.paramFiltro.tempoPreparo,
        global.listaIngredientes,
      );

      (async function () {
        const resposta = await global.fetchDados(url, options);
        if ("total" in resposta) {
          setData(resposta);
        }
      })();
    }
    novaPesquisa = false;
  }, [
    receita,
    global.listaIngredientes,
    global.paramFiltro.limite,
    global.paramFiltro.estrela,
    global.paramFiltro.tempoPreparo,
  ]);

  return (
    <div className={classes.pesquisaContainer}>
      <PesquisaLateral />

      <div className={classes.resultadoPesquisaContainer}>
        <Titulo fontCaveat={false}>
          Pesquisando: "<HL>{receita || "Por ingredientes"}</HL>"
        </Titulo>

        <Text className={classes.textoQTTotalReceitas} color="azul">
          <HL>{data.total}</HL> RECEITAS ENCONTRADAS
        </Text>

        <div className={classes.cardReceitasContainer}>
          {data.respostaQuery?.map((res: IReceita) => (
            <CardReceita receita={res} key={`receita - ${res.titulo}`} />
          ))}
        </div>

        <Paginacao
          total={Math.ceil(data.total / global.paramFiltro.limite) || 1}
        />
      </div>
    </div>
  );
};
