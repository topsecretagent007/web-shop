"use client"
import React from "react";
import NavBar from "./NavBar";
import SocksSaves from "./SocksSaves";
import SocksStore from "./SocksStore";
import SocksAdventures from "./SocksAdventures";
import ReviewSlider from "./ReviewSlider";
import Media from "./Media";
import Contact from "./Contact";
import SocksTokenTag from "./SocksTokenTag";
import SocksTeam from "./SocksTeam";

export default function Home() {
  return (
    <div className="flex flex-col h-full rounded-xl gap-8">
      <NavBar />
      <SocksSaves />
      <SocksStore />
      <SocksAdventures />
      <Media />
      <ReviewSlider sliderTime={2} />
      <ReviewSlider sliderTime={4} />
      <SocksTokenTag />
      <SocksTeam />
      <Contact />
    </div>
  );
};
