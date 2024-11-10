import Vianna from "../img/vianna-logo-branca.png";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 footer-column">
            <label>
              Rua Antônio da Rocha Lima, 84 - Santa Efigênia<br />
              CEP 36032-420 - Juiz de Fora - MG
            </label>
          </div>
          <div className="col-md-4 footer-column">
            <label>
              Telefone: (32) 99828-1521<br />
              E-mail: lifeprojetossociais@outlook.com<br />
              Facebook: lifeprojetossociais<br />
              Cora SCD - 403<br />
              Ag. 0001 - С/С 1429271-9<br />
              CNPJ 29.666.808/0001-94
            </label>
          </div>
          <div className="col-md-4 footer-column">
            <img src={Vianna} alt="vianna" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
