import { createContext, useState } from "react";

interface IGlobalStorage {
  listaIngredientes: string[];
  setListaIngredientes: React.Dispatch<React.SetStateAction<string[]>>;
}

export const GlobalContext = createContext<IGlobalStorage | null>(null);

export const GlobalStorage = (children: React.ReactNode) => {
  const [listaIngredientes, setListaIngredientes] = useState<string[]>([]);

  return (
    <GlobalContext.Provider value={{ listaIngredientes, setListaIngredientes }}>
      {children}
    </GlobalContext.Provider>
  );
};
