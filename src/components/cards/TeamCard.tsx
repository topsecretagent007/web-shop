"use client"
import React, { useContext } from "react"
import Image from "next/image"
import UserContext from "@/contexts/usercontext";

export default function TeamCard({ data }: { data: any }) {
  const { modeState } = useContext<any>(UserContext);

  return (
    <div id="socksTeam" className={`${modeState ? "border-[2px] border-black shadow-text_color-100" : "border-[2px] border-text_color-300 shadow-text_color-300"} w-full max-w-[280px] rounded-lg  shadow-[4px_4px_0px_0px] flex flex-col overflow-hidden`}>
      <Image src={data.avatar} alt={data.name} className="" />
      <div className="p-5 flex flex-col w-full text-start text-black gap-2 bg-white">
        <div className="text-lg md2:text-xl font-semibold">
          {data.name}
        </div>
        <div className="text-sm md2:text-md">
          {data.discription}
        </div>
      </div>
    </div>
  )
}