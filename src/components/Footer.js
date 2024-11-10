import Vianna from "../img/vianna-logo-branca.png";

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: "black" }}>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-md-4"
            style={{ display: "flex", alignItems: "center" }}
          >
            <label>
              Rua Antônio da Rocha Lima, 84 - Santa Efigênia<br></br>
              CEP 36032-420 - Juiz de Fora - MG
            </label>
          </div>
          <div className="col-md-4">
            <label>
              Telefone: (32) 99828-1521<br></br>
              E-mail: lifeprojetossociais@outlook.com<br></br>
              Facebook: lifeprojetossociais<br></br>
              Cora SCD - 403<br></br>
              Ag. 0001 - С/С 1429271-9<br></br>
              CNPJ 29.666.808/0001-94
            </label>
          </div>
          <div
            className="col-md-4"
            style={{
              justifyContent: "end",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={Vianna} alt="vianna"></img>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
