import React from "react";
import Image from "next/image";

import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";


export function Hero() {
  return (
    <BackgroundGradientAnimation >
   
      <div className="absolute z-50 top-0 left-1/2  -translate-x-1/2 flex flex-col i text-white font-bold px-4  text-3xl text-center md:text-4xl lg:text-7xl mt-4 w-[90%] max-w-[1200px]">
        <h3 className="bg-clip-text items-center justify-center text-transparent drop-shadow-2xl  py-5 bg-gradient-to-b from-white/80 to-white/20">
         Coronad
        </h3>
     <div className="flex flex-col items-center justify-center gap-2 md:gap-6  mx-auto p-4 ">
     <div className="max-w-xs w-full  group/card sm:w-1/2 md:w-3/4 lg:w-full">
      
        <div className="flex flex-row items-center  justify-center space-x-4 z-10">
          <Image 
            height="1000"
            width="1000"
            alt="Avatar"
            src="/coronad-nft.png"
            className="h-250 w-250  w-1/2 sm:w-1/2 md:w-3/4 lg:w-3/4 rounded-lg object-cover"
          />
        
        </div>
     
    </div>
          
    
          <div>
          <div className="max-w-2xl text-sm md:text-2xl lg:text-2xl mt-5 text-center dark:text-neutral-200" style={{ color: "#d4d4d4" }}>
            
            <p className="bg-clip-text text-transparent drop-shadow-2xl
             bg-gradient-to-b from-white/80 to-white/20">
              We've sold out! You can still buy and trade the Scroll of Coronation
              on marketplaces such as MagicEden.
            </p>
          </div>
          <div className="mt-5">
        <a
          
          className=" max-w-2xl text-sm md:text-2xl mt-5 text-center dark:text-neutral-200" style={{ color: "#d4d4d4" }} 
          target="_blank"
          href="https://magiceden.io/collections/monad-testnet/0x4fcf36ac3d46ef5c3f91b8e3714c9bfdb46d63a3"
        >
          Trade on MagicEden
        </a>
        </div>
        
          </div>
       </div>
     </div>
    </BackgroundGradientAnimation>
  );
}
