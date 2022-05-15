import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
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

import {
  pegarReceitaPorIngredientes,
  pegarReceitaPorNome,
  pegarReceitaPorCategoria,
} from "../../api";
import { IReceita } from "../../types/receita";

export const Pesquisa = () => {
  const navigator = useNavigate();

  const { receita } = useParams();
  const { categoria } = useParams();
  const [searchParam] = useSearchParams();
  const page = Number.parseInt(searchParam.get("page") || "1");

  const global = useContext(GlobalContext);
  const { classes } = usePgPesquisaStyle();
  const [data, setData] = useState<IBuscaReceitas>({} as IBuscaReceitas);

  let novaPesquisa = false;
  let pesquisaInicial = false;

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

      navigator(`../pesquisa/${receita}?page=${global.paramFiltro.page}`);
    } else if (categoria) {
      const { url, options } = pegarReceitaPorCategoria(
        global.paramFiltro.page,
        global.paramFiltro.limite,
        global.paramFiltro.estrela,
        global.paramFiltro.tempoPreparo,
        categoria,
      );

      (async function () {
        const resposta = await global.fetchDados(url, options);
        if ("total" in resposta) {
          setData(resposta);
        }
        console.log(resposta);
      })();

      navigator(
        `../pesquisa/categorias/${categoria}?page=${global.paramFiltro.page}`,
      );
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

      navigator(`../pesquisa/ingredientes?page=${global.paramFiltro.page}`);
    }
  }, [global.paramFiltro.page]);

  useEffect(() => {
    if (pesquisaInicial) return;
    novaPesquisa = true;

    global.alterarCampoFiltro("page", 1);

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

      navigator(`../pesquisa/${receita}?page=${global.paramFiltro.page}`);
    } else if (categoria) {
      const { url, options } = pegarReceitaPorCategoria(
        page,
        global.paramFiltro.limite,
        global.paramFiltro.estrela,
        global.paramFiltro.tempoPreparo,
        categoria,
      );

      (async function () {
        const resposta = await global.fetchDados(url, options);
        if ("total" in resposta) {
          setData(resposta);
        }
        console.log(resposta);
      })();

      navigator(
        `../pesquisa/categorias/${categoria}?page=${global.paramFiltro.page}`,
      );
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

      navigator(`../pesquisa/ingredientes?page=${global.paramFiltro.page}`);
    }
    novaPesquisa = false;
  }, [
    global.paramFiltro.limite,
    global.paramFiltro.estrela,
    global.paramFiltro.tempoPreparo,
  ]);

  // Novos filtros, receita ou ingredientes
  useEffect(() => {
    novaPesquisa = true; // Evitar o efeito de page
    pesquisaInicial = true; // Evitar o efeito de filtro

    global.alterarCampoFiltro("page", page);
    if (receita) {
      const nomeReceita = receita.split(" ").join("+");
      const { url, options } = pegarReceitaPorNome(
        page,
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

      navigator(`../pesquisa/${receita}?page=${global.paramFiltro.page}`);
    } else if (categoria) {
      const { url, options } = pegarReceitaPorCategoria(
        page,
        global.paramFiltro.limite,
        global.paramFiltro.estrela,
        global.paramFiltro.tempoPreparo,
        categoria,
      );
      console.log(url);

      (async function () {
        const resposta = await global.fetchDados(url, options);
        if ("total" in resposta) {
          setData(resposta);
        }
        console.log(resposta);
      })();

      navigator(
        `../pesquisa/categorias/${categoria}?page=${global.paramFiltro.page}`,
      );
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

      navigator(`../pesquisa/ingredientes?page=${global.paramFiltro.page}`);
    }

    novaPesquisa = false;
    pesquisaInicial = false;
  }, [receita, global.listaIngredientes]);

  return (
    <div className={classes.pesquisaContainer}>
      <PesquisaLateral />

      <div className={classes.resultadoPesquisaContainer}>
        <Titulo fontCaveat={false}>
          Pesquisando: "<HL>{receita || categoria || "Por ingredientes"}</HL>"
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
