"use client"
import React, { useContext } from "react";
import UserContext from "@/contexts/usercontext";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { CgPlayButton } from "react-icons/cg";
import { SocksToken, StepsText } from "@/config/TextData";
import { FaCheckSquare } from "react-icons/fa";

export default function SocksTokenTag() {
  const { modeState } = useContext<any>(UserContext);

  return (
    <div id="socksToken" className={`${modeState ? "text-text_color-100 bg-button_bg-400" : "text-white bg-background_bg-800"} flex flex-col mx-auto w-full border-[1px] mt-8 items-center rounded-lg justify-center border-text_color-100 `}>
      <div className="container">
        <div className="flex flex-col gap-5 px-5 pt-10 pb-32 w-full ">
          <div className="text-white text-[28px] 2xs:text-[32px] xs:text-[40px] sm:text-[48px] md:text-[56px] 1.5xl:text-[72px] font-extrabold text-outline text-center">
            Socks Token
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col w-full h-full gap-4 text-center mx-auto">
              <a className="text-sm md:text-base lg2:text-xl font-semibold break-words">
                Contract Address : 3DFU4Z2N2Uyh5KxU9xgKM2u5LsPYU7m2DVKDoPYuFvEL
              </a>
              <div className="p-2 w-full 0.5xs:w-[580px] lg2:w-full flex flex-wrap gap-2 mx-auto">
                {SocksToken.map((item: any, index: number) => {
                  return (
                    <div key={index} className="w-[260px] px-5 py-1 mx-auto flex flex-row gap-2 items-center rounded-full border-[2px] border-text_color-100 shadow-[4px_4px_0px_0px] shadow-text_color-100 bg-white">
                      <FaCheckSquare className="shadow-[2px_2px_0px_0px] shadow-text_color-100 text-background_bg-500 rounded-sm bg-none" />
                      <div className="text-lg text-text_color-500">
                        {item.text}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="flex flex-col w-full h-full gap-3 justify-center mx-auto">
              <div className="text-[20px] 2xs:text-[24px] xs:text-[28px] sm:text-[32px] md:text-[40px] 1.5xl:text-[48px] text-white font-extrabold text-outline text-center">
                Steps to Purchase
              </div>
              <div className="p-2 w-full h-full gap-32 flex flex-col ">
                {StepsText.map((item: any, index: number) => {
                  return (
                    <div key={index} className="w-full flex flex-row gap-2 text-start items-center justify-center relative">
                      <div className="text-4xl p-2 border-[4px] border-text_color-100 rounded-full bg-white text-button_bg-400 z-20">
                        {item.icon}
                      </div>
                      {index === 3 ?
                        <div className="absolute h-36 w-full justify-center flex z-10 top-20 text-text_color-100">
                          <div className="text-[12px] sm2:text-base text-start absolute w-[260px] sm2:w-[360px] px-2 py-1 border-text_color-100 border-[2px] shadow-[4px_4px_0px_0px] shadow-text_color-100 rounded-lg bg-white">
                            {item.text}
                          </div>
                        </div>
                        :
                        <div className={`${index % 2 === 0 ? "right-0 border-l-text_color-100 sm2:pl-10 border-l-[4px]" : "left-0 justify-end border-r-text_color-100 sm2:pr-10 border-r-[4px] "} absolute w-1/2 h-36 border-dashed z-10 pt-1 sm2:pt-2 top-12 flex items-center text-text_color-100`}>
                          <div className={`${index % 2 === 0 ? "-left-[130px]" : "-right-[130px]"} text-[12px] sm2:text-base lg2:text-lg text-start w-[260px] sm2:w-full max-w-[550px] px-2 py-1 border-text_color-100 border-[2px] shadow-[4px_4px_0px_0px] shadow-text_color-100 rounded-lg bg-white z-20 absolute sm2:static`}>
                            {item.text}
                          </div>
                        </div>
                      }

                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
