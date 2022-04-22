import React, { createContext, useState } from "react";

interface IGlobalStorage {
  listaIngredientes: string[];
  paramFiltro: {
    estrela: number;
    tempoPreparo: number;
    page: number;
    limite: number;
  };
  tipoPesquisa: "receita" | "ingredientes";

  addIngrediente: (ingrediente: string) => void;
  removerIngrediente: (ingrediente: string) => void;
  selecionarTipoPesquisa: (tipo: "receita" | "ingredientes") => void;
  alterarCampoFiltro: (
    campo: "estrela" | "tempoPreparo" | "page" | "limite",
    valor: number,
  ) => void;

  loading: boolean;
  dados: { total: number; respostaQuery: [] };
  erro: any;
  fetchDados: (url: string, options: {}) => Promise<void>;
}

interface IGlobalStorageChildren {
  children: React.ReactNode;
}

interface IdadosFetch {
  total: number;
  respostaQuery: [];
}

export const GlobalContext = createContext<IGlobalStorage>(
  {} as IGlobalStorage,
);

export const GlobalStorage = ({ children }: IGlobalStorageChildren) => {
  const [listaIngredientes, setListaIngredientes] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [dados, setDados] = useState({} as IdadosFetch);
  const [erro, setErro] = useState<string>("");

  const [tipoPesquisa, setTipoPesquisa] = useState<"receita" | "ingredientes">(
    "receita",
  );

  const [paramFiltro, setParamFiltro] = useState({
    estrela: 0,
    tempoPreparo: 0,
    page: 1,
    limite: 12,
  });

  const addIngrediente = (ingrediente: string) => {
    if (!listaIngredientes.includes(ingrediente)) {
      setListaIngredientes([...listaIngredientes, ingrediente]);
    }
  };

  const removerIngrediente = (ingredienteParaRemover: string) => {
    const novoArr = listaIngredientes.filter(
      (ingrediente) => ingrediente !== ingredienteParaRemover,
    );
    setListaIngredientes(novoArr);
  };

  const selecionarTipoPesquisa = (e: "receita" | "ingredientes") => {
    setTipoPesquisa(e);
  };

  const fetchDados = async (url: string, options: {}) => {
    try {
      setLoading(true);

      const dados = await fetch(url, options).then((r) => r.json());

      setDados(dados);
    } catch (error: any) {
      setErro(error);
    } finally {
      setLoading(false);
    }
  };

  const alterarCampoFiltro = (
    campo: "estrela" | "tempoPreparo" | "page" | "limite",
    valor: number,
  ) => {
    setParamFiltro((state) => ({
      ...state,
      [campo]: valor,
    }));
  };

  return (
    <GlobalContext.Provider
      value={{
        listaIngredientes,
        tipoPesquisa,
        paramFiltro,
        addIngrediente,
        removerIngrediente,
        selecionarTipoPesquisa,
        alterarCampoFiltro,
        loading,
        dados,
        erro,
        fetchDados,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
