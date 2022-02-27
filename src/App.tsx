import * as React from "react";
import { Footer, Header } from "./components";
import { Home } from "./pages/home/Home";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
};

export default App;
