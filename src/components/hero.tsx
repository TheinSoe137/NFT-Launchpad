import React from "react";
import Image from "next/image";

import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import  Minter from "@/minting_card/src/components/Minter.js"
// import "@/minting_card/src/styles/styles.css";

export function Hero() {
  return (
    <BackgroundGradientAnimation >
   
      <div className="absolute z-50 top-0 left-1/2  -translate-x-1/2 flex flex-col i text-white font-bold px-4  text-3xl text-center md:text-4xl lg:text-7xl mt-4 w-[90%] max-w-[1200px]">
        <h3 className="bg-clip-text items-center justify-center text-transparent drop-shadow-2xl  py-10 bg-gradient-to-b from-white/80 to-white/20">
         Coronad
        </h3>
     <div className="flex flex-row items-center justify-center gap-2 md:gap-6 w-full max-w-4xl mx-auto p-4 ">
     <div className="max-w-xs w-full  group/card sm:w-1/2 md:w-3/4 lg:w-full">
      
        <div className="flex flex-row items-center  justify-center space-x-4 z-10">
          <Image 
            height="1000"
            width="1000"
            alt="Avatar"
            src="/coronad-nft.png"
            className="h-250 w-250 sm:w-1/2 md:w-3/4 lg:w-full rounded-lg object-cover"
          />
        
        </div>
     
    </div>
          
          <Minter/>
       </div>
     </div>
    </BackgroundGradientAnimation>
  );
}
