import React from "react";
import "../styles/SobreEServicos.css";
import kleyton from "../img/Kleyton.jpeg";
import familia from "../img/Familia.jpeg";
import familia2 from "../img/familia2.jpeg";
import familia3 from "../img/familia 3.jpeg";
import cesta from "../img/CestaBasica.jpeg";
import medicamento from "../img/medicamento-generico.jpeg";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"

const SobreEServicos = () => {
  return (
    <div className="container flex flex-col gap-2 mx-auto px-4 py-8">
      <Card className="bg-white/95 backdrop-blur">
        <CardHeader>
          <CardTitle>Como surgiu o projeto Life?</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-lg">
          <p>
            A associação Life Projetos Sociais, existe há 26 anos, criada por
            Kleyton Oliveira, sendo que o mesmo está à frente do projeto desde
            sua implantação. Atualmente a Associação Life Projetos Sociais, é
            registrada e localizada no bairro Santa Efigênia, Juiz de Fora/MG,
            com sede provisória na rua Antônio da Rocha Lima, número 268, onde
            atendemos diversas comunidades sitiadas.
          </p>
          <div className="flex align-center justify-center">
            <img
              className="w-50 h-50"
              src={kleyton}
              alt="Kleyton"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/95 backdrop-blur">
        <CardHeader>
          <CardTitle>O que ele faz?</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-lg">

          <p>
            O projeto atende cerca de 480 famílias carentes entre deficientes
            físicos e crianças com autismo
          </p>
          <div className="flex gap-4">
            <img
              src={familia}
              alt="Família"
              style={{ width: "200px", height: "200px" }}
            />
            <img
              src={familia2}
              alt="Família"
              style={{ width: "200px", height: "200px" }}
            />
            <img
              src={familia3}
              alt="Família"
              style={{ width: "200px", height: "200px" }}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/95 backdrop-blur">
        <CardHeader>
          <CardTitle>
            Serviços Oferecidos pelo projeto Life são:
          </CardTitle>
        </CardHeader>
        <CardContent className="prose prose-lg">
          <p>
            Cestas básicas, marcação de consultas,
            cirurgias, fisioterapias, atendimentos jurídicos, psicológicos
            encaminhamento para creches e distribuição de remédios.
          </p>
          <div className="flex align-center justify-center">
            <img
              className="w-50 h-50"
              src={cesta}
              alt="cesta"
            />
          </div>
        </CardContent>
        <CardContent className="prose prose-lg">
          <p>
            Farmácia compartilhada: onde pessoas que não fazem mais uso de
            certas medicações, doam para o projeto, este encaminha para os
            assistidos pelo mesmo, para manterem seus tratamentos diários.
          </p>
          <div className="flex align-center justify-center">
            <img
              className="w-50 h-50"
              src={medicamento}
              alt="medicamento"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export { SobreEServicos };
