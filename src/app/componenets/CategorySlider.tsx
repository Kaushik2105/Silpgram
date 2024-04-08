"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import styles from "./CategorySlidercss.module.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function ShopByCategorySlider() {
  return (
    <>
      <h3 className={styles.header}>Shop By Category</h3>
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 6,
          },
          650: {
            slidesPerView: 4,
          },
        }}
        modules={[Pagination]}
        className={styles.mySwiper}
      >
        <SwiperSlide className={styles.mySwiperSlide}>
          <a className={styles.link} href="#">
            <img className={styles.image} src="/productslider/1.png" alt="prodimg" />
            <div className={styles.desc}>Kitchenware</div>
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles.mySwiperSlide}>
          <a className={styles.link} href="#">
            <img className={styles.image} src="/productslider/2.jpeg" alt="prodimg" />
            <div className={styles.desc}>Paintings</div>
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles.mySwiperSlide}>
          <a className={styles.link} href="#">
            <img className={styles.image} src="/productslider/3.jpeg" alt="prodimg" />
            <div className={styles.desc}>Paintings</div>
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles.mySwiperSlide}>
          <a className={styles.link} href="#">
            <img className={styles.image} src="/productslider/4.jpeg" alt="prodimg" />
            <div className={styles.desc}>Paintings</div>
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles.mySwiperSlide}>
          <a className={styles.link} href="#">
            <img className={styles.image} src="/productslider/5.jpeg" alt="prodimg" />
            <div className={styles.desc}>Paintings</div>
          </a>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
