"use client"
import React, { useContext } from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { SocksAdventuresImage1, SocksAdventuresImage2 } from "@/config/TextData";
import UserContext from "@/contexts/usercontext";

export default function SocksAdventures() {
  const { modeState } = useContext<any>(UserContext);

  return (
    <div id="socksAdventures" className={`${modeState ? "bg-background_bg-500" : "bg-background_bg-800"} w-full h-[540px] 2xs:h-[640px] rounded-xl items-center justify-center py-12 object-cover overflow-hidden relative`}>
      <div className="container">
        <video id="banner-video" autoPlay muted playsInline loop className="absolute left-0 bottom-0 w-36 md:w-52 lg2:w-72 z-10 md:z-20">
          <source src="./assest/sticker/sticker (9).webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="flex flex-col lg2:flex-row h-[444px] 2xs:h-[544px] max-w-[1024px] gap-4 items-center relative justify-center mx-auto my-auto z-10">
          <div className="md2:w-2/3 gap-8 flex flex-col items-center justify-center">
            <div className="w-full gap-8 flex flex-wrap justify-center lg2:justify-start items-center">
              {SocksAdventuresImage1.map((item: any, index: number) => {
                return (
                  <div key={index} className="w-[100px] h-[100px] 2xs:w-[155px] 2xs:h-[155px] 0.5xs:w-[175px] 0.5xs:h-[175px] shadow-text_color-100 shadow-[8px_8px_0px_0px_rgba(109,40,217)] rounded-lg object-cover overflow-hidden">
                    <Image src={item.url} alt={`${item.alt}`} className="" />
                  </div>
                )
              }
              )}
            </div>
            <div className="w-full gap-8 flex flex-wrap justify-center lg2:justify-start">
              {SocksAdventuresImage2.map((item: any, index: number) => {
                return (
                  <div key={index} className="hidden lg2:flex w-[175px] h-[175px] shadow-text_color-100 shadow-[8px_8px_0px_0px_rgba(109,40,217)] rounded-lg object-cover overflow-hidden">
                    <Image src={item.url} alt={`${item.alt}`} className="" />
                  </div>
                )
              }
              )}
            </div>
          </div>
          <div className="w-full flex flex-col gap-8 justify-center text-center items-center px-4">
            <div className="text-white text-[28px] 2xs:text-[32px] xs:text-[40px] sm:text-[48px] md:text-[56px] 1.5xl:text-[60px] font-extrabold text-outline text-center">
              Socks Adventures
            </div>
            <div className={`${modeState ? "text-text_color-100" : "text-white"} text-[14px] xs:text-[18px] md:text-[22px] font-medium`}>
              Where is Socks IRL? You decide! Take a Socks adventure and Spread The Love to share your support of saving dogs with the rest of the world.
            </div>
            <div className='flex flex-row w-[200px] justify-center cursor-pointer border-[2px] border-text_color-100 rounded-full shadow-[4px_4px_0px_0px] shadow-text_color-100 bg-button_bg-300'>
              <p className='text-text_color-100 flex flex-row gap-3 font-bold py-2 px-4 items-center'>Explore <GoArrowUpRight className="text-2xl" /></p>
            </div>
          </div>
        </div>
      </div>
      {modeState ?
        <div className="w-full flex flex-row absolute bottom-0 h-[68px] object-cover" style={{ backgroundImage: "url('./assest/green.png')" }}>
        </div>
        :
        <div className="w-full flex flex-row absolute bottom-0 h-[68px] object-cover" style={{ backgroundImage: "url('./assest/dark-green.png')" }}>
        </div>
      }
    </div>
  );
};
