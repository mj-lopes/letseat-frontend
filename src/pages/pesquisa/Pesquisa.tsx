import { Pagination, Text } from "@mantine/core";
import React, { useContext, useEffect, useState } from "react";
import { useParams, Routes, Route } from "react-router-dom";
import { pegarReceitaPorIngredientes, pegarReceitaPorNome } from "../../api";
import { HL, Titulo } from "../../components";
import { CardReceita } from "../../components/CardReceita";
import { Paginacao } from "../../components/Paginacao";
import { PesquisaLateral } from "../../components/PesquisaLateral";
import { GlobalContext } from "../../contextApi";
import { Receita } from "../../types/reseita";
import { usePgPesquisaStyle } from "./style";

export const Pesquisa = () => {
  const { receita } = useParams();
  const global = useContext(GlobalContext);

  const { classes } = usePgPesquisaStyle();

  useEffect(() => {
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
  }, [receita, global.paramFiltro]);

  return (
    <div className={classes.pesquisaContainer}>
      <PesquisaLateral />

      <div className={classes.resultadoPesquisaContainer}>
        <Titulo fontCaveat={false}>
          Pesquisando: "<HL>{receita}</HL>"
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
