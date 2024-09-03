import React, { useEffect, useState } from "react";
import Image from "next/image";

interface SliderProps {
  imagesdata: string[];
  autoSlideInterval?: number;
  currentIndex?: number; // Optional prop for current slide index
  onNext?: () => void;   // Callback for next button
  onPrev?: () => void; 
  autoplay?:boolean;  // Callback for previous button
}

const Slider: React.FC<SliderProps> = ({
  imagesdata,
  autoSlideInterval = 3000,
  currentIndex = 0,
  onNext,
  onPrev,
  autoplay
}) => {
  const [activeIndex, setActiveIndex] = useState(currentIndex);
   
  useEffect(() => {
    if (imagesdata.length > 1) {
      const slideTimer = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % imagesdata.length);
      }, autoSlideInterval);
      return () => clearInterval(slideTimer);
    }
  }, [imagesdata.length, autoSlideInterval]);

  useEffect(() => {
    setActiveIndex(currentIndex);
  }, [currentIndex]);

  const handleNext = () => {
    if (onNext) onNext();
  };

  const handlePrev = () => {
    if (onPrev) onPrev();
  };

  const calculateTranslateX = () => {
    return -(activeIndex * (100 / 3));
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform"
          style={{ transform: `translateX(${calculateTranslateX()}%)` }}
        >
          {imagesdata.concat(imagesdata.slice(0, 2)).map((image, index) => (
            <div key={index} className="min-w-[33.33%] p-1.5 aspect-square">
              <div className="w-full h-full overflow-hidden rounded-2xl">
                <Image
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-full"
                  layout="responsive"
                  objectFit="cover"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
