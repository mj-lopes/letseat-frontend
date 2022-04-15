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
        <Titulo fontCaveat={false} mb="md">
          Pesquisando: "<HL>{receita}</HL>"
        </Titulo>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, 300px)",
            gap: "1rem",
            justifyContent: "space-between",
          }}
        >
          {global.dados?.map((res: Receita) => (
            <CardReceita receita={res} />
          ))}
        </div>
      </div>
    </div>
  );
};
