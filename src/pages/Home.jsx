import React, { useState, useEffect, useRef } from "react";
// Import Swiper React Components
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../components/ProductCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "../styles/swiper.css";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

const createProduct = (item, index) => {
  console.log(item);
  return <ProductCard key={index} />;
};

const Home = () => {
  const productData = [];

  const handleInstaLogin = () => {
    window.location.href = `https://api.instagram.com/oauth/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=http://localhost:3000/auth&scope=user_profile,user_media&response_type=code`;
  };

  const swiperImages = [
    { src: "Slider-01.png", alt: "fabric" },
    { src: "Slider-02.png", alt: "fabric" },
    { src: "Slider-03.png", alt: "fabric" },
    { src: "Slider-04.png", alt: "fabric" },
    { src: "Slider-05.png", alt: "fabric" },
  ];

  return (
    <div id="home">
      <section className="relative">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          effect={"fade"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectFade]}
          className="mySwiper"
        >
          {swiperImages.map((image) => {
            return (
              <SwiperSlide>
                <img src={`images/${image.src}`} alt={image.alt} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center">
          <span className="text-white text-4xl font-light">
            block print brand
          </span>
          <h3 className="text-white font-Poiret text-9xl font-semibold tracking-widest py-10">
            INDIEWARES
          </h3>
          <button className="text-4xl underline text-white font-light">
            Shop Now
          </button>
        </div>
      </section>
      <section className="grid grid-rows-3 justify-center justify-items-center items-center py-10">
        <h3 className="text-2xl text-dark-slate-gray font-medium">
          Our latest designs
        </h3>
        <h2 className="text-5xl text-dark-slate-gray font-bold pb-2">
          New Arrivals
        </h2>

        <div className="flex">
          {productData &&
            productData
              .map((item, index) => createProduct(item, index))}
        </div>
      </section>
      <section className="">
        <span>Our most popular designs</span>

        <h3>Shops best of world</h3>

        <div className="">
          {productData &&
            productData
              .slice(0, 4)
              .map((item, index) => createProduct(item, index))}
        </div>
      </section>
      <section className="instagram-posts">
        <div className="container-xxl">
          <div className="row">
            <button onClick={handleInstaLogin}>Login Instagram</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
