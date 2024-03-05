import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ICinemaProps } from 'src/shared/types';
import styles from './CinemaListItem.module.css';

interface ICinemaListItemProps {
  cinema: ICinemaProps;
  category: string;
}

export const CinemaListItem: FC<ICinemaListItemProps> = ({
  category,
  cinema,
}) => (
  <li>
    <Link to={`/${category}/${cinema.id}`}>
      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <img
            src={cinema.poster.url}
            alt={cinema.name}
            className={styles.image}
          />
          <div className={styles.content}>
            <div>{cinema.year}</div>
            <div>{cinema.name}</div>
          </div>
        </div>
      </div>
    </Link>
  </li>
);