import { FC, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MovieListItem } from '../MovieListItem/MovieListItem';
import styles from './MovieSliderList.module.css';
import 'swiper/css/navigation';
import 'swiper/css';
import { Button } from '@mui/material';
import useResize from 'src/shared/hooks/useResize';
import { IMovieListProps } from '../MovieList/MovieList';
import { configSwiperMainPage } from 'src/shared/const/swiper';

export const MovieSliderList: FC<IMovieListProps> = ({ movieList }) => {
  const [width] = useResize();
  const swiperButtonPrevRef = useRef<HTMLButtonElement | null>(null);
  const swiperButtonNextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <Swiper
        {...configSwiperMainPage}
        navigation={{
          prevEl: swiperButtonPrevRef.current,
          nextEl: swiperButtonNextRef.current,
        }}
      >
        <ul className={styles.wrapper}>
          {movieList.map((movie, index) => (
            <SwiperSlide key={index}>
              <MovieListItem movie={movie} isSwiper={width < 600} />
            </SwiperSlide>
          ))}
        </ul>
        <div className={styles.buttonWrapper}>
          <Button ref={swiperButtonPrevRef} className={styles.prev}>
            Назад
          </Button>
          <Button ref={swiperButtonNextRef} className={styles.next}>
            Дальше
          </Button>
        </div>
      </Swiper>
    </>
  );
};
