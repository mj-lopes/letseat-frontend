import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import { Home } from "./pages/home/Home";
import { Pesquisa } from "./pages/pesquisa/Pesquisa";

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pesquisa/:receita" element={<Pesquisa />} />
          <Route path="/pesquisa/ingredientes/" element={<Pesquisa />} />
          {/* <Route path="/ingredientes" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
