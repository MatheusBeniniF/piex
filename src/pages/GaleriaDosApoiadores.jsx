import React from "react";
import "../styles/Eventos.css";
import galeria1 from "../img/galeria1.jpeg";
import galeria2 from "../img/galeria2.jpeg";
import galeria3 from "../img/galeria3.jpeg";
import galeria4 from "../img/galeria4.jpeg";

export function GaleriaDosApoiadores() {
    const galeriaImagens = [
        [galeria1, galeria2],
        [galeria3, galeria4]
    ];

    return (
        <div className="eventos">
            <section className="evento-section">
                <div className="section-header">
                    <h2>Galeria dos Apoiadores</h2>
                </div>

                <div className="info-card">
                    <div className="info-text">
                        <label className="infoTexto">
                            Nossos apoiadores são fundamentais para o sucesso do Projeto Life.
                            Graças ao apoio dessas pessoas e organizações, conseguimos impactar
                            positivamente a vida de muitas crianças e famílias em nossa comunidade.
                            Esta galeria é uma pequena homenagem a todos que acreditam em nosso trabalho.
                        </label>
                    </div>
                </div>

                <div className="vencedores-grid">
                    {galeriaImagens.map((img, index) => (
                        <div className="vencedores-row" key={`img-${index}`}>
                            {img.map((imagem, indexImagem) => (
                                <div className="imgVencedor" key={`galeria-${index}-${indexImagem}`}>
                                    <img src={imagem} alt={`Apoiador ${index * 2 + indexImagem + 1}`} />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}