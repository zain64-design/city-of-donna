import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode,Navigation , Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import '../../assets/scss/components/ActivityLog/LogSlider.scss';
import Image from '../UI/Image';
import lg1 from '../../../public/images/logs/lg1.png';
import lg2 from '../../../public/images/logs/lg2.png';
import lg3 from '../../../public/images/logs/lg3.png';
import lg4 from '../../../public/images/logs/lg4.png';

import sm1 from '../../../public/images/logs/sm1.png';
import sm2 from '../../../public/images/logs/sm2.png';
import sm3 from '../../../public/images/logs/sm3.png';
import sm4 from '../../../public/images/logs/sm4.png';

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
          <Image src={lg1} alt="slider-img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={lg2} alt="slider-img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={lg3} alt="slider-img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={lg4} alt="slider-img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={lg1} alt="slider-img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={lg2} alt="slider-img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={lg3} alt="slider-img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={lg4} alt="slider-img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={lg1} alt="slider-img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={lg2} alt="slider-img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={lg3} alt="slider-img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={lg4} alt="slider-img" />
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
          <Image src={sm1} alt="slider-thumb" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sm2} alt="slider-thumb" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sm3} alt="slider-thumb" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sm4} alt="slider-thumb" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sm1} alt="slider-thumb" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sm2} alt="slider-thumb" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sm3} alt="slider-thumb" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sm4} alt="slider-thumb" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sm1} alt="slider-thumb" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sm2} alt="slider-thumb" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sm3} alt="slider-thumb" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sm4} alt="slider-thumb" />
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  )
}

export default LogSlider