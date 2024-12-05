import React from "react";
import "../styles/SobreEServicos.css";
import kleyton from "../img/Kleyton.jpeg";
import familia from "../img/Familia.jpeg";
import cesta from "../img/CestaBasica.jpeg";
import medicamento from "../img/medicamento-generico.jpeg";

const SobreEServicos = () => {
  return (
    <div className="sobre-servicos">
      <div>
        <h1 style={{ color: "white", marginBottom: "10vh" }}>
          Como surgiu o projeto Life?
        </h1>
      </div>
      <section>
        <div className="col-md-12" style={{ display: "flex" }}>
          <div
            style={{ display: "flex", alignItems: "center" }}
            className="col-md-6"
          >
            {" "}
            <label className="infoTexto">
              A associação Life Projetos Sociais, existe há 15 anos, criada por
              Kleyton Oliveira, sendo que o mesmo está à frente do projeto desde
              sua implantação. Atualmente a Associação Life Projetos Sociais, é
              registrada e localizada no bairro Santa Efigênia, Juiz de Fora/MG,
              com sede provisória na rua Antônio da Rocha Lima, número 84, onde
              atendemos diversas comunidades sitiadas.
            </label>
          </div>

          <div className="col-md-6" style={{display:"flex",justifyContent:"center"}}>
            {" "}
            <img
              className="imgBorder"
              style={{ width: "65%" }}
              src={kleyton}
            ></img>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h1
            style={{
              color: "white",
              marginBottom: "10vh",
              textAlign: "center",
            }}
          >
            O que ele faz?
          </h1>
        </div>
        <div className="col-md-12" style={{ display: "flex" }}>
          <div className="col-md-6" style={{display:"flex",justifyContent:"center"}}>
            <img
              src={familia}
              className="imgBorder"
              style={{ width: "65%" }}
            ></img>
          </div>
          <div
            style={{ display: "flex", alignItems: "center" }}
            className="col-md-6"
          >
            <label className="infoTexto">
              O projeto atende cerca de 480 famílias carentes entre deficientes
              físicos e crianças com autismo
            </label>
          </div>
        </div>
      </section>
      <section>
        <div style={{ backgroundColor: "#ec1d25" }}>
          <h2 style={{ color: "white" }}>
            Serviços Oferecidos pelo projeto Life são:
          </h2>
        </div>

        <div style={{ display: "flex" }} className="col-md-12">
          <div
            style={{ display: "flex", alignItems: "center" }}
            className="col-md-6"
          >
            <label className="infoTexto">
              Cestas básicas, marcação de consultas,
              cirurgias,fisioterapias,atendimentos jurídicos,psicológicos
              encaminhamento para creches e distribuição de remédios.
            </label>
          </div>
          <div className="col-md-6">
            <img
              src={cesta}
              className="imgBorder"
              style={{ width: "100%" }}
            ></img>
          </div>
        </div>
        <div
          style={{ display: "flex", marginTop: "10vh" }}
          className="col-md-12"
        >
          <div className="col-md-6" style={{display:"flex",justifyContent:"center"}}>
            {" "}
            <img
              className="imgBorder"
              src={medicamento}
              style={{ width: "65%" }}
            ></img>
          </div>
          <div
            style={{ display: "flex", alignItems: "center" }}
            className="col-md-6"
          >
            <label className="infoTexto">
              Farmácia compartilhada: onde pessoas que não fazem mais uso de
              certas medicações,doam para o projeto ,este encaminha para os
              assistidos pelo mesmo,para manterem seus tratamentos diários.
            </label>
          </div>
        </div>
      </section>
    </div>
  );
};

export { SobreEServicos };
