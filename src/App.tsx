import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import { Home } from "./pages/home/Home";

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
