import React from "react";
import "../styles/SobreEServicos.css";
import kleyton from "../img/Kleyton.jpeg";
import familia from "../img/Familia.jpeg";
import familia2 from "../img/familia2.jpeg";
import familia3 from "../img/familia 3.jpeg";
import cesta from "../img/CestaBasica.jpeg";
import medicamento from "../img/medicamento-generico.jpeg";

const SobreEServicos = () => {
  return (
    <div className="sobre-servicos">
      <section>
        <div className="section-header">
          <h2>Como surgiu o projeto Life?</h2>
        </div>

        <div className="info-card">
          <div className="info-text">
            <label className="infoTexto">
              A associação Life Projetos Sociais, existe há 26 anos, criada por
              Kleyton Oliveira, sendo que o mesmo está à frente do projeto desde
              sua implantação. Atualmente a Associação Life Projetos Sociais, é
              registrada e localizada no bairro Santa Efigênia, Juiz de Fora/MG,
              com sede provisória na rua Antônio da Rocha Lima, número 268, onde
              atendemos diversas comunidades sitiadas.
            </label>
          </div>

          <div className="info-image">
            <img
              className="imgBorder"
              src={kleyton}
              alt="Kleyton"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="section-header">
          <h2>O que ele faz?</h2>
        </div>
        <div className="info-card">
          <div className="info-image">
            <img style={{ width: "82%" }}
              src={familia}
              className="imgBorder"
              alt="Família"
            />
          </div>     <div className="info-image">
            <img style={{ width: "100%" }}
              src={familia2}
              className="imgBorder"
              alt="Família"
            />
          </div>     <div className="info-image">
            <img style={{ width: "63%" }}
              src={familia3}
              className="imgBorder"
              alt="Família"
            />
          </div>
          <div className="info-text">
            <label className="infoTexto">
              O projeto atende cerca de 480 famílias carentes entre deficientes
              físicos e crianças com autismo
            </label>
          </div>
        </div>
      </section>

      <section>
        <div className="section-header">
          <h2>Serviços Oferecidos pelo projeto Life são:</h2>
        </div>

        <div className="info-card">
          <div className="info-text">
            <label className="infoTexto">
              Cestas básicas, marcação de consultas,
              cirurgias, fisioterapias, atendimentos jurídicos, psicológicos
              encaminhamento para creches e distribuição de remédios.
            </label>
          </div>
          <div className="info-image">
            <img
              src={cesta}
              className="imgBorder"
              alt="Cesta Básica"
            />
          </div>
        </div>


        <div className="info-card">
          <div className="info-image">
            <img
              className="imgBorder"
              src={medicamento}
              alt="Medicamentos"
            />
          </div>
          <div className="info-text">
            <label className="infoTexto">
              Farmácia compartilhada: onde pessoas que não fazem mais uso de
              certas medicações, doam para o projeto, este encaminha para os
              assistidos pelo mesmo, para manterem seus tratamentos diários.
            </label>
          </div>
        </div>
      </section>
    </div>
  );
};

export { SobreEServicos };
