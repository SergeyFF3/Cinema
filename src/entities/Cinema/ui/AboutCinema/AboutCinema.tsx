import { Typography } from '@mui/material';
import { FC } from 'react';
import { ICinemaProps } from 'src/shared/types';
import { FlistRow } from 'src/shared/ui/FlistRow';
import { CinemaRating } from 'src/shared/ui/CinemaRating';
import styles from './AboutCinema.module.css';
import { Year } from 'src/shared/ui/Year';

export const AboutCinema: FC<ICinemaProps> = (props) => {
  const {
    ageRating,
    alternativeName,
    countries,
    description,
    genres,
    movieLength,
    name,
    poster,
    rating,
    year,
  } = props;
  const cinemaTitle = `${name} (${year}) смотреть онлайн`;

  return (
    <section className={styles.wrapper}>
      <div className={styles.column}>
        <div className={styles.image}>
          <img src={poster.url} alt={name} />
          <Year year={year} />
        </div>
      </div>
      <div className={styles.column}>
        <Typography fontSize="20px" color="gray">
          {cinemaTitle}
        </Typography>
        <div className={styles.description}>
          <Typography color="white">{description}</Typography>
        </div>
        <div className={styles.rating}>
          <span style={{ display: 'flex' }}>
            <span style={{ marginRight: '5px' }}>
              <CinemaRating name="кп" rating={rating.kp} color="#f60" />
            </span>
            <CinemaRating name="imdb" rating={rating.imdb} color="#fc0" />
          </span>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FlistRow name="Рекомендуемый возраст" value={ageRating} />
            <span style={{ color: 'white' }}>+</span>
          </div>
        </div>
        <FlistRow name="Год выхода" value={year} />
        <FlistRow name="Страна" value={countries} />
        <FlistRow name="Оригинальное название" value={alternativeName} />
        <FlistRow name="Категории" value={genres} />
      </div>
    </section>
  );
};
