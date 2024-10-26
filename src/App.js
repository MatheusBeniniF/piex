import React from "react";
import "./App.css";
import { Footer, Header, Navbar, NossosProjetos, SobreNos,Carousel } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Header />
      <SobreNos />
      <NossosProjetos />
      <Footer />
    </div>
  );
}

export default App;
