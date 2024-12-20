"use client"
import React, { useState } from "react";
import Header from "@/components/Header";
import Landing from "@/components/landing/index"
import UserContext from "@/contexts/usercontext";

export default function Home() {
  const [poshition, setPosition] = useState<string>("home");
  const [menuState, setMenuState] = useState<boolean>(false);
  const [modeState, setModeState] = useState<boolean>(true)
  return (
    <main className={`${modeState ? "bg-white" : "bg-[#1E1E1E]"} flex w-full min-h-screen flex-col p-2 lg2:p-5 duration-700`}>
      <UserContext.Provider value={{ poshition, setPosition, menuState, setMenuState, modeState, setModeState }}>
        <div className="container">
          <Header />
        </div>
        <Landing />
      </UserContext.Provider>
    </main>
  );
}
