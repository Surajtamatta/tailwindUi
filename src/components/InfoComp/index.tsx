import React, { useState } from "react";
import { BsQuestionCircle } from "react-icons/bs";



const contentData = [
    {
      key: "about",
      title: "About Me",
      content: (
        <div className="text-justify flex flex-col">
          Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now. 
          <span className="text-justify in mt-3">
            I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters—Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is...
          </span>
        </div>
      ),
    },
    {
      key: "recommended",
      title: "Recommended",
      content: `Here are some recommendations based on your interests and past purchases...`,
    },
    {
      key: "experience",
      title: "Experience",
      content: `I have 10 years of experience in sales, specializing in SaaS products. Throughout my career, I have worked with numerous clients to optimize their workflow and boost their sales...`,
    },
  ];


interface Data {
    key: string;
    title: string;
    content: string;
}[]


const InfoComp = () => {
    const [activeContent, setActiveContent] = useState(contentData[0].key);
    const handleButtonClick = (key:any) => {
        setActiveContent(key);
      };

      const getCurrentContent = (): string | React.ReactElement => {
        
        const currentItem = contentData.find((item) => item.key === activeContent);
        return currentItem?.content || "Content not found";
      };

    const boxes = Array(6).fill(null);
  return (
    <div className="flex w-full p-3 gap-3 max-h-80 bg-zinc-700 rounded-xl shadow-contentshadow " >
        <div className="grid grid-rows-2  ">
            <BsQuestionCircle size={22} />
            <div className="grid grid-cols-2 gap-0.5 w-5 h-5">
            {boxes.map((_, index) => (
                <div key={index} className="h-2 neutral-600 bg-slate-500"></div>
            ))}
            </div>
        </div>


        <div className="flex flex-col justify-start align-top w-full">
           <div className="flex mb-4 bg-neutral-900 p-2 rounded-3xl justify-between">
            {contentData.map((item) => (
            <button
            key={item.key}
            onClick={() => handleButtonClick(item.key)}
            className={`px-4 py-2 mr-2 rounded-2xl text-nowrap ${
              activeContent === item.key ? "bg-slate-600 text-white shadow-boxshadow " : "bg-transparent text-gray-400"
            }`}
            >
            {item.title}
            </button>
            ))}
          </div>
         <div className="flex-1 overflow-y-auto snap-y snap-mandatory">
          <div className="text-justify snap-start">{getCurrentContent()}</div>
          </div>
        </div>

    </div>
  )
};

export default InfoComp;
