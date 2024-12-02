"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const CardSlider = () => {
  const cards = [
    {
      id: 1,
      name: "Abhishek Gupta",
      role: "마케팅 · 2y+",
      description: ["마케팅 콘텐츠 제작", "인스타그램 관리", "트위터 관리", "블로그 글 작성"],
      img: "https://via.placeholder.com/100",
      flag: "https://via.placeholder.com/20",
    },
    {
      id: 2,
      name: "Abhishek Gupta",
      role: "마케팅 · 2y+",
      description: ["마케팅 콘텐츠 제작", "인스타그램 관리", "트위터 관리", "블로그 글 작성"],
      img: "https://via.placeholder.com/100",
      flag: "https://via.placeholder.com/20",
    },
    {
      id: 3,
      name: "Abhishek Gupta",
      role: "마케팅 · 2y+",
      description: ["마케팅 콘텐츠 제작", "인스타그램 관리", "트위터 관리", "블로그 글 작성"],
      img: "https://via.placeholder.com/100",
      flag: "https://via.placeholder.com/20",
    },
    // Add more card objects as needed
  ];

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={-30}
      slidesPerView={1.5}
      centeredSlides={true}
      navigation
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      className="mySwiper"
    >
      {cards.map((card) => (
        <SwiperSlide key={card.id}>
          <div className="card-container">
            <img src={card.img} alt="Profile" className="card-image" />
            <h3>{card.name}</h3>
            <p className="role">{card.role}</p>
            <div className="description">
              {card.description.map((desc, index) => (
                <span key={index} className="badge">
                  {desc}
                </span>
              ))}
            </div>
            <img src={card.flag} alt="Flag" className="flag" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSlider;
