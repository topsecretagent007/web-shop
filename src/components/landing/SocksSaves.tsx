"use client"
import UserContext from "@/contexts/usercontext";
import React, { useContext } from "react";
import { GoArrowUpRight } from "react-icons/go";

export default function SocksSaves() {
  const { modeState } = useContext<any>(UserContext);

  return (
    <div id="socksSaves" className={`${modeState ? "bg-background_bg-200" : "bg-background_bg-800"} w-full h-[500px] rounded-xl px-4 items-center justify-center py-5 object-cover overflow-hidden  duration-300 relative`}>
      <div className="container">
        <video id="banner-video" autoPlay muted playsInline loop className="absolute left-0 bottom-0 w-36 md:w-52 lg2:w-72 z-20">
          <source src="./assest/sticker/sticker (2).webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <video id="banner-video" autoPlay muted playsInline loop className="absolute right-0 bottom-0 w-36 md:w-52 lg2:w-72 z-20">
          <source src="./assest/sticker/sticker (1).webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="flex flex-row h-[460px] max-w-[910px] gap-4 items-start relative justify-center mx-auto my-auto z-30">
          <div className="w-full flex flex-col gap-8 justify-center text-center items-center px-3 z-20 pt-12">
            <div className="text-white text-[28px] 2xs:text-[32px] xs:text-[40px] sm:text-[48px] md:text-[56px] 1.5xl:text-[72px] font-extrabold text-outline text-center">
              Socks Saves
            </div>
            <div className="text-white text-[14px] xs:text-[18px] md:text-[22px] font-medium">
              Socks Saves is a registered nonprofit dedicated to saving dogs from overcrowded kill shelters and planting trees in Australia to save Koalas.
              We will channel the power of memecoins to make the world a better place.
            </div>
            <div className='flex flex-row w-[200px] justify-center cursor-pointer border-[2px] border-text_color-100 rounded-full shadow-[4px_4px_0px_0px] shadow-text_color-100 bg-button_bg-300'>
              <p className='text-text_color-200 flex flex-row gap-3 font-bold py-2 px-4 items-center'>Donate<GoArrowUpRight className="text-2xl" /></p>
            </div>
          </div>
        </div>
        <div className="absolute -top-10 left-1/2 z-10">
          {modeState ?
            <svg width="538" height="549" viewBox="0 0 538 549" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.14">
                <path d="M323.835 164.141C289.853 176.522 249.05 150.496 232.688 106.015C216.336 61.5326 230.625 15.4486 264.602 3.07569C298.591 -9.28758 339.39 16.731 355.751 61.212C372.104 105.694 357.815 151.778 323.835 164.141Z" fill="#FFDBDB" />
                <path d="M452.958 235.084C417.41 232.017 391.88 191.824 395.92 145.281C399.968 98.7542 432.069 63.5172 467.617 66.5668C503.162 69.6431 528.691 109.844 524.647 156.379C520.597 202.906 488.502 238.142 452.958 235.084Z" fill="#FFDBDB" />
                <path d="M176.112 233.506C144.912 251.753 100.082 233.428 75.9713 192.595C51.8601 151.735 57.6072 103.856 88.8113 85.6104C120.01 67.3807 164.85 85.7144 188.956 126.548C213.065 167.4 207.311 215.278 176.112 233.506Z" fill="#FFDBDB" />
                <path d="M9.00985 281.913C29.2382 252.671 76.9767 250.411 115.647 276.88C154.325 303.366 169.272 348.531 149.049 377.781C128.826 407.022 81.0835 409.285 42.4124 382.806C3.74667 356.328 -11.2088 311.163 9.00985 281.913Z" fill="#FFDBDB" />
                <path d="M216.723 287.432C220.581 260.869 236.946 236.643 263.104 224.357C289.256 212.079 318.457 214.913 341.511 228.827C366.992 244.214 383.293 264.315 405.24 273.101C427.184 281.886 488.649 255.721 526.919 324.868C553.947 373.708 529.135 435.449 478.466 459.24C439.953 477.322 409.472 475.303 387.095 485.804C364.721 496.305 346.91 521.007 308.4 539.087C257.732 562.879 194.062 542.692 173.356 490.881C144.037 417.531 203.419 386.955 210.558 364.514C217.691 342.077 212.457 316.777 216.723 287.432Z" fill="#FFDBDB" />
              </g>
            </svg>
            :
            <svg width="538" height="549" viewBox="0 0 538 549" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <path d="M323.835 164.141C289.853 176.522 249.05 150.496 232.688 106.015C216.336 61.5326 230.625 15.4486 264.602 3.07569C298.591 -9.28758 339.39 16.731 355.751 61.212C372.104 105.694 357.815 151.778 323.835 164.141Z" fill="#383C59" fillOpacity="0.8" />
                <path d="M452.958 235.084C417.41 232.017 391.88 191.824 395.92 145.281C399.968 98.7542 432.069 63.5172 467.617 66.5668C503.162 69.6431 528.691 109.844 524.647 156.379C520.597 202.906 488.502 238.142 452.958 235.084Z" fill="#383C59" fillOpacity="0.8" />
                <path d="M176.112 233.506C144.912 251.753 100.082 233.428 75.9713 192.595C51.8601 151.735 57.6072 103.856 88.8113 85.6104C120.01 67.3807 164.85 85.7144 188.956 126.548C213.065 167.4 207.311 215.278 176.112 233.506Z" fill="#383C59" fillOpacity="0.8" />
                <path d="M9.00985 281.913C29.2382 252.671 76.9767 250.411 115.647 276.88C154.325 303.366 169.272 348.531 149.049 377.781C128.826 407.022 81.0835 409.285 42.4124 382.806C3.74667 356.328 -11.2088 311.163 9.00985 281.913Z" fill="#383C59" fillOpacity="0.8" />
                <path d="M216.723 287.432C220.581 260.869 236.946 236.643 263.104 224.357C289.256 212.079 318.457 214.913 341.511 228.827C366.992 244.214 383.293 264.315 405.24 273.101C427.184 281.886 488.649 255.721 526.919 324.868C553.947 373.708 529.135 435.449 478.466 459.24C439.953 477.322 409.472 475.303 387.095 485.804C364.721 496.305 346.91 521.007 308.4 539.087C257.732 562.879 194.062 542.692 173.356 490.881C144.037 417.531 203.419 386.955 210.558 364.514C217.691 342.077 212.457 316.777 216.723 287.432Z" fill="#383C59" fillOpacity="0.8" />
              </g>
            </svg>
          }
        </div>
      </div>
    </div>
  );
};
