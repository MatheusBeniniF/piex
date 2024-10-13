import React from "react";
import "./App.css";
import { Footer, Header, Navbar, NossosProjetos, SobreNos } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <SobreNos />
      <NossosProjetos />
      <Footer />
    </div>
  );
}

export default App;
