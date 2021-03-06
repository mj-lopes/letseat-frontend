import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import { Home } from "./pages/home/Home";
import { Pesquisa } from "./pages/pesquisa/Pesquisa";
import { Receita } from "./pages/receita";

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pesquisa/:receita" element={<Pesquisa />} />
          <Route path="/pesquisa/ingredientes/" element={<Pesquisa />} />
          <Route
            path="/pesquisa/categorias/:categoria"
            element={<Pesquisa />}
          />
          <Route path="/receitas/receita/:id" element={<Receita />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
