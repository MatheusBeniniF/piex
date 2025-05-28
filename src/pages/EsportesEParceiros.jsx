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
import ssxMarinho from "../img/ssx-marinho.png"
import vencedor1 from "../img/Vencedor_foto1.jpg";
import vencedor2 from "../img/Vencedor_foto2.jpg";
import vencedor3 from "../img/Vencedor_foto3.jpg";
import vencedor4 from "../img/Vencedor_foto4.jpg";
import vencedor5 from "../img/Vencedor_foto5.jpg";
import vencedor6 from "../img/Vencedor_foto6.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button";

const EsportesEParceiros = () => {
  const parceiros = [
    {
      nome: "Nathalia Braga",
      descricao: "Instituto Nathalia Braga",
      link: "https://www.instagram.com/institutonathaliabraga/",
      imagem: nathaliaImg,
      alt: "Nathalia"
    },
    {
      nome: "Churrasqueira BBQ",
      descricao: "Churrasqueira de qualidade",
      link: "https://churrasqueirabbq.com.br/",
      imagem: bbqImg,
      alt: "BBQ"
    },
    {
      nome: "Estrela Urbanidade",
      descricao: "Instituto de Educação",
      link: "https://estrelaurbanidade.com.br/",
      imagem: estrelaImg,
      alt: "Estrela Urbanidade"
    },
    {
      nome: "Souza Gomes",
      descricao: "Souza Gomes",
      link: "https://souzagomes.com.br/",
      imagem: souzaGomes,
      alt: "Souza Gomes"
    },
    {
      nome: "Mr. Tugas",
      descricao: "Mr. Tugas",
      link: "https://www.mrtugas.com.br/",
      imagem: mrTugas,
      alt: "Mr Tugas"
    },
    {
      nome: "Polícia Militar",
      descricao: "Polícia Militar",
      link: "https://www.policiamilitar.mg.gov.br/",
      imagem: policia,
      alt: "Polícia Militar"
    },
    {
      nome: "China in Box",
      descricao: "China in Box",
      link: "https://www.chinainbox.com.br/tabs/home",
      imagem: china,
      alt: "China in Box"
    },
    {
      nome: "Churrascada Grill",
      descricao: "Churrascada Grill",
      link: "https://www.instagram.com/churrascadagrilljf/",
      imagem: grill,
      alt: "Churrascada Grill"
    },
    {
      nome: "SSX Marinho",
      descricao: "SSX Marinho",
      link: "https://www.ssxassessoriapatrimonial.com.br/",
      imagem: ssxMarinho,
      alt: "SSX Marinho"
    }
  ];

  return (
    <div className="flex flex-col gap-2 container mx-auto px-4 py-8">
      <h2>Esportes</h2>
      <Card className="bg-white/95 backdrop-blur">
        <CardHeader>
          <CardTitle>Futebol</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-lg">
          <div className="flex">
            <p>
              Temos futebol de salão onde atendemos nossas crianças incentivando
              ao esporte, com nosso treinador Sr. Nem.
            </p>
            <img className="imgBorder" src={imagemFut} alt="Futebol" />
          </div>

        </CardContent>
      </Card>

      <Card className="bg-white/95 backdrop-blur">
        <CardHeader>
          <CardTitle>Jiu-Jitsu</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-lg">
          <div className="flex">
            <p>
              Nosso projeto Social Life oferece aulas de jiu-jitsu para as
              crianças da nossa comunidade.
            </p>
            <img className="imgJiu imgBorder" src={jiuJitsu3} alt="Jiu-jitsu" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/95 backdrop-blur">
        <CardContent className="prose prose-lg">
          <p>
            Hoje atendemos algumas crianças no Jiu-Jitsu com autismo e déficit
            de atenção, onde o Jiu-Jitsu na vida delas tem sido um diferencial e
            a própria família tem visto o resultado positivo.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-white/95 backdrop-blur">
        <CardContent className="prose prose-lg">
          <div className="flex">
            <p className="flex align-center justify-center">
              Nossos três alunos que foram os pioneiros do jiu-jitsu no projeto,
              tenho muito orgulho desses meus três filhos.
            </p>
            <img src={tresAlunos} alt="Três alunos" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/95 backdrop-blur">
        <CardContent className="prose prose-lg">
          <div className="flex">
            <p>
              Iniciou aos 6 anos de idade e hoje na faixa cinza e branca.
              Medalha de ouro em 2017 Copa Budô <br></br> Medalha de prata em
              2018 Campeonato Soul <br></br> Medalha de bronze em 2019 1º Copa
              W-Force.
            </p>
            <img src={kleytonCrianca} alt="Kleyton" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/95 backdrop-blur">
        <CardContent className="prose prose-lg">
          <div className="flex">
            <p>
              Iniciou aos 6 anos de idade e hoje na faixa cinza e branca.
              <br></br>
              Medalha de prata em 2017 Copa Budô <br></br> Campeã do troféu 2018
              Campeonato Soul <br></br> Medalha de ouro em 2019 1º Copa W-Force.
            </p>
            <img src={Angelyna} alt="Angelyna" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/95 backdrop-blur">
        <CardContent className="prose prose-lg">
          <div className="flex">
            <p>
              Iniciou aos 6 anos de idade e hoje na faixa cinza e branca.
              <br></br>
              Medalha de prata em 2017 Copa Budô <br></br> Campeã do troféu 2018
              Campeonato Soul <br></br> Medalha de ouro em 2019 1º Copa W-Force.
            </p>
            <img src={Angelyna} alt="Angelyna" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/95 backdrop-blur">
        <CardContent className="prose prose-lg">
          <div className="flex">
            <p>
              Iniciou aos 6 anos de idade e hoje na faixa cinza e branca.
              <br></br>
              Medalha de prata em 2017 Copa Budô <br></br> Medalha de prata em
              2018 Campeonato Soul<br></br> Medalha de ouro em 2019 1º Copa
              W-Force.
            </p>
            <img src={laura} alt="laura" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/95 backdrop-blur">
        <CardHeader>
          Crianças que venceram campeonato de extremo Jiu-Jitsu na cidade de Mar de Espanha MG
        </CardHeader>
        <CardContent className="prose prose-lg">
          <div className="flex justify-between">
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

          <div className="flex justify-between">
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

          <div className="flex justify-between">
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
        </CardContent>
      </Card>

      <Card className="bg-white/95 backdrop-blur">
        <CardHeader>
          <CardTitle>Zumba</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-lg">
          <img src={zumba} alt="Zumba" className="imgBorder" />
        </CardContent>
      </Card>

      <Card className="bg-white/95 backdrop-blur">
        <CardHeader>
          <CardTitle>Apoiadores</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-lg grid grid-cols-3">
          {parceiros.map((parceiro, index) => {
            return (
              <div key={index} className="parceiro-card">
                <a
                  href={parceiro.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={parceiro.imagem} alt={parceiro.alt} />
                </a>
                <h3 style={{ fontWeight: "bold" }}>{parceiro.nome}</h3>
              </div>
            )
          })}
        </CardContent>
      </Card>

      <Card className="bg-white/95 backdrop-blur">
        <CardHeader>
          <CardTitle>
            Contato
          </CardTitle>
        </CardHeader>
        <CardContent className="prose prose-lg">
          <p>
            Para mais informações ou para se tornar um parceiro do Projeto Life,
            entre em contato conosco pelo WhatsApp.
          </p>
          <div className="flex align-center justify-center mt-2">
            <Button
              variant="whatsapp"
              onClick={() =>
                (window.location.href = "https://wa.me/5532998281521")
              }
            >
              Fale Conosco pelo WhatsApp
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export { EsportesEParceiros };
