import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import { FC } from 'react';
import { IMovieProps, Statuses } from 'src/shared/types';

import { MovieRating } from 'src/shared/ui/MovieRating';
import styles from './AboutMovie.module.css';
import { Year } from 'src/shared/ui/Year';
import useResize from 'src/shared/hooks/useResize';
import { CinemaList } from 'src/entities/Cinema';
import { FlistRow } from 'src/widgets/FlistRow';
import { MyImage } from 'src/widgets/MyImage';
import FilmNotFound from 'src/shared/assets/images/film-not-found.png';

type TextMapper = Record<Statuses, string>;

const textMapper: TextMapper = {
  announced: 'Анонсирован',
  completed: 'Завершен',
  filming: 'Снимается',
  'pre-production': 'Готовится к производству',
  'post-production': 'Окончательный монтаж',
};

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
    status,
    isSeries,
    watchability,
  } = props;

  const [width] = useResize();
  const movieYear = year ? ` (${year})` : '';
  const currentStatus = textMapper[status];
  const movieRating = { ...rating };
  const movieAgeRating = ageRating ? `${ageRating}+` : '-';

  const movieTitle = name
    ? `${name}${movieYear} смотреть онлайн`
    : 'Название отсутствует';

  const movieDescription = description ? (
    <Typography color="white">{description}</Typography>
  ) : (
    <Typography color="white">Описание отсутствует</Typography>
  );

  return (
    <section className={styles.wrapper}>
      <div className={styles.column}>
        <div className={styles.image}>
          <MyImage
            src={poster?.url}
            placeholderSrc={FilmNotFound}
            className={styles.image}
            alt={name}
          />
          {year && <Year year={year} />}
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

        <div className={styles.description}>{movieDescription}</div>

        <div className={styles.rating}>
          <span style={{ display: 'flex' }}>
            <span style={{ marginRight: '5px' }}>
              {movieRating && movieRating.kp > 0 && (
                <MovieRating name="кп" rating={movieRating.kp} color="#f60" />
              )}
            </span>
            {movieRating && movieRating.imdb > 0 && (
              <MovieRating name="imdb" rating={movieRating.imdb} color="#fc0" />
            )}
          </span>
        </div>

        <FlistRow name="Год выхода" value={year || '-'} />
        <FlistRow name="Страна" value={countries || '-'} />
        <FlistRow name="Оригинальное название" value={alternativeName || '-'} />
        <FlistRow name="Рекомендуемый возраст" value={movieAgeRating} />
        <FlistRow name="Категории" value={genres || '-'} />
        {isSeries && currentStatus && (
          <FlistRow name="Статус сериала" value={currentStatus} />
        )}

        {Boolean(watchability?.items.length) && (
          <Accordion>
            <AccordionSummary expandIcon={<ArrowDropDown />}>
              <Typography>Где смотреть</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <CinemaList cinemas={watchability.items} />
            </AccordionDetails>
          </Accordion>
        )}
      </div>
    </section>
  );
};
