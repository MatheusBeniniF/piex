import React from "react";
import { Card } from "../components";

const TestemunhosEContato = () => {
  return (
    <div>
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
          <form>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Mensagem:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Enviar</button>
          </form>
        </Card>
      </section>
    </div>
  );
};

export { TestemunhosEContato };
