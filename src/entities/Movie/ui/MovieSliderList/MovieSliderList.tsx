import { FC } from 'react';
import { SwiperSlide } from 'swiper/react';
import { MovieListItem } from '../MovieListItem/MovieListItem';
import 'swiper/css/navigation';
import 'swiper/css';
import useResize from 'src/shared/hooks/useResize';
import { IMovieListProps } from '../MovieList/MovieList';
import { configSwiperMainPage } from 'src/shared/const/swiper';
import { SwiperAction } from 'src/widgets/SwiperAction';

export const MovieSliderList: FC<IMovieListProps> = ({ movieList }) => {
  const [width] = useResize();

  return (
    <SwiperAction config={configSwiperMainPage}>
      <ul>
        {movieList.map((movie, index) => (
          <SwiperSlide key={index}>
            <MovieListItem movie={movie} isSwiper={width < 600} />
          </SwiperSlide>
        ))}
      </ul>
    </SwiperAction>
  );
};
