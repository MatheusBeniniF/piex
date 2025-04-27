import React from "react";
import "../styles/Eventos.css";
import vencedor1 from "../img/Vencedor_foto1.jpg";
import vencedor2 from "../img/Vencedor_foto2.jpg";
import vencedor3 from "../img/Vencedor_foto3.jpg";
import vencedor4 from "../img/Vencedor_foto4.jpg";
import vencedor5 from "../img/Vencedor_foto5.jpg";
import vencedor6 from "../img/Vencedor_foto6.jpg";

export function Eventos() {
    const vencedoresImagens = [
        [vencedor1, vencedor2],
        [vencedor3, vencedor4],
        [vencedor5, vencedor6]
    ];

    return (
        <div className="eventos">
            <section className="evento-section">
                <div className="section-header">
                    <h2>Crianças que venceram campeonato de extremo Jiu-Jitsu na cidade de Mar de Espanha MG</h2>
                </div>

                <div className="vencedores-grid">
                    {vencedoresImagens.map((img, index) => (
                        <div className="vencedores-row" key={`img-${index}`}>
                            {img.map((imagem, indexImagem) => (
                                <div className="imgVencedor" key={`vencedor-${index}-${indexImagem}`}>
                                    <img src={imagem} alt={`Vencedor(a) ${index * 2 + indexImagem + 1}`} />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}