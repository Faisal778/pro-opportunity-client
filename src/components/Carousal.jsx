import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import '../styles/swiperStyles.css'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import banner1 from '../assets/images/banner1.png';
import banner2 from '../assets/images/banner2.jpg'
import banner3 from '../assets/images/banner3.png';
import banner4 from '../assets/images/banner4.jpg';

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';


const Carousal = () => {
    return (
        <>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop ={true}
          coverflowEffect={{
            rotate: 80,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay = {{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[Autoplay, EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className='object-fit' src={banner1} />
          </SwiperSlide>
          <SwiperSlide>
          <img src={banner2} />
          </SwiperSlide>
          <SwiperSlide>
          <img src={banner3} />
          </SwiperSlide>
          <SwiperSlide>
          <img src={banner4} />
          </SwiperSlide>
         
        </Swiper>
      </>
    );
};

export default Carousal;