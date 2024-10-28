import React from "react";
import "./App.css";
import {
  Footer,
  Header,
  Navbar,
  ServicosOferecidos,
  Carousel,
} from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Header />
      <ServicosOferecidos />
      <Footer />
    </div>
  );
}

export default App;
