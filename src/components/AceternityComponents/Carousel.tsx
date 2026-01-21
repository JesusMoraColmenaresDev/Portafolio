import { FaArrowRight } from "react-icons/fa";
import { useState, useId } from "react";

interface CarouselProps {
  images: string[];
}

export function Carousel({ images }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const id = useId();

  const handlePreviousClick = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const handleNextClick = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <div
      className="flex flex-col pb-8 gap-4 overflow-hidden w-170 max-md:w-80"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${current * (100 / images.length)}%)`,
        }}
      >
        {images.map((src, index) => (
          <li
            key={index}
            className="flex flex-1 items-center justify-center relative "
          >
            <img
              className="object-contain rounded-2xl shadow-lg " 
              src={src}
              alt={`slide-${index}`}
              loading="eager"
              decoding="sync"
              style={{ opacity: current === index ? 1 : 0.5, transition: "opacity 0.5s" }}
            />
          </li>
        ))}
      </ul>

      <div className=" flex justify-center w-full">
        <button
          className="w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 rotate-180"
          title="Anterior"
          onClick={handlePreviousClick}
        >
          <FaArrowRight className="text-neutral-600 dark:text-neutral-200" />
        </button>
        <button
          className="w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200"
          title="Siguiente"
          onClick={handleNextClick}
        >
          <FaArrowRight className="text-neutral-600 dark:text-neutral-200" />
        </button>
      </div>
    </div>
  );
}