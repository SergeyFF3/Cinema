import { SwiperProps } from 'swiper/react';
import { Navigation } from 'swiper/modules';

export const configSwiperMainPage: SwiperProps = {
  speed: 500,
  spaceBetween: 10,
  slidesPerView: 2,
  modules: [Navigation],
  breakpoints: {
    '700': {
      slidesPerView: 4,
    },
    '450': {
      slidesPerView: 3,
    },
    '250': {
      slidesPerView: 2,
    },
  },
};
