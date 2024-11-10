import React from "react";
import { Card } from "../components";

const EsportesEParceiros = () => {
  return (
    <div>
      <section>
        <h2>Atividades Esportivas</h2>
        <Card title="Jiu-Jitsu e Futebol">
          <p>
            O Projeto Life oferece Jiu-Jitsu, futebol de salão, entre outros
            esportes, incentivando a prática esportiva entre crianças e
            adolescentes.
          </p>
          <h3>Núcleos de Jiu-Jitsu</h3>
          <p>
            Nosso núcleo de Jiu-Jitsu atende crianças com e sem deficiência,
            trazendo benefícios para o desenvolvimento físico e mental.
          </p>
        </Card>
      </section>

      <section>
        <h2>Parceiros e Apoiadores</h2>
        <Card title="Nossos Parceiros">
          <p>
            Agradecemos aos nossos parceiros, como Estrela Urbanidade e
            Instituto Nathalia Braga, que nos ajudam a fazer o projeto crescer.
          </p>
          <p>
            Essas colaborações são essenciais para manter nossos serviços e
            atividades.
          </p>
        </Card>
      </section>
    </div>
  );
};

export { EsportesEParceiros };
