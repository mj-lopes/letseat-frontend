import React, { useContext, useEffect, useState } from "react";
import { useParams, Routes, Route } from "react-router-dom";
import { pegarReceitaPorIngredientes, pegarReceitaPorNome } from "../../api";
import { PesquisaLateral } from "../../components/PesquisaLateral";
import { GlobalContext } from "../../contextApi";
import { Receita } from "../../types/reseita";

export const Pesquisa = () => {
  const { receita } = useParams();
  const global = useContext(GlobalContext);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    if (receita) {
      const { url, options } = pegarReceitaPorNome(
        page,
        12,
        global.paramFiltro.estrela,
        global.paramFiltro.tempoPreparo,
        receita,
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
    <div style={{ display: "flex" }}>
      <PesquisaLateral />

      <div style={{ marginTop: "6rem" }}>
        <h1>{receita}</h1>
        {global.dados?.map((res: Receita) => (
          <>
            <h1 key={`receita - ${res.titulo}`}>{res.titulo}</h1>
            {/* <img src={res.imgUrl} alt={res.titulo} /> */}
          </>
        ))}
      </div>
    </div>
  );
};
