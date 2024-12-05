import React from "react";
import { Card } from "../components";
import "../styles/EsportesEParceiros.css";
import jiuJitsu from "../img/jiuJitsu.jpeg";
import jiuJitsu2 from "../img/jiuJitsu2.jpeg";
import imagemFut from "../img/Futebol.jpeg";

const EsportesEParceiros = () => {
  return (

    
    <div className="esportes-parceiros">
      <section>
        <div>
        <h2 style={{color:"white"}}>Atividades Esportivas</h2>
        </div>

   <div className="col-md-12 cardParceiros">
<div className="col-md-6">
<label className="infoTexto">
            O Projeto Life oferece Jiu-Jitsu, futebol de salão, entre outros
            esportes, incentivando a prática esportiva entre crianças e
            adolescentes.
          </label>
</div>

<div className="col-md-6">
<img className="imgBorder" style={{width:"100%"}} src={imagemFut}></img>
</div>
   </div>

   <h2 className="card-title" style={{color:"white"}}>Núcleos de Jiu-Jitsu</h2>
        <div className="col-md-12 cardParceiros">
<div className="col-md-6" style={{textAlign:"center"}}>
<img className="imgJiu imgBorder" src={jiuJitsu}></img>
</div>

<div className="col-md-6 divMenor">
<label className="infoTexto" style={{top:"100px",position:"relative"}}>
            Nosso núcleo de Jiu-Jitsu atende crianças com e sem deficiência,
            trazendo benefícios para o desenvolvimento físico e mental.
          </label>
</div>
        </div>
         
     
      </section>

      <section>
        <h2 style={{color:"white"}}>Parceiros e Apoiadores</h2>
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
