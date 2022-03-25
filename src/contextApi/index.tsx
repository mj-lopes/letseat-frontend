import React, { createContext, useState } from "react";

interface IGlobalStorage {
  listaIngredientes: string[];
  setListaIngredientes: React.Dispatch<React.SetStateAction<string[]>>;
}

interface IGlobalStorageChildren {
  children: React.ReactNode;
}

export const GlobalContext = createContext<IGlobalStorage | null>(null);

export const GlobalStorage = ({ children }: IGlobalStorageChildren) => {
  const [listaIngredientes, setListaIngredientes] = useState<string[]>([]);

  return (
    <GlobalContext.Provider value={{ listaIngredientes, setListaIngredientes }}>
      {children}
    </GlobalContext.Provider>
  );
};
