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
  const [page, setPage] = useState<number>(1);
  const [limite, setLimite] = useState<number>(12);

  const { classes } = usePgPesquisaStyle();

  useEffect(() => {
    if (receita) {
      const nomeReceita = receita.split(" ").join("+");

      const { url, options } = pegarReceitaPorNome(
        page,
        limite,
        global.paramFiltro.estrela,
        global.paramFiltro.tempoPreparo,
        nomeReceita,
      );

      (async function () {
        await global.fetchDados(url, options);
      })();
    } else {
      const { url, options } = pegarReceitaPorIngredientes(
        page,
        limite,
        global.paramFiltro.estrela,
        global.paramFiltro.tempoPreparo,
        global.listaIngredientes,
      );

      (async function () {
        await global.fetchDados(url, options);
      })();
    }
  }, [receita, global.listaIngredientes, global.paramFiltro, page]);

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
          page={page}
          total={Math.ceil(global.dados.total / limite) || 1}
          onChange={(pg) => setPage(pg)}
        />
      </div>
    </div>
  );
};
