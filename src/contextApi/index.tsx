import React, { createContext, useState } from "react";

interface IGlobalStorage {
  listaIngredientes: string[];
  loading: boolean;
  paramFiltro: { estrela: number; tempoPreparo: number };
  tipoPesquisa: "receita" | "ingredientes";
  addIngrediente: (ingrediente: string) => void;
  removerIngrediente: (ingrediente: string) => void;
  selecionarTipoPesquisa: (tipo: "receita" | "ingredientes") => void;
  alterarCampoFiltro: (
    campo: "estrela" | "tempoPreparo",
    valor: number,
  ) => void;
}

interface IGlobalStorageChildren {
  children: React.ReactNode;
}

export const GlobalContext = createContext<IGlobalStorage>(
  {} as IGlobalStorage,
);

export const GlobalStorage = ({ children }: IGlobalStorageChildren) => {
  const [listaIngredientes, setListaIngredientes] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const [tipoPesquisa, setTipoPesquisa] = useState<"receita" | "ingredientes">(
    "receita",
  );

  const [paramFiltro, setParamFiltro] = useState({
    estrela: 0,
    tempoPreparo: 0,
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

  const alterarCampoFiltro = (
    campo: "estrela" | "tempoPreparo",
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
        loading,
        tipoPesquisa,
        paramFiltro,
        addIngrediente,
        removerIngrediente,
        selecionarTipoPesquisa,
        alterarCampoFiltro,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
