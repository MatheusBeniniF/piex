import React from "react";
import { Card } from "../components";
import "../styles/TestemunhosEContato.css";

const TestemunhosEContato = () => {
  return (
    <div className="testemunhos-contato">
      <section>
        <h2>Testemunhos</h2>
        <Card title="O que dizem sobre nós">
          <blockquote>
            <p>
              "O Jiu-Jitsu mudou a vida do meu filho. Ele é mais disciplinado e
              seguro de si."
            </p>
            <footer>— Maria, mãe de aluno</footer>
          </blockquote>
          <blockquote>
            <p>
              "Recebemos suporte e carinho em momentos muito difíceis. Agradeço
              ao Projeto Life."
            </p>
            <footer>— João, pai de família atendida</footer>
          </blockquote>
        </Card>
      </section>

      <section>
        <h2>Contato</h2>
        <Card title="Fale Conosco">
          <p>
            Entre em contato conosco para saber mais ou para se tornar um
            parceiro do Projeto Life.
          </p>
          <p>
            Clique no botão abaixo para nos enviar uma mensagem pelo WhatsApp!
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button
              onClick={() =>
                (window.location.href = "https://wa.me/5532998281521")
              }
              target="_blank"
              style={{
                backgroundColor: "#25D366",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Fale Conosco pelo WhatsApp
            </button>
          </div>
        </Card>
      </section>
    </div>
  );
};

export { TestemunhosEContato };
