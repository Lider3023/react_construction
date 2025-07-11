import React, { type FC } from "react";
import "./Team.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  link1,
  link2,
  link3,
  link4,
  link5,
  team1,
  team2,
  team3,
  team4,
} from "../../../utils/img";
import { Link } from "react-router-dom";
import { useWindowSize } from "../../../utils/WindowSize";

const Team: FC = () => {
  const { width, height } = useWindowSize();

  const slidesPerView = width < 1230 ? width < 1000 ?  width<905 ? 1: 2 : 3 : 4;
  const logoShow=width < 1230 ? width < 1000 ? 3 : 4 : 5
  const people = [
    {
      name: "Richard Wagner",
      position: "Civil Engineer",
      image: team1,
    },
    {
      name: "Sarah Spence",
      position: "Construction Assistant",
      image: team2,
    },
    {
      name: "John Halpern",
      position: "Construction Manager",
      image: team3,
    },
    {
      name: "Tommy Atkins",
      position: "Electricians",
      image: team4,
    },
    {
      name: "Sarah Spence",
      position: "Construction Assistant",
      image: team2,
    },
    {
      name: "John Halpern",
      position: "Construction Manager",
      image: team3,
    },
    {
      name: "Tommy Atkins",
      position: "Electricians",
      image: team4,
    },
    {
      name: "Sarah Spence",
      position: "Construction Assistant",
      image: team2,
    },
    {
      name: "John Halpern",
      position: "Construction Manager",
      image: team3,
    },
    {
      name: "Tommy Atkins",
      position: "Electricians",
      image: team4,
    },
  ];
  const images = [
    { src: link1, link: "/" },
    { src: link2, link: "/" },
    { src: link3, link: "/" },
    { src: link4, link: "/" },
    { src: link5, link: "/" },
    { src: link1, link: "/" },
    { src: link2, link: "/" },
    { src: link3, link: "/" },
    { src: link4, link: "/" },
    { src: link5, link: "/" },
    { src: link1, link: "/" },
    { src: link2, link: "/" },
    { src: link3, link: "/" },
    { src: link4, link: "/" },
    { src: link5, link: "/" },
  ];
  return (
    <>
      <div className="team">
        <div className="team_content container">
          <h2 className="team_title">OUR TEAM</h2>
          <svg
            width="1171"
            height="4"
            viewBox="0 0 1171 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="550.5" y="0.709961" width="70" height="3" fill="#FFC925" />
          </svg>
          <p className="team_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            sit amet iaculis elit. Nam semper ut arcu non placerat. Praesent
            nibh massa varius.
          </p>
          <div className="people-swiper">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true, enabled: true }}
              autoplay={{ delay: 4000 }}
              loop={true}
              spaceBetween={60}
              slidesPerView={slidesPerView}
              slidesPerGroup={slidesPerView}
              grabCursor={true}
              direction="horizontal"
              // breakpoints={{
              //   768: {
              //     slidesPerView: 3,
              //   },
              // }}
            >
              {people.map((person, index) => (
                <SwiperSlide key={index}>
                  <div className="card">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="card_image"
                    />
                    <div className="icons">
                      <svg
                        className="facebook"
                        width="7"
                        height="12"
                        viewBox="0 0 7 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.42329 0.0800781V1.84793H5.37195C4.98802 1.84793 4.72909 1.92829 4.59516 2.08901C4.46123 2.24972 4.39427 2.49079 4.39427 2.81222V4.07785H6.35632L6.09516 6.05999H4.39427V11.1426H2.34516V6.05999H0.637573V4.07785H2.34516V2.61802C2.34516 1.78767 2.57731 1.14369 3.04159 0.686105C3.50588 0.228516 4.12418 -0.000279427 4.8965 -0.000279427C5.55275 -0.000279427 6.06168 0.0265064 6.42329 0.0800781Z"
                          fill="white"
                        />
                      </svg>
                      <svg
                        className="google"
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.62851 6.11356C9.62851 7.04213 9.43431 7.86914 9.04592 8.59459C8.65752 9.32003 8.10395 9.887 7.3852 10.2955C6.66645 10.704 5.84279 10.9082 4.91422 10.9082C4.24904 10.9082 3.61288 10.7787 3.00574 10.5198C2.39859 10.2609 1.87627 9.91267 1.43877 9.47517C1.00127 9.03767 0.653059 8.51535 0.39413 7.9082C0.135202 7.30106 0.0057373 6.6649 0.0057373 5.99972C0.0057373 5.33454 0.135202 4.69838 0.39413 4.09124C0.653059 3.4841 1.00127 2.96177 1.43877 2.52427C1.87627 2.08677 2.39859 1.73856 3.00574 1.47963C3.61288 1.2207 4.24904 1.09124 4.91422 1.09124C6.19101 1.09124 7.28699 1.51981 8.20217 2.37695L6.86958 3.65597C6.34726 3.15151 5.69547 2.89927 4.91422 2.89927C4.36511 2.89927 3.8573 3.03767 3.39078 3.31445C2.92426 3.59124 2.55484 3.96735 2.28252 4.4428C2.0102 4.91825 1.87404 5.43722 1.87404 5.99972C1.87404 6.56222 2.0102 7.08119 2.28252 7.55664C2.55484 8.03209 2.92426 8.4082 3.39078 8.68499C3.8573 8.96177 4.36511 9.10017 4.91422 9.10017C5.28476 9.10017 5.62516 9.04883 5.93542 8.94615C6.24569 8.84347 6.50127 8.71512 6.70217 8.5611C6.90306 8.40709 7.07828 8.23186 7.22784 8.03544C7.37739 7.83901 7.48676 7.65374 7.55596 7.47963C7.62516 7.30552 7.67315 7.14035 7.69993 6.9841H4.91422V5.2966H9.54815C9.60172 5.57785 9.62851 5.85017 9.62851 6.11356ZM15.4343 5.2966V6.70285H14.0348V8.1024H12.6285V6.70285H11.229V5.2966H12.6285V3.89704H14.0348V5.2966H15.4343Z"
                          fill="white"
                        />
                      </svg>
                      <svg
                        className="twitter"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.8568 2.73159C10.5577 3.16909 10.1961 3.54185 9.77197 3.84989C9.77644 3.91239 9.77867 4.00614 9.77867 4.13114C9.77867 4.7115 9.69385 5.29074 9.52421 5.86886C9.35456 6.44699 9.09675 7.00167 8.75077 7.53292C8.40479 8.06417 7.99295 8.53404 7.51528 8.94252C7.0376 9.351 6.4617 9.6769 5.7876 9.9202C5.11349 10.1635 4.39251 10.2852 3.62465 10.2852C2.41483 10.2852 1.30769 9.9615 0.303223 9.31417C0.459473 9.33203 0.63358 9.34096 0.825544 9.34096C1.83001 9.34096 2.7251 9.03292 3.51081 8.41685C3.04206 8.40792 2.62242 8.26395 2.25188 7.98493C1.88135 7.70592 1.62688 7.34989 1.48849 6.91685C1.63581 6.93917 1.77197 6.95034 1.89697 6.95034C2.08894 6.95034 2.27867 6.92578 2.46617 6.87667C1.96617 6.774 1.55211 6.52511 1.22398 6.13002C0.895857 5.73493 0.731794 5.27623 0.731794 4.75391V4.72712C1.03537 4.89676 1.36126 4.98828 1.70947 5.00167C1.41483 4.80525 1.18045 4.54855 1.00635 4.23159C0.832241 3.91462 0.745187 3.57087 0.745187 3.20034C0.745187 2.80748 0.843401 2.44364 1.03983 2.10882C1.58001 2.774 2.23737 3.30636 3.01193 3.70592C3.78648 4.10547 4.61572 4.32757 5.49965 4.37221C5.46394 4.20257 5.44608 4.03739 5.44608 3.87667C5.44608 3.27846 5.65702 2.76842 6.07889 2.34654C6.50077 1.92467 7.01081 1.71373 7.60903 1.71373C8.23403 1.71373 8.76081 1.94141 9.18938 2.39676C9.67599 2.30301 10.1336 2.12891 10.5622 1.87444C10.397 2.38784 10.08 2.78516 9.61126 3.06641C10.0264 3.02176 10.4416 2.91016 10.8568 2.73159Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="card_info">
                      <h3>{person.name}</h3>
                      <p>{person.position}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="team_links">
          <div className="image-swiper-container container">
            <Swiper
              modules={[ Autoplay]}
              slidesPerView={logoShow}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              loop={true}
              spaceBetween={32}
              direction="horizontal"
            >
              {images.map((img, i) => (
                <SwiperSlide key={i}>
                  <Link to={img.link}>
                    <img src={img.src} alt={`Image ${i + 1}`} />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
