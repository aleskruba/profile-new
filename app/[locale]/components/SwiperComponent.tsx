"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/app/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";



export const SwiperComponent = () => {
  return (
    <Swiper
    slidesPerView={5}
    loop={true}
    autoplay={{
      delay: 0,
      disableOnInteraction: false,
    }}
    speed={5000}
    modules={[Autoplay]}
    className="w-[350px] md:w-[400px] lg:w-[550px] xl:w-[600px] 2xl:w-[700px]"
  >
    {SkillData.map((skill, index) => (
      <SwiperSlide key={index}>
        <Image
          src={skill.Image}
          alt={skill.name}
          width={skill.width}
          height={skill.height}
        />
      </SwiperSlide>
    ))}
  </Swiper>
  )
}
