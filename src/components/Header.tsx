"use client"
import React, { useRef, useEffect, useContext, useState } from "react";
import UserContext from "@/contexts/usercontext";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/assest/logo.png";
import { MenuBar } from "@/config/TextData";
import { FaMoon } from "react-icons/fa";
import { ImSun } from "react-icons/im";
import { MdMenu } from "react-icons/md";

export default function Header() {
  const { poshition, setPosition, menuState, setMenuState, modeState, setModeState } = useContext<any>(UserContext);
  const menuDropdown = useRef<HTMLDivElement | null>(null);
  const [showCodeLock, setShowCodeLock] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState<number | null>(null);

  const pageScroll = (prevScrollPos: any, setMenuState: any) => {
    const initialScrollPos = window.pageYOffset;
    setPrevScrollPos(initialScrollPos);

    function handleScroll() {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos !== null && (prevScrollPos > currentScrollPos || currentScrollPos < 100)) {
        setShowCodeLock(true);
      } else {
        setShowCodeLock(false);
        setMenuState(false);
      }
      setPrevScrollPos(currentScrollPos);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      pageScroll(prevScrollPos, setMenuState)
    }
  }, [prevScrollPos, setMenuState]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuDropdown.current && !menuDropdown.current.contains(event.target as Node)) {
        setMenuState(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuDropdown, setMenuState]);

  const handleMenuClick = (event: React.MouseEvent, id: string) => {
    event.preventDefault();
    setPosition(id);
    setMenuState(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        ref={menuDropdown}
        className="fixed flex flex-col mx-auto max-w-[1440px] w-[calc(100%-40px)] lg2:w-[calc(100%-60px)] px-[10px] z-50"
      >
        <div className={`${showCodeLock ? "top-6 md2:top-8 lg2:top-12" : "-top-80"} duration-500 w-full absolute h-[68px] lg2:h-[84px] rounded-full items-center bg-white/30 flex flex-row mx-auto justify-between gap-3 lg2:gap-5 px-7 lg2:px-10 border-[2px] ${modeState ? "border-text_color-100" : "border-white"}`}
        >
          <Link href={"/"} className="">
            <Image src={Logo} alt="" className="w-[48px] min-w-[48px] h-[48px]" />
          </Link>
          <div className="hidden w-full gap-2 lg2:gap-5 md2:flex flex-row text-text_color text-sm lg2:text-lg">
            {MenuBar.map((item: any, index: number) => {
              return (
                <div key={index} className="">
                  <a
                    onClick={(e) => handleMenuClick(e, item.id)}
                    href={`#${item.id}`}
                    className={`${poshition === item.id ? "font-bold" : ""}`}
                  >
                    {item.text}
                  </a>
                </div>
              )
            })}
          </div>
          <div className="flex flex-row items-center gap-4 lg2:gap-8">
            <div onClick={() => setModeState(!modeState)} className='flex flex-row justify-center cursor-pointer border-[2px] text-white text-2xl border-text_color-100 rounded-md shadow-[4px_4px_0px_0px] shadow-text_color-100 p-2 bg-button_bg-100'>
              {modeState ? <ImSun /> : <FaMoon style={{ color: "#1A1A1A" }} />}
            </div>
            <div onClick={() => setMenuState(true)} className='flex md2:hidden flex-row justify-center cursor-pointer border-[2px] text-white text-2xl border-text_color-100 rounded-md shadow-[4px_4px_0px_0px] shadow-text_color-100 p-2 bg-button_bg-100 relative'>
              <MdMenu />
              {
                menuState === true && (
                  < div className="absolute flex flex-col gap-1 text-text_color-100 text-center w-[160px] mx-auto text-[24px] border-text_color-100 border-[2px] rounded-lg bg-white/80 top-[54px] -right-6 py-2 text-sm">
                    <div className="absolute w-3 h-3 bg-text_color-100 right-8 -top-[8px] rotate-45 rounded-br-full"></div>
                    {MenuBar.map((item: any, index: number) => {
                      return (
                        <div key={index} className="">
                          <a
                            onClick={(e) => handleMenuClick(e, item.id)}
                            href={`#${item.id}`}
                            className={`${poshition === item.id ? "font-bold" : ""}`}
                          >
                            {item.text}
                          </a>
                        </div>
                      )
                    })}
                  </div>)
              }
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
