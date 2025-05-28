import React from "react";
import { Card } from "../components";
import "../styles/TestemunhosEContato.css";

const TestemunhosEContato = () => {
  return (
    <div className="testemunhos-contato">
      <section>
        <h2 style={{ color: "white" }}>Contato</h2>
        <Card title="Fale Conosco">
          <p style={{ color: "black" }}>
            Entre em contato conosco para saber mais ou para se tornar um
            parceiro do Projeto Life.
          </p>
          <p style={{ color: "black" }}>
            Clique no botão abaixo para nos enviar uma mensagem pelo WhatsApp!
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <a
              href="https://wa.me/5532998281521"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
            >
              Fale Conosco pelo WhatsApp
            </a>
          </div>
        </Card>
      </section>

      <div style={{ height: "100%" }} />
    </div>
  );
};

export { TestemunhosEContato };
