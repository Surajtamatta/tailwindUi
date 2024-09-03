import React, { useState } from "react";
import { BsQuestionCircle } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "../Slider";
import { BiLoaderAlt } from "react-icons/bi";
// Import your local images
import img from "../../images/image.png";


// Define the initial images
const initialImages = [img, img, img];

const Gallery: React.FC = () => {
  const boxes = Array(6).fill(null);
  const [imagesData, setImagesData] = useState<any[]>(initialImages);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const nextSlide = () => {
    if (currentIndex < imagesData.length - 3) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true)
    const files = event.target.files;
    if (files) {
      const newImages = Array.from(files).map((file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        return new Promise<string>((resolve) => {
          reader.onload = () => {
            resolve(reader.result as string);
          };
        });
      });

      Promise.all(newImages).then((images) => {
        setImagesData((prevImages) => [...prevImages, ...images]);
      });
    }
    setLoading(false)
  };

  return (
    <div className="flex zinc-700 p-4 gap-3 bg-zinc-700 shadow-contentshadow rounded-xl w-full">
      <div className="grid grid-rows-2">
        <BsQuestionCircle size={22} />
        <div className="grid grid-cols-2 gap-0.5 w-5 h-5">
          {boxes.map((_, index) => (
            <div key={index} className="h-2 neutral-600 bg-slate-500"></div>
          ))}
        </div>
      </div>

      <div className="flex flex-col w-full">
        <div className="flex mb-6 justify-between items-center">
          <button className="bg-neutral-900 text-white rounded-2xl px-4 py-2">Gallery</button>
          <div className="flex gap-2">
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="hidden" // Hide the input element
              id="fileUpload"
            />
            <label
              htmlFor="fileUpload"
              className="flex justify-center items-center text-white p-2 shadow-buttonshadow2 rounded-full bg-zinc-700 cursor-pointer"
            >
              {loading ? (<><BiLoaderAlt className="animate-spin h-5 w-5"/> uploading...</>)
              :
               <><GoPlus className="h-5 w-5" /> Add Image</>
              }
            </label>
            <button
              className="flex justify-center items-center text-white p-2 shadow-arrowshadow rounded-full bg-zinc-700 size-11 bg-arrow-gradient"
              onClick={prevSlide}
            >
              <FaArrowLeft />
            </button>
            <button
              className="flex justify-center items-center text-white p-2 shadow-arrowshadow rounded-full bg-zinc-700 size-11 bg-arrow-gradient"
              onClick={nextSlide}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="w-full">
          <Slider imagesdata={imagesData} currentIndex={currentIndex} onNext={nextSlide} onPrev={prevSlide}/>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
