import React from "react";
import { Carousel, Header } from "../components";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <Carousel />
      <Header />
    </div>
  );
};

export { Home };
