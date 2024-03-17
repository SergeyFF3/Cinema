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
  const movieTitle = `${name} (${year}) смотреть онлайн`;
  const currentStatus = textMapper[status];

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
        </div>
        <FlistRow name="Год выхода" value={year} />
        <FlistRow name="Страна" value={countries} />
        <FlistRow name="Оригинальное название" value={alternativeName} />
        <FlistRow
          name="Рекомендуемый возраст"
          value={ageRating && `${ageRating}+`}
        />
        <FlistRow name="Категории" value={genres} />
        {isSeries && <FlistRow name="Статус сериала" value={currentStatus} />}
        {watchability.items && watchability.items.length > 0 && (
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
