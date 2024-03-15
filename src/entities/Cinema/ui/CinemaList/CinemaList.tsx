import { FC } from 'react';
import { IWatchability } from 'src/shared/types';
import { CinemaListItem } from '../CinemaListItem';
import styles from './CinemaList.module.css';

export const CinemaList: FC<{ cinemas: IWatchability[] }> = ({ cinemas }) => (
  <ul className={styles.menu}>
    {cinemas.map((cinema) => (
      <li key={cinema.name}>
        <CinemaListItem {...cinema} />
      </li>
    ))}
  </ul>
);
