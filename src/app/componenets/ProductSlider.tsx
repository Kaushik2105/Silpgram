"use client";

import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// The Card Of Slider
import ProductCard from "./Card";
// importing sample schema
import Product_schema from "../SampleSchema";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./ProductSlidercss.module.css";

// import required modules
import { Grid, Navigation, Pagination, Scrollbar } from "swiper/modules";

export default function ProductSlider() {
  return (
    <>
      <div className={styles.upper}>
        <h3 className={styles.header}>Deals of the day</h3>
        <a className={styles.anchor} href="#">
          <button className={styles.button}>View All</button>
        </a>
      </div>
      <Swiper
        modules={[Grid, Pagination, Navigation]}
        slidesPerView={2}
        spaceBetween={0}
        loop={true}
        grid={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          1024: {
            slidesPerView: 6,
          },
          650: {
            slidesPerView: 4,
          },
        }}
        className="mySwiper "
      >
        {Product_schema.map((product) => (
          <SwiperSlide className="mySwiperSlide">
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
