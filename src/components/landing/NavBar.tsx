"use client"
import React, { useContext } from "react";
import Image from "next/image";
import Dogs from "../../../public/assest/5dogs.png"
import { GoArrowUpRight } from "react-icons/go";
import UserContext from "@/contexts/usercontext";

export default function NavBar() {
  const { modeState } = useContext<any>(UserContext);

  return (
    <div id="home" className={`w-full h-full rounded-xl bg-cover bg-top object-cover`}
      style={modeState ? { backgroundImage: "url('./assest/home-bg.webp')" } : { backgroundImage: "url('./assest/home-bg-dark.png')" }}
    >
      <div className="container">
        <div className="flex flex-col h-full bottom-0 max-w-[1400px] gap-2 pt-32 lg2:pt-40 px-1 md:px-5 ">
          <div className="w-full flex flex-col gap-8 justify-center items-center xs:px-3 z-10">
            <div className="w-full text-white text-[28px] 2xs:text-[32px] xs:text-[40px] sm:text-[48px] md:text-[56px] 1.5xl:text-[72px] font-extrabold text-outline text-center">
              Welcome to Socks
            </div>
            <div className="text-white font-bold text-[14px] xs:text-[18px] md:text-[22px] text-center max-w-[968px] text-outline3">
              Welcome! We are glad you made it.
              <br />
              If you are new to the project, we strongly encourage you <a href="/" className="border-b-text_color-300 border-b-[2px] cursor-pointer">read our whitepaper</a>.
              <br />
              Our Media page is updated on a regular basis to include current featured art - so make sure to stop by frequently to see the latest content!
            </div>
            <div className='flex flex-row w-[200px] justify-center cursor-pointer border-[2px] border-text_color-100 rounded-full shadow-[4px_4px_0px_0px] shadow-text_color-100 bg-button_bg-200 mx-auto'>
              <p className='text-white flex flex-row gap-3 font-bold py-2 px-4 items-center'>Whitepaper <GoArrowUpRight className="text-2xl" /></p>
            </div>
          </div>
          <div className="w-full flex flex-col justify-between">
            <Image src={Dogs} alt="Dogs" className="w-full max-w-5xl mx-auto px-3" />
          </div>
        </div>
      </div>
    </div>
  );
};
