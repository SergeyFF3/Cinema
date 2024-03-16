import { FC } from 'react';
import { IPersonMovie } from '../../../model/types/person';
import { PersonMoviesListItem } from '../PersonMoviesListItem';
import styles from './PersonMoviesList.module.css';

export const PersonMoviesList: FC<{ movies: IPersonMovie[] }> = ({
  movies,
}) => (
  <ul className={styles.list}>
    {movies.map((movie) => (
      <li key={movie.id}>
        <PersonMoviesListItem {...movie} />
      </li>
    ))}
  </ul>
);
