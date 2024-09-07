"use client";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import styles from './MainSlidecss.module.css';

// import required modules
import { Autoplay, Pagination, Navigation ,EffectFade } from 'swiper/modules';

export default function MainSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation,EffectFade ]}
        className={styles.mySwiper}
      >
        <SwiperSlide className={styles.mySwiperSlide}>
            <img  className={styles.image} src="./mainslider/1.jpeg"/>
        </SwiperSlide>
        <SwiperSlide className={styles.mySwiperSlide}>
            <img  className={styles.image} src="./mainslider/2.jpeg"/>
        </SwiperSlide>
        <SwiperSlide className={styles.mySwiperSlide}>
            <img  className={styles.image} src="./mainslider/3.jpeg"/>
        </SwiperSlide>
        <SwiperSlide className={styles.mySwiperSlide}>
            <img  className={styles.image} src="./mainslider/4.jpeg"/>
        </SwiperSlide>
        <SwiperSlide className={styles.mySwiperSlide}>
            <img  className={styles.image} src="./mainslider/5.jpeg"/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
