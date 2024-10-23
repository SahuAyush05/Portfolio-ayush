import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const ServiceCard = ({
  imgSrc,
  title,
  description,

  onReadMoreClick,
}) => {
  return (
    <div className="flex hover:scale-105 items-center gap-3 transition-transform md:flex-col md:p-6 grow justify-center px-auto py-14 hover:shadow-2xl hover:shadow-white/40 m-4 mx-auto w-full text-white rounded-[30px] border-2 border-white/30 bg-white/5 shadow-lg shadow-white/20 max-md:px-5 max-md:mt-8">
     <div className="md:flex p-3 pl-0">
     <img
        loading="lazy"
        src={imgSrc}
        alt="hi"
        className="aspect-square w-[80px]"
      />
      <div className="mt-5 text-lg md:text-xl max-md:text-3xl">{title}</div>
     
     </div>
     <div className="md:flex"> <div className="mt-2 text-sm md:text-base">{description}</div>
      <div className="flex gap-4 pr-9 mt-5 text-sm max-md:pr-5">
        <div className="my-auto">
         
        </div>
      </div></div>
    </div>
  );
};

export default ServiceCard;
