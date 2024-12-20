"use client"
import React, { useContext } from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import UserContext from "@/contexts/usercontext";
import KpopImg from "@/../public/assest/kpop.png"

export default function SocksStore() {
  const { modeState } = useContext<any>(UserContext);

  return (
    <div id="socksStore" className={`${modeState ? "bg-background_bg-400" : "bg-background_bg-800"} w-full h-[500px] rounded-xl px-4 items-center justify-center py-5 relative`}>
      <div className="container">
        <video id="banner-video" autoPlay muted playsInline loop className="absolute left-0 bottom-0 w-36 md:w-52 lg2:w-72 z-10">
          <source src="./assest/sticker/sticker (8).webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <Image src={KpopImg} alt="KpopImg" className="absolute bottom-0 right-3 w-36 md:w-52 lg2:w-72 z-10" />
        <div className="flex flex-row h-[500px] max-w-[1024px] gap-4 items-start relative justify-center mx-auto my-auto z-20">
          <div className="w-full flex flex-col gap-8 justify-center text-center items-center px-2 3.5xs:px-3 pt-12">
            <div className="text-white text-[28px] 2xs:text-[32px] xs:text-[40px] sm:text-[48px] md:text-[56px] 1.5xl:text-[72px] font-extrabold text-outline text-center relative z-30">
              Socks Store
            </div>
            <div className={`${modeState ? "text-text_color-100" : "text-white"} text-[14px] xs:text-[18px] md:text-[22px] font-medium relative z-30`}>
              Browse our merchandise and support Socks Saves in style by rocking high quality merchandise from us and our partners!
            </div>
            <div className='flex flex-row w-[200px] justify-center cursor-pointer border-[2px] border-text_color-100 rounded-full shadow-[4px_4px_0px_0px] shadow-text_color-100 bg-button_bg-300'>
              <p className='text-text_color-100 flex flex-row gap-3 font-bold py-2 px-4 items-center'>Shop <GoArrowUpRight className="text-2xl" /></p>
            </div>
          </div>
          <div className="absolute top-12 left-1 xs:top-8 xs:left-8 sm:left-16">
            <svg width="69" height="65" viewBox="0 0 44 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.1429 2.94129C25.1429 1.31686 23.7358 0 22 0C20.2642 0 18.8571 1.31686 18.8571 2.94129C18.8571 6.84167 17.2015 10.5823 14.2545 13.3403C11.3075 16.0983 7.31054 17.6477 3.14286 17.6477C1.4071 17.6477 0 18.9646 0 20.589C0 22.2134 1.4071 23.5303 3.14286 23.5303C7.31054 23.5303 11.3075 25.0797 14.2545 27.8377C17.2015 30.5957 18.8571 34.3363 18.8571 38.2367C18.8571 39.8612 20.2642 41.178 22 41.178C23.7358 41.178 25.1429 39.8612 25.1429 38.2367C25.1429 34.3363 26.7985 30.5957 29.7455 27.8377C32.6925 25.0797 36.6895 23.5303 40.8571 23.5303C42.5929 23.5303 44 22.2134 44 20.589C44 18.9646 42.5929 17.6477 40.8571 17.6477C36.6895 17.6477 32.6925 16.0983 29.7455 13.3403C26.7985 10.5823 25.1429 6.84167 25.1429 2.94129Z" fill="white" />
            </svg>
          </div>
          <div className="absolute top-5 xs:top-28 left-0">
            <svg width="38" height="36" viewBox="0 0 44 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.1429 2.94129C25.1429 1.31686 23.7358 0 22 0C20.2642 0 18.8571 1.31686 18.8571 2.94129C18.8571 6.84167 17.2015 10.5823 14.2545 13.3403C11.3075 16.0983 7.31054 17.6477 3.14286 17.6477C1.4071 17.6477 0 18.9646 0 20.589C0 22.2134 1.4071 23.5303 3.14286 23.5303C7.31054 23.5303 11.3075 25.0797 14.2545 27.8377C17.2015 30.5957 18.8571 34.3363 18.8571 38.2367C18.8571 39.8612 20.2642 41.178 22 41.178C23.7358 41.178 25.1429 39.8612 25.1429 38.2367C25.1429 34.3363 26.7985 30.5957 29.7455 27.8377C32.6925 25.0797 36.6895 23.5303 40.8571 23.5303C42.5929 23.5303 44 22.2134 44 20.589C44 18.9646 42.5929 17.6477 40.8571 17.6477C36.6895 17.6477 32.6925 16.0983 29.7455 13.3403C26.7985 10.5823 25.1429 6.84167 25.1429 2.94129Z" fill="white" />
            </svg>
          </div>
          <div className="absolute top-12 sm:top-28 right-0">
            <svg width="69" height="65" viewBox="0 0 44 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.1429 2.94129C25.1429 1.31686 23.7358 0 22 0C20.2642 0 18.8571 1.31686 18.8571 2.94129C18.8571 6.84167 17.2015 10.5823 14.2545 13.3403C11.3075 16.0983 7.31054 17.6477 3.14286 17.6477C1.4071 17.6477 0 18.9646 0 20.589C0 22.2134 1.4071 23.5303 3.14286 23.5303C7.31054 23.5303 11.3075 25.0797 14.2545 27.8377C17.2015 30.5957 18.8571 34.3363 18.8571 38.2367C18.8571 39.8612 20.2642 41.178 22 41.178C23.7358 41.178 25.1429 39.8612 25.1429 38.2367C25.1429 34.3363 26.7985 30.5957 29.7455 27.8377C32.6925 25.0797 36.6895 23.5303 40.8571 23.5303C42.5929 23.5303 44 22.2134 44 20.589C44 18.9646 42.5929 17.6477 40.8571 17.6477C36.6895 17.6477 32.6925 16.0983 29.7455 13.3403C26.7985 10.5823 25.1429 6.84167 25.1429 2.94129Z" fill="white" />
            </svg>
          </div>
          <div className="absolute top-5 sm:top-14 right-0 xs:right-14 sm:right-20">
            <svg width="38" height="36" viewBox="0 0 44 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.1429 2.94129C25.1429 1.31686 23.7358 0 22 0C20.2642 0 18.8571 1.31686 18.8571 2.94129C18.8571 6.84167 17.2015 10.5823 14.2545 13.3403C11.3075 16.0983 7.31054 17.6477 3.14286 17.6477C1.4071 17.6477 0 18.9646 0 20.589C0 22.2134 1.4071 23.5303 3.14286 23.5303C7.31054 23.5303 11.3075 25.0797 14.2545 27.8377C17.2015 30.5957 18.8571 34.3363 18.8571 38.2367C18.8571 39.8612 20.2642 41.178 22 41.178C23.7358 41.178 25.1429 39.8612 25.1429 38.2367C25.1429 34.3363 26.7985 30.5957 29.7455 27.8377C32.6925 25.0797 36.6895 23.5303 40.8571 23.5303C42.5929 23.5303 44 22.2134 44 20.589C44 18.9646 42.5929 17.6477 40.8571 17.6477C36.6895 17.6477 32.6925 16.0983 29.7455 13.3403C26.7985 10.5823 25.1429 6.84167 25.1429 2.94129Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
