import React from "react";
import { Card } from "../components";
import "./SobreEServicos.css";

const SobreEServicos = () => {
  return (
    <div className="sobre-servicos">
      <section>
        <h2>Sobre o Projeto Life</h2>
        <Card title="Nossa História">
          <p>
            O Projeto Life foi fundado há 15 anos por Kleyton Oliveira. Desde
            então, impactou mais de 480 famílias e 1600 crianças carentes.
          </p>
          <p>
            A missão do projeto é contribuir para o desenvolvimento integral de
            crianças e adolescentes, promovendo justiça social e educação com
            amor.
          </p>
        </Card>
      </section>

      <section>
        <h2>Serviços Oferecidos</h2>
        <Card title="Nossos Serviços">
          <ul>
            <li>Cestas Básicas</li>
            <li>Marcação de Consultas e Cirurgias</li>
            <li>Atendimento Jurídico e Psicológico</li>
            <li>Distribuição de Remédios e Farmácia Compartilhada</li>
          </ul>
          <p>
            Esses serviços são essenciais para apoiar as famílias e garantir um
            desenvolvimento saudável e justo para todos.
          </p>
        </Card>
      </section>
    </div>
  );
};

export { SobreEServicos };
