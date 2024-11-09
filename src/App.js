import React from "react";
import "./App.css";
import {
  Footer,
  Header,
  Navbar,
  ServicosOferecidos,
  Carousel,
  SobreNos
} from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Header />
      <  SobreNos/>
      <ServicosOferecidos />
      <Footer />
    </div>
  );
}

export default App;
