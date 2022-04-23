import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../contextApi";

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
import { Receita } from "../../types/reseita";

export const Pesquisa = () => {
  const { receita } = useParams();
  const global = useContext(GlobalContext);
  const { classes } = usePgPesquisaStyle();
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
        await global.fetchDados(url, options);
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
        await global.fetchDados(url, options);
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
        await global.fetchDados(url, options);
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
        await global.fetchDados(url, options);
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
          <HL>{global.dados.total}</HL> RECEITAS ENCONTRADAS
        </Text>

        <div className={classes.cardReceitasContainer}>
          {global.dados.respostaQuery?.map((res: Receita) => (
            <CardReceita receita={res} key={`receita - ${res.titulo}`} />
          ))}
        </div>

        <Paginacao
          total={Math.ceil(global.dados.total / global.paramFiltro.limite) || 1}
        />
      </div>
    </div>
  );
};
