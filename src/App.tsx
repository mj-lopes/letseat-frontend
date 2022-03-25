import * as React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import { Home } from "./pages/home/Home";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:receita" element={<Home />} />
          <Route path="/ingredientes" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
