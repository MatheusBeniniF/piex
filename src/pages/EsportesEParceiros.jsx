import React from "react";
import "../styles/EsportesEParceiros.css";
import jiuJitsu3 from "../img/jiuJitsu3.jpeg";
import imagemFut from "../img/Futebol.jpeg";
import nathaliaImg from "../img/Nathalia.jpeg";
import bbqImg from "../img/bbq.jpeg";
import tresAlunos from "../img/alunos.jpeg";
import kleytonCrianca from "../img/kleytonCrianca.jpeg";
import Angelyna from "../img/angelyna.jpeg";
import laura from "../img/laura.jpeg";
import zumba from "../img/zumba.jpeg";
import estrelaImg from "../img/estrela.jpeg";
import souzaGomes from "../img/SouzaGomes.jpeg";
import mrTugas from "../img/MrTugas.jpeg";
import policia from "../img/policia.jpeg";
import china from "../img/china.jpeg";
import grill from "../img/Grill.jpeg";
import vencedor1 from "../img/Vencedor_foto1.jpg";
import vencedor2 from "../img/Vencedor_foto2.jpg";
import vencedor3 from "../img/Vencedor_foto3.jpg";
import vencedor4 from "../img/Vencedor_foto4.jpg";
import vencedor5 from "../img/Vencedor_foto5.jpg";
import vencedor6 from "../img/Vencedor_foto6.jpg";
import { Card } from "../components";
import "../styles/TestemunhosEContato.css";


