import { PlayCircle } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { observer } from 'mobx-react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IMovieProps } from 'src/shared/types';
import { MovieRating } from 'src/shared/ui/MovieRating';
import { Year } from 'src/shared/ui/Year';
import FilmNotFound from 'src/shared/assets/images/film-not-found.png';
import styles from './MovieListItem.module.css';
import { MyImage } from 'src/widgets/MyImage';

interface IMovieListItemProps {
  movie: IMovieProps;
  isSwiper?: boolean;
}

export const MovieListItem: FC<IMovieListItemProps> = observer(
  ({ movie, isSwiper }) => {
    const kinopoisk =
      movie.rating &&
      movie.rating.kp !== undefined &&
      movie.rating.kp !== null &&
      movie.rating.kp > 0 &&
      movie.rating.kp;

    const imdb =
      movie.rating &&
      movie.rating.kp !== undefined &&
      movie.rating.kp !== null &&
      movie.rating.kp > 0 &&
      movie.rating.kp;

    return (
      <li>
        <Link to={`/movie?movieId=${movie.id}`}>
          <div
            className={
              isSwiper ? `${styles.wrapper} ${styles.slide}` : styles.wrapper
            }
          >
            <div className={styles.imageWrapper}>
              <MyImage
                src={movie?.poster?.previewUrl}
                placeholderSrc={FilmNotFound}
                className={styles.image}
                alt={movie.name}
              />
            </div>
            <div className={styles.content}>
              <Year year={movie.year} />
              <div>
                <Typography fontSize="16px" className={styles.text}>
                  {movie.name}
                </Typography>
                <div className={styles.rating}>
                  {kinopoisk && (
                    <MovieRating
                      name="кп"
                      rating={movie.rating.kp}
                      color="#f60"
                    />
                  )}
                  {imdb && (
                    <MovieRating
                      name="imdb"
                      rating={movie.rating.imdb}
                      color="#fc0"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className={styles.play}>
              <PlayCircle sx={{ color: '#ea80fc', fontSize: 50 }} />
            </div>
          </div>
        </Link>
      </li>
    );
  },
);
