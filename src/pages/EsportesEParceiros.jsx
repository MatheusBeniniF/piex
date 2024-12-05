import React from "react";
import { Card } from "../components";
import "../styles/EsportesEParceiros.css";
import jiuJitsu from "../img/jiuJitsu.jpeg";
import jiuJitsu3 from "../img/jiuJitsu3.jpeg";
import imagemFut from "../img/Futebol.jpeg";
import marcosImg from "../img/MarcosChurrascada.jpeg";
import nathaliaImg from "../img/Nathalia.jpeg";
import bbqImg from "../img/bbq.jpeg";
import tresAlunos from "../img/alunos.jpeg";
import kleytonCrianca from "../img/kleytonCrianca.jpeg";
import Angelyna from "../img/angelyna.jpeg";
import laura from "../img/laura.jpeg";
import zumba from "../img/zumba.jpeg";
import estrelaImg from "../img/estrela.jpeg";



const EsportesEParceiros = () => {
  return (


    <div className="esportes-parceiros">
      <section>
        <div style={{ backgroundColor: "#ec1d25" }}>
          <h2 style={{ color: "white" }}>Esportes</h2>
        </div>

        <div className="col-md-12 cardParceiros">
          <div className="col-md-6">
            <label className="infoTexto">
              Temos futebol de salão onde atendemos nossas crianças  incentivando ao esporte,com nosso treinador Sr. Nem.
            </label>
          </div>

          <div className="col-md-6">
            <img className="imgBorder" style={{ width: "100%" }} src={imagemFut}></img>
          </div>
        </div>

        <div style={{ backgroundColor: "#ec1d25" }}>
          <h2 style={{ color: "white" }}>Jiu-Jitsu</h2>
        </div>
        <div style={{ textAlign: "center" }}>
          <label className="infoTexto" >Nosso projeto Social Life oferece aulas de jiu-jitsu para as crianças da nossa comunidade.</label>
        </div>
        <div className="col-md-12 cardParceiros">
          <div style={{textAlign:"center"}}>
            <img className="imgJiu imgBorder" style={{width:"70%"}} src={jiuJitsu3}></img>
          </div>
        </div>
        <div style={{ marginTop: "5vh" }}>
          <label className="infoTexto" style={{ textAlign: "center" }}>Hoje atendemos algumas crianças no Jiu-Jitsu com autismo e déficit de atenção,
            onde o Jiu-Jitsu na vida delas tem sido um diferencial e a própria família tem visto o resultado
            positivo.
          </label>
        </div>


        <div className="col-md-12" style={{display:"flex",backgroundColor:"white",borderRadius:"4rem",marginTop:"10vh",height:"60vh"}} >
          <div style={{ display: "flex", alignItems: "center" }} className="col-md-6">
            <label style={{textAlign:"center",color:"black"}} className="infoTexto">Nossos três alunos que foram os pioneiros do jiu-jitsu no projeto,tenho muito orgulho desses meus três filhos.</label>
          </div>

          <div className="col-md-6 cardAlunos">
            <img style={{height:"90%"}} src={tresAlunos}></img>
          </div>
        </div>

        <div className="col-md-12" style={{display:"flex",backgroundColor:"white",borderRadius:"4rem",marginTop:"10vh",height:"60vh"}}>
          <div className="col-md-6 cardAlunos">
            <img style={{height:"90%"}} src={kleytonCrianca}></img>
          </div>
          <div style={{ display: "flex", alignItems: "center" }} className="col-md-6">
            <label className="infoTexto" style={{color:"black"}}>Iniciou aos 6 anos de idade e hoje na faixa cinza e branca.<br></br>
              Medalha de ouro em 2017 Copa Budô <br></br> Medalha de prata em 2018 Campeonato Soul <br></br> Medalha de bronze em 2019 1º Copa W-Force.
            </label>
          </div>
        </div>

        <div className="col-md-12" style={{display:"flex",backgroundColor:"white",borderRadius:"4rem",marginTop:"10vh",height:"60vh"}}>
          <div style={{ display: "flex", alignItems: "center" }} className="col-md-6">
          <label className="infoTexto" style={{color:"black"}}>Iniciou aos 6 anos de idade e hoje na faixa cinza e branca.<br></br>
              Medalha de prata em 2017 Copa Budô <br></br> Campeã do troféu 2018 Campeonato Soul <br></br> Medalha de ouro em 2019 1º Copa W-Force.
            </label>
          </div>

          <div style={{textAlign:"center"}} className="col-md-6 cardAlunos">
            <img style={{height:"90%"}} src={Angelyna}></img>
          </div>
        </div>

        <div className="col-md-12" style={{display:"flex",backgroundColor:"white",borderRadius:"4rem",marginTop:"10vh",height:"60vh"}}>
          <div style={{textAlign:"center"}} className="col-md-6 cardAlunos">
            <img style={{height:"90%"}} src={laura}></img>
          </div>
          <div style={{ display: "flex", alignItems: "center" }} className="col-md-6">
            <label className="infoTexto" style={{color:"black"}}>Iniciou aos 6 anos de idade e hoje na faixa cinza e branca.<br></br>
              Medalha de prata em 2017 Copa Budô <br></br> Medalha de prata em 2018 Campeonato Soul<br></br> Medalha de ouro em 2019 1º Copa W-Force.
            </label>
          </div>
        </div>

        <div className="col-md-12" style={{marginTop:"10vh",textAlign:"center"}}>
<img src={zumba} style={{width:"70%"}}></img>
        </div>

      </section>
      <div style={{ backgroundColor: "#f4f4f4", padding: "2rem 0" }}>
        <h2 style={{ textAlign: "center", color: "#333", marginBottom: "1rem" }}>
          Apoiadores
        </h2>
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-md-3">
            <div className="parceiro-card">
              <a href="https://www.instagram.com/marcoschurrascada_/" target="_blank">      <img src={marcosImg} alt="Marcos" className="img-fluid imgBorder" /></a>

              <h3>Marcos Churrascada</h3>
            </div>
          </div>
          <div className="col-md-3">
            <div className="parceiro-card">
              <a href="https://www.instagram.com/institutonathaliabraga/" target="_blank">   <img src={nathaliaImg} alt="Nathalia" className="img-fluid imgBorder" /></a>

              <h3>Instituto Nathalia Braga</h3>
            </div>
          </div>
          <div className="col-md-3">
            <div className="parceiro-card">
              <a href="https://churrasqueirabbq.com.br/" target="_blank">
                <img src={bbqImg} alt="BBQ" className="img-fluid imgBorder" />
              </a>
              <h3>Churrasqueira BBQ</h3>
            </div>
          </div>
          <div className="col-md-3">
            <div className="parceiro-card">
              <a href="https://estrelaurbanidade.com.br/" target="_blank"> <img src={estrelaImg} alt="Estrela Urbanidade" className="img-fluid imgBorder" /></a>

              <h3>Estrela Urbanidade</h3>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export { EsportesEParceiros };
