import React from "react"
import { HomeCarousel } from "../components/HomeCarousel"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"

const Home = () => {
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