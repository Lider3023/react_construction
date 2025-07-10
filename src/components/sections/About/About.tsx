import React, { type FC } from "react";
import "./About.scss";
import { user1, user2, user3 } from "../../../utils/img";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const About: FC = () => {
  const feedbacks = [
    {
      text: `Vestibulum eu libero volutpat, portas quam acc, tempus sem. Donec sodales quam id lorem lobortis, vitae interdum nisl vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam suscipit, elit quis facilisis dictum, diam justo volutpat dui.`,
      userImg: user1,
      name: "GEORGE SLOWS",
      title: "Builder manager",
    },
    {
      text: `Vestibulum eu libero volutpat, portas quam acc, tempus sem. Donec sodales quam id lorem lobortis, vitae interdum nisl vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam suscipit, elit quis facilisis dictum, diam justo volutpat dui.`,
      userImg: user2,
      name: "BARBARA DOUGLAS",
      title: "Builder manager",
    },
    {
      text: `Vestibulum eu libero volutpat, portas quam acc, tempus sem. Donec sodales quam id lorem lobortis, vitae interdum nisl vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam suscipit, elit quis facilisis dictum, diam justo volutpat dui.`,
      userImg: user3,
      name: "GEORGE SLOWS",
      title: "Builder manager",
    },
    {
      text: `Vestibulum eu libero volutpat, portas quam acc, tempus sem. Donec sodales quam id lorem lobortis, vitae interdum nisl vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam suscipit, elit quis facilisis dictum, diam justo volutpat dui.`,
      userImg: user1,
      name: "GEORGE SLOWS",
      title: "Builder manager",
    },
    {
      text: `Vestibulum eu libero volutpat, portas quam acc, tempus sem. Donec sodales quam id lorem lobortis, vitae interdum nisl vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam suscipit, elit quis facilisis dictum, diam justo volutpat dui.`,
      userImg: user2,
      name: "BARBARA DOUGLAS",
      title: "Builder manager",
    },
    {
      text: `Vestibulum eu libero volutpat, portas quam acc, tempus sem. Donec sodales quam id lorem lobortis, vitae interdum nisl vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam suscipit, elit quis facilisis dictum, diam justo volutpat dui.`,
      userImg: user3,
      name: "GEORGE SLOWS",
      title: "Builder manager",
    },
    {
      text: `Vestibulum eu libero volutpat, portas quam acc, tempus sem. Donec sodales quam id lorem lobortis, vitae interdum nisl vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam suscipit, elit quis facilisis dictum, diam justo volutpat dui.`,
      userImg: user1,
      name: "GEORGE SLOWS",
      title: "Builder manager",
    },
    {
      text: `Vestibulum eu libero volutpat, portas quam acc, tempus sem. Donec sodales quam id lorem lobortis, vitae interdum nisl vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam suscipit, elit quis facilisis dictum, diam justo volutpat dui.`,
      userImg: user2,
      name: "BARBARA DOUGLAS",
      title: "Builder manager",
    },
    {
      text: `Vestibulum eu libero volutpat, portas quam acc, tempus sem. Donec sodales quam id lorem lobortis, vitae interdum nisl vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam suscipit, elit quis facilisis dictum, diam justo volutpat dui.`,
      userImg: user3,
      name: "GEORGE SLOWS",
      title: "Builder manager",
    },
  ];

  return (
    <>
      <div className="about container">
        <h2 className="about__title">WHAT OTHER SAY ABOUT US</h2>
        <svg
          width="1171"
          height="4"
          viewBox="0 0 1171 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="550.5" y="0.709961" width="70" height="3" fill="#FFC925" />
        </svg>
        <p className="about__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit
          amet iaculis elit. Nam semper ut arcu non placerat. Praesent nibh
          massa varius.
        </p>
        <div className="about__feedbacks">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true, enabled: true }}
            slidesPerView={3}
            slidesPerGroup={3}
            spaceBetween={30}
            loop={true}
            grabCursor={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            style={{ maxWidth: "1170px", margin: "0 auto ", height: 436 }}
          >
            {feedbacks.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="feedback" key={index}>
                  <p>{item.text}</p>
                  <div className="feedback_user">
                    <img src={item.userImg} className="user" alt="" />
                    <div className="details">
                      <h3>{item.name}</h3>
                      <span>{item.title}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
      </div>
    </>
  );
};

export default About;
