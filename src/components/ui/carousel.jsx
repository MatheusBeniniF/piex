import React, { useCallback, useEffect } from "react";

import { cn } from "../../lib/utils";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

const Carousel = React.forwardRef(({ className, children, ...props }, ref) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slides = React.Children.toArray(children);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div
      ref={ref}
      className={cn("relative w-full overflow-hidden rounded-xl", className)}
      {...props}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
        aria-label="Previous slide"
      >
        <ArrowLeftIcon className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
        aria-label="Next slide"
      >
        <ArrowRightIcon className="h-6 w-6" />
      </button>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
});
Carousel.displayName = "Carousel";

const CarouselItem = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("min-w-full shrink-0", className)} {...props} />
));
CarouselItem.displayName = "CarouselItem";

export { Carousel, CarouselItem };
