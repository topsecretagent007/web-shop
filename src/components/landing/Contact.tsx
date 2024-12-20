"use client"
import React, { useContext } from "react";
import Image from "next/image";
import GMImage from "../../../public/assest/gm_dog (1).png"
import DarkGMImage from "../../../public/assest/dark_gm_dog (1).png"
import SocialLinksComponent from "@/config/ComponentData";
import UserContext from "@/contexts/usercontext";
export default function Contact() {
  const { modeState } = useContext<any>(UserContext);

  return (
    <div id="connect" className={`${modeState ? "bg-background_bg-100" : "bg-background_bg-800"} w-full h-[450px] lg2:h-[600px] rounded-xl relative `}>
      <div className="container">
        <div className="w-full absolute flex flex-row h-full bottom-0 max-w-[1380px] gap-2">
          <Image src={modeState ? GMImage : DarkGMImage} alt="GMImage" className="absolute lg2:relative bottom-0 xs:left-[10%] sm2:left-[25%] lg2:left-0 lg2:flex w-full sm2:w-[calc(100%-20%)] lg2:w-2/3 max-w-[480px] lg2:max-w-[680px] mx-auto z-10" />
          <div className="w-full flex flex-col gap-2 items-center lg2:items-start justify-start lg2:justify-center pt-16 lg2:pt-0 px-3 z-20">
            <div className="text-white text-[28px] 2xs:text-[32px] xs:text-[40px] sm:text-[48px] md:text-[56px] 1.5xl:text-[72px] font-extrabold text-outline">
              Socials
            </div>
            <div className="text-[18px] xs:text-[22px] md:text-2xl font-bold pt-5 pb-32 lg2:pb-0 text-center lg2:text-start text-outline3 text-white">
              JOIN THE MOTHER OF DOGS COMMUNITY
            </div>
            <div className={`${modeState ? "text-text_color-100" : "text-white"} w-full  font-semibold py-4`}>
              <SocialLinksComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
