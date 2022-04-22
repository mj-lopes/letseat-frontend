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

export const Pesquisa = () => {
  const { receita } = useParams();
  const global = useContext(GlobalContext);
  const [page, setPage] = useState<number>(1);
  const [limite, setLimite] = useState<number>(12);

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
    <div style={{ display: "flex", gap: "1rem", minHeight: "100vh" }}>
      <PesquisaLateral />

      <div style={{ marginTop: "7rem", marginRight: "1rem", flex: "1" }}>
        <Titulo fontCaveat={false}>
          Pesquisando: "<HL>{receita}</HL>"
        </Titulo>
        <Text
          sx={{
            position: "relative",
            left: "300px",
            marginBottom: "32px",
            fontWeight: "bold",
          }}
          color="azul"
        >
          <HL>{global.dados.total}</HL> RECEITAS ENCONTRADAS
        </Text>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, 300px)",
            gap: "1rem",
            justifyContent: "space-between",
            marginBottom: "10rem",
          }}
        >
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
