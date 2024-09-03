import Gallery from "@/components/Gallery";
import InfoComp from "@/components/InfoComp";
import React from "react";


const Hero = () => {
  return (
    <div 
      className={`grid grid-cols gap-6 h-full w-full max-h-[80vh] max-[900px]:grid-rows-3 max-[900px]:grid-cols-none`}
    >
      <div className="h-full flex rounded-3xl border-2 border-blue-300 max-h-full bg-zinc-600 p-4">
  
      </div>

      <div className="flex flex-col gap-3 justify-start items-center ">
        <InfoComp/>
        <div className="w-10/12 h-2 bg-gradient-divider shadow-contentshadow rounded-full"/>
        <Gallery/>
        <div className="w-10/12 h-2 bg-gradient-divider shadow-contentshadow rounded-full"/>
        <div/>
      </div>
    </div>
  );
};

export default Hero;

