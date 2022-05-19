import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { GlobalContext, IBuscaReceitas } from "../../contextApi";
import panelaVazia from "../../assets/panelaVazia.svg";

import { Image, Text } from "@mantine/core";
import {
  HL,
  Titulo,
  CardReceita,
  Paginacao,
  PesquisaLateral,
  Loading,
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
  const [erro, setErro] = useState<any>("");
  const [buscaSemResultado, setBuscaSemResultado] = useState<string>("");

  let novaPesquisa = false;
  let pesquisaInicial = false;

  const TITULO = categoria
    ? categoria.split("+").join(" ")
    : receita
    ? receita
    : "Ingredientes";

  async function fetchDadosApi(url: string, options: object) {
    try {
      setBuscaSemResultado("");

      const resposta = await global.fetchDados(url, options);

      if (!resposta) {
        setBuscaSemResultado("Sem resultados encontrados");
      }

      if (resposta && "total" in resposta) {
        setData(resposta);
      }
    } catch (erro) {
      setErro(erro);
    }
  }

  // Fetch de novas páginas
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

      fetchDadosApi(url, options);

      navigator(`../pesquisa/${receita}?page=${global.paramFiltro.page}`);
    } else if (categoria) {
      const { url, options } = pegarReceitaPorCategoria(
        global.paramFiltro.page,
        global.paramFiltro.limite,
        global.paramFiltro.estrela,
        global.paramFiltro.tempoPreparo,
        categoria,
      );

      fetchDadosApi(url, options);

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

      fetchDadosApi(url, options);

      navigator(`../pesquisa/ingredientes?page=${global.paramFiltro.page}`);
    }
  }, [global.paramFiltro.page]);

  // Fetch ao realizar a alteração de algum filtro de busca
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

      fetchDadosApi(url, options);

      navigator(`../pesquisa/${receita}?page=${global.paramFiltro.page}`);
    } else if (categoria) {
      const { url, options } = pegarReceitaPorCategoria(
        page,
        global.paramFiltro.limite,
        global.paramFiltro.estrela,
        global.paramFiltro.tempoPreparo,
        categoria,
      );

      fetchDadosApi(url, options);

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

      fetchDadosApi(url, options);

      navigator(`../pesquisa/ingredientes?page=${global.paramFiltro.page}`);
    }
    novaPesquisa = false;
  }, [
    global.paramFiltro.limite,
    global.paramFiltro.estrela,
    global.paramFiltro.tempoPreparo,
  ]);

  // Fetch inicial ao entrar no componente e ao alterar os paramêtros de busca
  useEffect(() => {
    novaPesquisa = true; // Evitar o efeito de paginacao inicial
    pesquisaInicial = true; // Evitar o efeito de filtro inicial

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

      fetchDadosApi(url, options);

      navigator(`../pesquisa/${receita}?page=${global.paramFiltro.page}`);
    } else if (categoria) {
      const { url, options } = pegarReceitaPorCategoria(
        page,
        global.paramFiltro.limite,
        global.paramFiltro.estrela,
        global.paramFiltro.tempoPreparo,
        categoria,
      );

      fetchDadosApi(url, options);

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

      fetchDadosApi(url, options);

      navigator(`../pesquisa/ingredientes?page=${global.paramFiltro.page}`);
    }

    novaPesquisa = false;
    pesquisaInicial = false;
  }, [receita, global.listaIngredientes]);

  if (buscaSemResultado) {
    return (
      <>
        <Loading carregando={global.loading} />
        <div className={classes.pesquisaContainer}>
          <PesquisaLateral />

          <div className={classes.tituloSemResultadoDeBusca}>
            <Image
              src={panelaVazia}
              className={classes.imgBuscaSemResultado}
              width="150px"
            />
            <Titulo fontCaveat={false}>
              Não foi encontrado nenhum resultado para a busca:{" "}
              <HL>{TITULO}</HL>
            </Titulo>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Loading carregando={global.loading} />
      <div className={classes.pesquisaContainer}>
        <PesquisaLateral />

        <div className={classes.resultadoPesquisaContainer}>
          <Titulo fontCaveat={false}>
            {categoria ? "Categoria: " : "Pesquisando: "}
            <HL>{TITULO}</HL>
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
    </>
  );
};
