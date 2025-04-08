import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode,Navigation , Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import '../../assets/scss/components/ActivityLog/LogSlider.scss'
import Image from '../UI/Image';

const LogSlider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
    <div className="slider-main">
    <Swiper
        spaceBetween={10}
        navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode,Navigation, Thumbs]}
        className="singleSlider"
      >
        <SwiperSlide>
          <Image src="/images/logs/lg1.png" alt="slider-img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/logs/lg2.png" alt="slider-img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/logs/lg3.png" alt="slider-img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/logs/lg4.png" alt="slider-img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/logs/lg1.png" alt="slider-img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/logs/lg2.png" alt="slider-img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/logs/lg3.png" alt="slider-img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/logs/lg4.png" alt="slider-img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/logs/lg1.png" alt="slider-img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/logs/lg2.png" alt="slider-img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/logs/lg3.png" alt="slider-img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/logs/lg4.png" alt="slider-img" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={12}
        spaceBetween={15}
        freeMode={true}
        modules={[FreeMode, Navigation, Thumbs]}
        navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        }}
        breakpoints={{
            0: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 5,
            },
            1200: {
                slidesPerView: 6,
            },
            1400: {
                slidesPerView: 8,
            },
            1444: {
                slidesPerView: 10,
            },
            1599: {
                slidesPerView: 13,
            },
        }}
        className="multiSlider"
      >
        <SwiperSlide>
          <Image src="/images/logs/sm1.png" alt="slider-thumb" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/logs/sm2.png" alt="slider-thumb" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/logs/sm3.png" alt="slider-thumb" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/logs/sm4.png" alt="slider-thumb" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/logs/sm1.png" alt="slider-thumb" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/logs/sm2.png" alt="slider-thumb" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/logs/sm3.png" alt="slider-thumb" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/logs/sm4.png" alt="slider-thumb" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/logs/sm1.png" alt="slider-thumb" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/logs/sm2.png" alt="slider-thumb" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/logs/sm3.png" alt="slider-thumb" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/logs/sm4.png" alt="slider-thumb" />
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  )
}

export default LogSlider