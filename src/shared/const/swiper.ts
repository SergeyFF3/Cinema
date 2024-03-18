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

export const configSwiperMoviePage: SwiperProps = {
  speed: 500,
  spaceBetween: 10,
  slidesPerView: 2,
  modules: [Navigation],
  breakpoints: {
    '900': {
      slidesPerView: 7,
    },
    '700': {
      slidesPerView: 5,
    },
    '500': {
      slidesPerView: 4,
    },
    '400': {
      slidesPerView: 3,
    },
    '300': {
      slidesPerView: 2,
    },
  },
};
