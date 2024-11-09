import Kleyton from "../img/Kleyton.jpeg";


export const SobreNos = () => {
  return (
    <section id="sobre-nos" className="sobre-nos">
      <h1 style={{textAlign:'center',fontSize:'50px'}}>Sobre Nós</h1>
      <div className="sobre-content">
        <div className="texto-sobre">
          <p style={{fontSize:'23px'}}>
          A associação Life Projetos Sociais, existe há 15 anos, criada por Kleyton Oliveira, sendo que o mesmo está à frente do projeto desde sua implantação.
          Atualmente a Associação Life Projetos Sociais, é registrada e localizada no bairro Santa Efigênia, Juiz de Fora/MG, com sede provisória na rua Antônio da Rocha Lima, número 84, onde atendemos diversas comunidades sitiadas.
          </p>
        </div>
        <div className="imagem-sobre">
          <img src={Kleyton} style={{width: '61vh'}} alt="Sobre nós" />
        </div>
      </div>
    </section>
  );
};
