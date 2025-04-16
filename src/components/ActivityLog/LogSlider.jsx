import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import '../../assets/scss/components/ActivityLog/LogSlider.scss';
import Image from '../UI/Image';
import { useDispatch, useSelector } from 'react-redux';
import { getUserSlider } from '../../utils/redux/slice/userSlider';

const LogSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const dispatch = useDispatch();

  const { data, isLoading, error } = useSelector(state => state.userSlider);

  useEffect(() => {
    dispatch(getUserSlider());
  }, [dispatch])
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
          modules={[FreeMode, Navigation, Thumbs]}
          className="singleSlider"
        >
          {data?.map((value) => {
            const { id, mainImg, thumbImg } = value;
            return (
              <SwiperSlide key={id}>
                <Image src={mainImg} alt="slider-img" />
              </SwiperSlide>
            )
          })}
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
          {data?.map((value) => {
            const { id, thumbImg } = value;
            return (
              <SwiperSlide key={id}>
                <Image src={thumbImg} alt="slider-thumb" />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </>
  )
}

export default LogSlider