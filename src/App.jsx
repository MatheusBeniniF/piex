import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { EsportesEParceiros, Home, SobreEServicos } from "./pages";
import { TestemunhosEContato } from "./pages/TestemunhosEContato";
import { Footer, Navbar } from "./components";
import './styles/main.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-e-servicos" element={<SobreEServicos />} />
        <Route path="/esportes-e-parceiros" element={<EsportesEParceiros />} />
        <Route
          path="/testemunhos-e-contato"
          element={<TestemunhosEContato />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
