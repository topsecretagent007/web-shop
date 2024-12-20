"use client"
import React, { useContext } from "react";
import Image from "next/image";
import { TeamData } from "@/config/TextData";
import UserContext from "@/contexts/usercontext";
import TeamCard from "../cards/TeamCard";

export default function SocksTeam() {
  const { modeState } = useContext<any>(UserContext);

  return (
    <div id="socksStore" className={`${modeState ? "bg-background_bg-400" : "bg-background_bg-800"} w-full h-full rounded-xl px-4 items-center justify-center py-5 relative`}>
      <div className="container">
        <div className="flex flex-col gap-5 px-5 pt-10 pb-32 w-full ">
          <div className="text-[28px] 2xs:text-[32px] xs:text-[40px] sm:text-[48px] md:text-[56px] 1.5xl:text-[72px] font-extrabold text-outline text-[#67BFAF] text-center">
            Socks Team
          </div>
          <div className="flex flex-wrap gap-8">
            {TeamData.map((item: any, index: number) => {
              return (
                <div key={index} className="mx-auto">
                  <TeamCard data={item} />
                </div>
              )
            })
            }
          </div>
        </div>
      </div>
    </div>
  );
};
