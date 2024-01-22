import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../components/ProductCard";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import "../styles/home.css";

const createProduct = (item, index) => {
  console.log(item);
  return <ProductCard key={index} />;
};

const Home = () => {
  const [productData, setProductData] = useState(null);
  console.log("productData", productData);
  useEffect(() => {
    try {
      fetch("http://localhost:5000/api/items")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setProductData(data);
        });
    } catch (error) {
      console.log("Error fetching data", error);
    }
  }, []);

  const handleInstaLogin = () => {
    window.location.href = `https://api.instagram.com/oauth/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=http://localhost:3000/auth&scope=user_profile,user_media&response_type=code`;
  }

  const images = [
    [
      "swiper-0.png",
      "Vibrant, intricately patterned traditional Jaipur block print attire.",
    ],
    [
      "swiper-1.png",
      "Vivid Jaipur block print shirt with intricate floral patterns.",
    ],
    [
      "swiper-2.png",
      "Elegant Jaipur print dress: vibrant, traditional, yet modern elegance.",
    ],
    [
      "swiper-3.png",
      "Elegant Jaipur Block Print Jacket: Traditional Craftsmanship Meets Modern Style.",
    ],
    [
      "swiper-4.png",
      "Royal elegance in lush garden, vibrant Jaipur block print sari.",
    ],
    [
      "swiper-5.png",
      "Royal elegance in lush garden, vibrant Jaipur block print sari.",
    ],
  ];

  return (
    <div id="home">
      <section className="home-swiper">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {images.map((item, index) => (
            <SwiperSlide className="indieWare-swiper">
              <div className="image-container">
                <img src={`images/${item[0]}`} alt={item[0]} />
                <div className="overlay">
                  <p>{item[1]}</p>
                  <button type="button" className="btn btn-outline-primary">
                    Shop now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="new-arrivals">
        <div className="container-xxl">
          <div className="row justify-content-center mb-2">
            <span>Our latest and recent designs</span>
          </div>
          <div className="row justify-content-center">
            <h3>New Arrivals</h3>
          </div>
          <div className="row">
            {productData &&
              productData
                .slice(0, 4)
                .map((item, index) => createProduct(item, index))}
          </div>
        </div>
      </section>
      <section className="block-printing-intro">
        <div className="container-xxl">
          <div className="row">
            <div className="image-container">
              <img src="/images/swiper-0.png" alt="about us banner" />
              <div className="overlay">
                <p>What is Block Printing</p>
                <span>
                  Traditional Indian textile printing technique that has been
                  practiced for centuries in the region of Jaipur, Rajasthan.
                  This art form is renowned for its unique designs, vibrant
                  colors, and intricate detailing
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured">
        <div className="container-xxl">
          <div className="row justify-content-center mb-2">
            <span>Our featured block prints</span>
          </div>
          <div className="row justify-content-center">
            <h3>Shops best of world</h3>
          </div>
          <div className="row">
            {productData &&
              productData
                .slice(0, 4)
                .map((item, index) => createProduct(item, index))}
          </div>
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
