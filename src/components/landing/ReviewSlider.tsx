"use client"
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import { SliderImages } from "@/config/TextData";

export default function ReviewSlider({ sliderTime }: { sliderTime: number }) {
  const settings = {
    infinite: true,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: sliderTime * 1000,
    autoplaySpeed: sliderTime * 1000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1104,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 896,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container py-4">
      <Slider {...settings}>
        {SliderImages.map((item: any, index: number) => {
          return (
            <div key={index} className="w-full">
              <Image src={item.url} alt={item.alt} className="rounded-lg w-[120px] h-[120px] 3.5xs:w-[140px] 3xs:h-[140px] 3xs:w-[160px] 3.5xs:h-[160px] xs:w-[120px] xs:h-[120px] 0.5xs:w-[150px] 0.5xs:h-[150px] sm2:w-[200px] sm2:h-[200px] shadow-text_color-100 shadow-[8px_8px_0px_0px_rgba(109,40,217)] mx-auto" />
            </div>
          )
        })
        }
      </Slider>
    </div>
  );
}

