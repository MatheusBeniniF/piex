import React from "react"
import { Carousel, CarouselItem } from "./ui/carousel"
import Carousel1 from "../img/Carousel1.jpeg"
import Carousel2 from "../img/Carousel2.jpeg"
import Carousel3 from "../img/Carousel3.jpeg"
import Carousel4 from "../img/Carousel4.jpeg"
import Carousel5 from "../img/Carousel5.jpeg"
import Carousel6 from "../img/Graduacao.jpeg"
import Carousel7 from "../img/Graducao2.jpeg"

const images = [
  { src: Carousel1, alt: "Slide 1" },
  { src: Carousel2, alt: "Slide 2" },
  { src: Carousel3, alt: "Slide 3" },
  { src: Carousel4, alt: "Slide 4" },
  { src: Carousel5, alt: "Slide 5" },
  { src: Carousel6, alt: "Slide 6" },
  { src: Carousel7, alt: "Slide 7" },
]

export function HomeCarousel() {
  return (
    <Carousel className="w-full max-w-4xl mx-auto">
      {images.map((image, index) => (
        <CarouselItem key={index}>
          <img
            src={image.src}
            alt={image.alt}
            className="h-[400px] w-full object-cover"
          />
        </CarouselItem>
      ))}
    </Carousel>
  )
}