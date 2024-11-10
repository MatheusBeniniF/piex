const Header = () => {
  return (
    <header className="header">
      <h1 style={{ fontSize: "50px" }}>
        Bem-vindo à Associação Life Projetos Sociais
      </h1>
      <p style={{ fontSize: "23px" }}>
        Essa iniciativa consiste na união de esforços de todos os moradores de
        determinado bairro que, junto com a Polícia Militar, passam a fazer o
        monitoramento daquela redondeza, comunicando aos demais e à polícia
        qualquer suspeita, por meios de comunicação previamente definidos
      </p>
      <p style={{ fontSize: "23px" }}>
        A rede de vizinhos protegidos e, portanto, uma parceria que a Polícia
        Militar disponibiliza à comunidade para que haja um trabalho preventivo
        no local de residência de determinados moradores.{" "}
      </p>
      <p style={{ fontSize: "23px" }}>
        Por meio de alguns tipos de alerta, como apitos, senha e contrassenha,
        meios eletrônicos, lanternas, câmeras de segurança, entre outros, os
        habitantes do bairro avisam a Polícia Militar sobre pessoas ou veículos
        em atitudes suspeitas e, desse modo, ajudam a atuação preventiva.
      </p>
      <p style={{ fontSize: "23px" }}>
        Traga sua empresa para a{" "}
        <span style={{ fontWeight: "bold" }}>Life Projetos Sociais</span> e,seja
        nosso parceiro,juntos podemos construir o futuro dessas crianças.
      </p>
    </header>
  );
};

export { Header };
