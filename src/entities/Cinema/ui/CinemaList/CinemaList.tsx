import { FC } from 'react';
import { ICinemaProps } from 'src/shared/types';
import { CinemaListItem } from '../CinemaListItem/CinemaListItem';
import styles from './CinemaList.module.css';

interface ICinemaListProps {
  cinemaList: ICinemaProps[];
  category: string;
}

export const CinemaList: FC<ICinemaListProps> = ({ cinemaList, category }) => {
  if (!cinemaList) {
    return null;
  }

  return (
    <ul className={styles.wrapper}>
      {cinemaList.map((cinema) => (
        <CinemaListItem key={cinema.id} cinema={cinema} category={category} />
      ))}
    </ul>
  );
};
