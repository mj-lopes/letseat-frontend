import { Text } from "@mantine/core";
import React, { useContext, useEffect, useState } from "react";
import { useParams, Routes, Route } from "react-router-dom";
import { pegarReceitaPorIngredientes, pegarReceitaPorNome } from "../../api";
import { HL, Titulo } from "../../components";
import { CardReceita } from "../../components/CardReceita";
import { PesquisaLateral } from "../../components/PesquisaLateral";
import { GlobalContext } from "../../contextApi";
import { Receita } from "../../types/reseita";

export const Pesquisa = () => {
  const { receita } = useParams();
  const global = useContext(GlobalContext);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    if (receita) {
      const nomeReceita = receita.split(" ").join("+");

      const { url, options } = pegarReceitaPorNome(
        page,
        12,
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
        12,
        global.paramFiltro.estrela,
        global.paramFiltro.tempoPreparo,
        global.listaIngredientes,
      );

      (async function () {
        await global.fetchDados(url, options);
      })();
    }
  }, [receita, global.listaIngredientes, global.paramFiltro]);

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
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
            gridTemplateColumns: "repeat(auto-fill, 275px)",
            gap: "1rem",
            justifyContent: "space-between",
            marginBottom: "10rem",
          }}
        >
          {global.dados.respostaQuery?.map((res: Receita) => (
            <CardReceita receita={res} key={`receita - ${res.titulo}`} />
          ))}
        </div>
      </div>
    </div>
  );
};
