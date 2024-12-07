const Header = () => {
  return (
    <header className="header">
      <h1 style={{color:"white"}}>Bem-vindo à Associação Life Projetos Sociais</h1>
      <p>
        Essa iniciativa consiste na união de esforços de todos os moradores de
        determinado bairro que, junto com a Polícia Militar, passam a fazer o
        monitoramento daquela redondeza, comunicando aos demais e à polícia
        qualquer suspeita, por meios de comunicação previamente definidos
      </p>
      <p>
        A rede de vizinhos protegidos e, portanto, uma parceria que a Polícia
        Militar disponibiliza à comunidade para que haja um trabalho preventivo
        no local de residência de determinados moradores.
      </p>
      <p>
        Por meio de alguns tipos de alerta, como apitos, senha e contrassenha,
        meios eletrônicos, lanternas, câmeras de segurança, entre outros, os
        habitantes do bairro avisam a Polícia Militar sobre pessoas ou veículos
        em atitudes suspeitas e, desse modo, ajudam a atuação preventiva.
      </p>
      <p>
        Traga sua empresa para a{" "}
        <span className="highlight">Life Projetos Sociais</span> e,seja nosso
        parceiro,juntos podemos construir o futuro dessas crianças.
      </p>

      <div
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "5rem",
        }}
      >
        <h1>Missão</h1>
        <p style={{ color: "black" }}>
          Contribuir de forma diferenciada para o desenvolvimento do ser humano
          em sua totalidade estabelecendo assim maior justiça social através da
          formação integral de crianças e adolescentes ajudando-os a se sentirem
          pessoas capazes de transformarem a sociedade em um lugar melhor.
        </p>

        <h1>Valores</h1>
        <p style={{ color: "black" }}>
          Acreditamos que se no presente educarmos as crianças com amor e
          dedicação, no futuro teremos cidadãos de bem e uma sociedade mais
          justa.
        </p>
      </div>
      <div
        style={{ textAlign: "right", marginTop: "15vh" }}
      >
        <h2 style={{ fontStyle: "italic", color: "black" }}>
          "Virtude sem caridade não passa de nome"
        </h2>
        <h5>ISAAC NEWTON</h5>
      </div>
    </header>
  );
};

export { Header };
