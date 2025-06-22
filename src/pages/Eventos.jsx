import React from "react";
import vencedor1 from "../img/Vencedor_foto1.jpg";
import vencedor2 from "../img/Vencedor_foto2.jpg";
import vencedor3 from "../img/Vencedor_foto3.jpg";
import vencedor4 from "../img/Vencedor_foto4.jpg";
import vencedor5 from "../img/Vencedor_foto5.jpg";
import vencedor6 from "../img/Vencedor_foto6.jpg";
import { Card, CardContent, CardHeader } from "../components/ui/card"

export function Eventos() {
    return (
        <div className="container mx-auto px-4 py-8">
            <Card className="bg-white/95 backdrop-blur">
                <CardHeader>
                    Crianças que venceram campeonato de extremo Jiu-Jitsu na cidade de Mar de Espanha MG
                </CardHeader>
                <CardContent className="prose prose-lg">
                    <div className="flex justify-between">
                        <div className="imgVencedor">
                            <img src={vencedor1}
                                className="imgBorder"
                                alt="Vencedor(a)"
                            />
                        </div>
                        <div className="imgVencedor">
                            <img src={vencedor2}
                                className="imgBorder"
                                alt="Vencedor(a)"
                            />
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <div className="imgVencedor">
                            <img src={vencedor3}
                                className="imgBorder"
                                alt="Vencedor(a)"
                            />
                        </div>
                        <div className="imgVencedor">
                            <img src={vencedor4}
                                className="imgBorder"
                                alt="Vencedor(a)"
                            />
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <div className="imgVencedor">
                            <img src={vencedor5}
                                className="imgBorder"
                                alt="Vencedor(a)"
                            />
                        </div>
                        <div className="imgVencedor">
                            <img src={vencedor6}
                                className="imgBorder"
                                alt="Vencedor(a)"
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}