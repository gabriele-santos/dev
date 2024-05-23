import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./mySkills.css";
import skills from "./skills.gif";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

function MySkills() {
  return (
    <section className="container-skills">
      <div className="centered-title-container">
        <h1 className="centered-title" style={{ color: "#F15A59" }}>Minhas Habilidades</h1>
      </div>
      <div className="container-no-title">
        <div className="div-image-skills">
          <img id="image-skills" src={skills} alt="my skills" />
        </div>
        <Swiper
          className='swiper-container'
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 1000 }}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide className="swiper-item">JavaScript</SwiperSlide>
          <SwiperSlide className="swiper-item">HTML</SwiperSlide>
          <SwiperSlide className="swiper-item">CSS</SwiperSlide>
          <SwiperSlide className="swiper-item">React</SwiperSlide>
          <SwiperSlide className="swiper-item">TypeScript</SwiperSlide>
          <SwiperSlide className="swiper-item">Git</SwiperSlide>
          <SwiperSlide className="swiper-item">GitHub</SwiperSlide>
          <SwiperSlide className="swiper-item">Jest</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default MySkills;
