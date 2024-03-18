import { FC } from 'react';
import { IMovieProps } from 'src/shared/types';
import { MovieListItem } from '../MovieListItem/MovieListItem';
import styles from './MovieList.module.css';

export interface IMovieListProps {
  movieList: IMovieProps[];
}

export const MovieList: FC<IMovieListProps> = ({ movieList }) => {
  if (!movieList) {
    return null;
  }

  return (
    <ul className={styles.wrapper}>
      {movieList.map((movie) => (
        <MovieListItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};
