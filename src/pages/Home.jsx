import React from "react"
import { HomeCarousel } from "../components/HomeCarousel"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"

const Home = () => {
  const testimonials = [
    {
      name: "Joelma",
      role: "Mãe da Laura e do João Miguel",
      quote: "A de primeiro assim mais por conta de defesa mesmo né? Por ser menina e tudo. Mas depois com o tempo meio que virou uma família mesmo.",
    },
    {
      name: "Erica",
      role: "Mãe da Raiane",
      quote: "Nossa me sinto muito feliz, assim é... nossa é uma, é uma coisa assim, muito importante que aconteceu na vida dela, porque ela era uma menina assim muito acanhada. E hoje em dia não, hoje em dia você vê que ela já é mais extrovertida, ela ri, ela brinca. O Jiu-Jitsu para ela foi uma, um, um destrave né? Uma virada de chave como fala né? Para ela, para ela poder ficar mais ativa, mais comunicativa, ela era bem acanhada.",
    },
    {
      name: "Laís",
      role: "Mãe da Helena",
      quote: "Eu agradeço muito por ter, é ela estar tendo essa oportunidade de estar participando e as vezes assim... É... E questão disso em questão de tipo assim eu não tenho nada a reclamar assim, as vezes poderia ter mais coisas as vezes, mas assim é eu sei como é difícil também né? Uma pessoa fazer acontecer.",
    },
    {
      name: "Vanessa",
      role: "Mãe da Milena, Geovana e Matheus",
      quote: "Olha o projeto é muito bom, é tem tirado é ajuda as crianças a não se perderem né? Nas ruas né? Que acaba que tem as atividades escolares de dia e a noite já tem uma ocupação, como aqui também são quatro dias da semana, que é no sábado tem a parte da manhã. Então ocupa o tempo deles, cansa eles, não deixando que eles se percam nesse mundo.",
    },
    {
      name: "Cemar",
      role: "Pai",
      quote: "Não só as crianças né? A comunidade em si. Porque Kleyton aqui ele não ajuda só as crianças, ele ajuda quem precisa de verdade, a gente está aqui vendo isso, entendeu? Então é isso que a gente pede, quem puder ajudar pode vir, sempre será bem-vindo.",
    },
    {
      name: "Milena",
      role: "Participante do projeto",
      quote: "É tipo assim quando a gente não vem a gente sente muita falta daqui eu quando eu cheguei eu tive que ficar um tempo sem vir por conta da minha clavícula né? Que eu acabei machucando e nesses meses eu tipo assim eu vinha só para ver, porque eu tipo é... Era uma coisa que eu gostava mesmo, então quando eu vinha para ver eu ficava doida para eu voltar a treinar. E agora que eu voltei a treinar tipo é já faz parte da minha rotina mesmo né?",
    },
    {
      name: "Suelen",
      role: "Mãe do Gabriel",
      quote: "Percebi é... No início o Gabriel era muito acanhado, ele principalmente ao cumprimentar as pessoas ele sempre cumprimentava de cabeça baixa, é... Ele é muito tímido, então isso desenvolveu bastante nele.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <HomeCarousel />
      
      <div className="mt-12 space-y-8">
        <Card className="bg-white/95 backdrop-blur">
          <CardHeader>
            <CardTitle>Bem-vindo à Associação Life Projetos Sociais</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg">
            <p>
              Essa iniciativa consiste na união de esforços de todos os moradores de
              determinado bairro que, junto com a Polícia Militar, passam a fazer o
              monitoramento daquela redondeza, comunicando aos demais e à polícia
              qualquer suspeita, por meios de comunicação previamente definidos.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Missão</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Contribuir de forma diferenciada para o desenvolvimento do ser humano
                em sua totalidade estabelecendo assim maior justiça social através da
                formação integral de crianças e adolescentes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Valores</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Acreditamos que se no presente educarmos as crianças com amor e
                dedicação, no futuro teremos cidadãos de bem e uma sociedade mais
                justa.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-10">
          Depoimentos
        </h2>
        <p className="mt-4 text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Confira o que os pais e participantes do Projeto Life têm a dizer sobre o impacto em suas vidas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col justify-between h-full bg-white transition-transform transform hover:scale-105 hover:shadow-xl rounded-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800">{testimonial.name}</CardTitle>
                <CardDescription className="text-gray-500">{testimonial.role}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 text-right">
          <CardContent className="p-6">
            <blockquote className="italic text-lg">
              "Virtude sem caridade não passa de nome"
            </blockquote>
            <cite className="block mt-2 text-sm">— ISAAC NEWTON</cite>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export { Home }