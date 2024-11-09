import CestaBasica from "../img/CestaBasica.jpeg";
import Medicamento from "../img/medicamento-generico.jpeg";

export const ServicosOferecidos = () => {
  return (
    <section id="sobre-nos" className="sobre-nos">
      <h1 style={{textAlign:'center',fontSize:'50px'}}>Serviços oferecidos</h1>
      <div className="sobre-content">
      <div className="imagem-sobre">
          <img src={CestaBasica} style={{width: '75%'}} alt="Sobre nós" />
        </div>
        <div className="texto-sobre">
          <p style={{fontSize:'23px'}}>
          Cestas básicas, marcação de consultas, cirurgias, fisioterapias, atendimentos jurídicos, psicológicos, encaminhamento para creches e distribuição de remédios.
          </p>
        </div>
      </div>
      <div className="sobre-content">
      <div className="texto-sobre">
          <p style={{fontSize:'23px'}}>
          Farmácia compartilhada:
          onde pessoas que não fazem mais uso de certas medicações, doam para o projeto, este encaminha para os assistidos pelo mesmo, para manterem seus tratamentos diários.
          </p>
        </div>
        <div className="imagem-sobre">
          <img  src={Medicamento} style={{width: '73vh'}} alt="Sobre nós" />
        </div>
        </div>
    </section>
  );
};
