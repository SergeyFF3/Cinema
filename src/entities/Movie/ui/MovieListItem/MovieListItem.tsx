import { PlayCircle } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { observer } from 'mobx-react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useRootData } from 'src/shared/lib/hooks/useRootData';
import { IMovieProps } from 'src/shared/types';
import { MovieRating } from 'src/shared/ui/MovieRating';
import { Year } from 'src/shared/ui/Year';
import styles from './MovieListItem.module.css';

interface IMovieListItemProps {
  movie: IMovieProps;
  category: string;
}

export const MovieListItem: FC<IMovieListItemProps> = observer(
  ({ category, movie }) => {
    const { setMovieId } = useRootData((store) => store.movieStore);

    return (
      <li onClick={() => setMovieId(movie.id)}>
        <Link to={`/${category}/${movie.id}`}>
          <div className={styles.wrapper}>
            <div className={styles.imageWrapper}>
              <img
                className={styles.image}
                src={movie.poster.previewUrl}
                alt={movie.name}
                loading="lazy"
              />
            </div>
            <div className={styles.content}>
              <Year year={movie.year} />
              <div>
                <Typography fontSize="16px" className={styles.text}>
                  {movie.name}
                </Typography>
                <div className={styles.rating}>
                  <MovieRating
                    name="кп"
                    rating={movie.rating.kp}
                    color="#f60"
                  />
                  <MovieRating
                    name="imdb"
                    rating={movie.rating.imdb}
                    color="#fc0"
                  />
                </div>
              </div>
            </div>
            <div className={styles.play}>
              <PlayCircle sx={{ color: 'mediumpurple', fontSize: 50 }} />
            </div>
          </div>
        </Link>
      </li>
    );
  },
);
