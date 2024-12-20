import { useContext } from "react"
import UserContext from "@/contexts/usercontext";
import Image from "next/image";
import { FaFacebookF, FaTelegramPlane, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import DexToolsIcon from "@/../public/assest/dextools.svg"
import DexScreener from "@/../public/assest/dexscreener.svg"
import CoinMarketCap from "@/../public/assest/coinmarketcap.svg"
import DarkDexToolsIcon from "@/../public/assest/dextools-dark.svg"
import DarkDexScreener from "@/../public/assest/dexscreener-dark.svg"
import DarkCoinMarketCap from "@/../public/assest/coinmarketcap-dark.svg"

const SocialLinksComponent = () => {
  const { modeState } = useContext<any>(UserContext);

  const SocialLinks = [
    { id: "FaFacebookF", icon: <FaFacebookF />, url: "https://www.facebook.com/share/v1j6CQVw2ri1bss1/?mibextid=qi2Omg" },
    { id: "FaTelegramPlane", icon: <FaTelegramPlane />, url: "https://t.me/socksiggydogportal" },
    { id: "FaXTwitter", icon: <FaXTwitter />, url: "https://x.com/mothersdogsocks" },
    { id: "FaInstagram", icon: <FaInstagram />, url: "https://www.instagram.com/socksonsol" },
    { id: "FaYoutube", icon: <FaYoutube />, url: "https://m.youtube.com/@MothersDogSocks" },
    { id: "FaTiktok", icon: <FaTiktok />, url: "https://www.tiktok.com/@dogofmother?fbclid=PAZXh0bgNhZW0CMTEAAaZMys5z6ogIqY36DHmnS72nIP6jkZ_YYksYu_vEBcNjMsz7OZpkn_i-mjk_aem_RCThOME9KuqbaarTpDF6Yw" },
    { id: "DexToolsIcon", icon: <Image src={modeState ? DexToolsIcon : DarkDexToolsIcon} alt="DexToolsIcon" style={{ width: "24px", height: "24px" }} className="w-6 h-6" />, url: "https://www.dextools.io/app/en/solana/pair-explorer/EPFAfgY1wZXLGkFFWQuKio3Eo83MXEqiEM4zpZfwkj8E?t=1729671262301" },
    { id: "DexScreener", icon: <Image src={modeState ? DexScreener : DarkDexScreener} alt="DexScreener" style={{ width: "24px", height: "24px" }} className="w-6 h-6" />, url: "https://dexscreener.com/solana/EPFAfgY1wZXLGkFFWQuKio3Eo83MXEqiEM4zpZfwkj8E" },
    { id: "CoinMarketCap", icon: <Image src={modeState ? CoinMarketCap : DarkCoinMarketCap} alt="CoinMarketCap" style={{ width: "24px", height: "24px" }} className="w-6 h-6" />, url: "https://coinmarketcap.com/dexscan/solana/3qWW8ZPXj1HH3zQaf4AKhmLm47A5cUa6pvVfnFg4viDQ/" },
  ]

  return (
    <div className="flex flex-wrap gap-3 justify-center lg2:justify-start">
      {SocialLinks.map((item: any, index: number) => {
        return (
          <a key={index} href={item.url} className={`${modeState ? "text-text_color-100 bg-button_bg-400 border-text_color-100 shadow-text_color-100" : "text-white border-white bg-text_color-100 shadow-white"} flex flex-row border-[2px] text-2xl rounded-lg shadow-[4px_4px_0px_0px] p-2`}>
            {item.icon}
          </a>
        )
      })}
    </div>
  );
};

export default SocialLinksComponent;