import { Typography } from '@mui/material';
import { FC } from 'react';
import { IMovieProps } from 'src/shared/types';
import { FlistRow } from 'src/shared/ui/FlistRow';
import { MovieRating } from 'src/shared/ui/MovieRating';
import styles from './AboutMovie.module.css';
import { Year } from 'src/shared/ui/Year';
import useResize from 'src/shared/hooks/useResize';

export const AboutMovie: FC<IMovieProps> = (props) => {
  const {
    ageRating,
    alternativeName,
    countries,
    description,
    genres,
    name,
    poster,
    rating,
    year,
  } = props;

  const [width] = useResize();
  const movieTitle = `${name} (${year}) смотреть онлайн`;

  return (
    <section className={styles.wrapper}>
      <div className={styles.column}>
        <div className={styles.image}>
          <img src={poster.url} alt={name} />
          <Year year={year} />
        </div>
      </div>
      <div className={styles.column}>
        {name && (
          <Typography
            fontSize="20px"
            color="gray"
            textAlign={width > 850 ? 'left' : 'center'}
          >
            {movieTitle}
          </Typography>
        )}
        <div className={styles.description}>
          <Typography color="white">{description}</Typography>
        </div>
        <div className={styles.rating}>
          <span style={{ display: 'flex' }}>
            <span style={{ marginRight: '5px' }}>
              <MovieRating name="кп" rating={rating.kp} color="#f60" />
            </span>
            <MovieRating name="imdb" rating={rating.imdb} color="#fc0" />
          </span>
          {width > 400 && (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <FlistRow name="Рекомендуемый возраст" value={ageRating} />
              <span style={{ color: 'white' }}>+</span>
            </div>
          )}
        </div>
        <FlistRow name="Год выхода" value={year} />
        <FlistRow name="Страна" value={countries} />
        <FlistRow name="Оригинальное название" value={alternativeName} />
        <FlistRow name="Категории" value={genres} />
      </div>
    </section>
  );
};