const EsportesEParceiros = () => {
  return (
    <div className="esportes-parceiros">
      <section>
        <div className="section-header">
          <h2>Esportes</h2>
        </div>

        <div className="cardParceiros">
          <div className="col-md-6">
            <label className="infoTexto">
              Temos futebol de salão onde atendemos nossas crianças incentivando
              ao esporte, com nosso treinador Sr. Nem.
            </label>
          </div>

          <div className="col-md-6">
            <img className="imgBorder" src={imagemFut} alt="Futebol" />
          </div>
        </div>

        <div className="section-header">
          <h2>Jiu-Jitsu</h2>
        </div>

        <div className="cardParceiros">
          <label className="infoTexto">
            Nosso projeto Social Life oferece aulas de jiu-jitsu para as
            crianças da nossa comunidade.
          </label>

          <img className="imgJiu imgBorder" src={jiuJitsu3} alt="Jiu-jitsu" />
        </div>

        <div className="cardParceiros">
          <label className="infoTexto">
            Hoje atendemos algumas crianças no Jiu-Jitsu com autismo e déficit
            de atenção, onde o Jiu-Jitsu na vida delas tem sido um diferencial e
            a própria família tem visto o resultado positivo.
          </label>
        </div>

        <div className="student-card">
          <div className="student-info">
            <label className="infoTexto">
              Nossos três alunos que foram os pioneiros do jiu-jitsu no projeto,
              tenho muito orgulho desses meus três filhos.
            </label>
          </div>

          <div className="student-image">
            <img src={tresAlunos} alt="Três alunos" />
          </div>
        </div>

        <div className="student-card">
          <div className="student-info">
            <label className="infoTexto">
              Iniciou aos 6 anos de idade e hoje na faixa cinza e branca.
              <br></br>
              Medalha de ouro em 2017 Copa Budô <br></br> Medalha de prata em
              2018 Campeonato Soul <br></br> Medalha de bronze em 2019 1º Copa
              W-Force.
            </label>
          </div>

          <div className="student-image">
            <img src={kleytonCrianca} alt="Kleyton" />
          </div>
        </div>

        <div className="student-card">
          <div className="student-info">
            <label className="infoTexto">
              Iniciou aos 6 anos de idade e hoje na faixa cinza e branca.
              <br></br>
              Medalha de prata em 2017 Copa Budô <br></br> Campeã do troféu 2018
              Campeonato Soul <br></br> Medalha de ouro em 2019 1º Copa W-Force.
            </label>
          </div>

          <div className="student-image">
            <img src={Angelyna} alt="Angelyna" />
          </div>
        </div>

        <div className="student-card">
          <div className="student-info">
            <label className="infoTexto">
              Iniciou aos 6 anos de idade e hoje na faixa cinza e branca.
              <br></br>
              Medalha de prata em 2017 Copa Budô <br></br> Medalha de prata em
              2018 Campeonato Soul<br></br> Medalha de ouro em 2019 1º Copa
              W-Force.
            </label>
          </div>

          <div className="student-image">
            <img src={laura} alt="Laura" />
          </div>
        </div>

        <div className="section-header">
          <h2>Crianças que venceram campeonato de extremo Jiu-Jitsu na cidade de Mar de Espanha MG</h2>
        </div>

        <div className="cardParceiros">

          <div>
            <div className="imgVencedor">
              <img src={vencedor1}
                className="imgBorder"
                alt="Vencedor(a)"
              />
            </div>
            <div className="imgVencedor">
              <img src={vencedor2}
                className="imgBorder"
                alt="Vencedor(a)"
              />
            </div>
          </div>

          <div>
            <div className="imgVencedor">
              <img src={vencedor3}
                className="imgBorder"
                alt="Vencedor(a)"
              />
            </div>
            <div className="imgVencedor">
              <img src={vencedor4}
                className="imgBorder"
                alt="Vencedor(a)"
              />
            </div>
          </div>

          <div>
            <div className="imgVencedor">
              <img src={vencedor5}
                className="imgBorder"
                alt="Vencedor(a)"
              />
            </div>
            <div className="imgVencedor">
              <img src={vencedor6}
                className="imgBorder"
                alt="Vencedor(a)"
              />
            </div>
          </div>

        </div>

        <div className="section-header">
          <h2>Zumba</h2>
        </div>

        <div className="section-header image-container">
          <img src={zumba} alt="Zumba" className="imgBorder" />
        </div>
      </section>

      <section className="partners-section">
        <h2>Apoiadores</h2>
        <div className="partners-grid">
          <div className="parceiro-card">
            <a
              href="https://www.instagram.com/institutonathaliabraga/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={nathaliaImg} alt="Nathalia" className="imgBorder" />
            </a>
            <h3 style={{ fontWeight: "bold" }}>Instituto Nathalia Braga</h3>
          </div>
          <div className="parceiro-card">
            <a
              href="https://churrasqueirabbq.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={bbqImg} alt="BBQ" className="imgBorder" />
            </a>
            <h3 style={{ fontWeight: "bold" }}>Churrasqueira BBQ</h3>
          </div>
          <div className="parceiro-card">
            <a
              href="https://estrelaurbanidade.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={estrelaImg}
                alt="Estrela Urbanidade"
                className="imgBorder"
              />
            </a>
            <h3 style={{ fontWeight: "bold" }}>Estrela Urbanidade</h3>
          </div>
          <div className="parceiro-card">
            <a
              href="https://souzagomes.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={souzaGomes} alt="Souza Gomes" className="imgBorder" />
            </a>
            <h3 style={{ fontWeight: "bold" }}>Souza Gomes</h3>
          </div>
          <div className="parceiro-card">
            <a
              href="https://www.mrtugas.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={mrTugas} alt="Mr Tugas" className="imgBorder" />
            </a>
            <h3 style={{ fontWeight: "bold" }}>Mr. Tugas</h3>
          </div>
          <div className="parceiro-card">
            <a
              href="https://www.policiamilitar.mg.gov.br/ "
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={policia} alt="Polícia Militar" className="imgBorder" />
            </a>
            <h3 style={{ fontWeight: "bold" }}>Polícia Militar</h3>
          </div>
          <div className="parceiro-card">
            <a
              href="https://www.chinainbox.com.br/tabs/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={china} alt="China in Box" className="imgBorder" />
            </a>
            <h3 style={{ fontWeight: "bold" }}>China in Box</h3>
          </div>
          <div className="parceiro-card">
            <a
              href="https://www.instagram.com/churrascadagrilljf/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={grill} alt="Churrascada Grill" className="imgBorder" />
            </a>
            <h3 style={{ fontWeight: "bold" }}>Churrascada Grill</h3>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Contato</h2>
        <Card title="Fale Conosco">
          <p>
            Entre em contato conosco para saber mais ou para se tornar um
            parceiro do Projeto Life.
          </p>
          <p>
            Clique no botão abaixo para nos enviar uma mensagem pelo WhatsApp!
          </p>
          <button
            className="whatsapp-button"
            onClick={() =>
              (window.location.href = "https://wa.me/5532998281521")
            }
          >
            Fale Conosco pelo WhatsApp
          </button>
        </Card>
      </section>
    </div>
  );
};

export { EsportesEParceiros };
