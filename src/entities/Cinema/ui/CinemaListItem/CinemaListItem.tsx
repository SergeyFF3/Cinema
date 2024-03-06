import { PlayCircle } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useRootData } from 'src/shared/lib/hooks/useRootData';
import { ICinemaProps } from 'src/shared/types';
import { Rating } from 'src/shared/ui/Rating';
import { Year } from 'src/shared/ui/Year';
import styles from './CinemaListItem.module.css';

interface ICinemaListItemProps {
  cinema: ICinemaProps;
  category: string;
}

export const CinemaListItem: FC<ICinemaListItemProps> = ({
  category,
  cinema,
}) => {
  const { getCinemaById } = useRootData((store) => store.cinemaStore);

  return (
    <li onClick={() => getCinemaById(String(cinema.id))}>
      <Link to={`/${category}/${cinema.id}`}>
        <div className={styles.wrapper}>
          <div className={styles.imageWrapper}>
            <img
              src={cinema.poster.url}
              alt={cinema.name}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <Year year={cinema.year} />
            <div>
              <Typography fontSize="16px" className={styles.text}>
                {cinema.name}
              </Typography>
              <div className={styles.rating}>
                <Rating name="кп" rating={cinema.rating.kp} color="#f60" />
                <Rating name="imdb" rating={cinema.rating.imdb} color="#fc0" />
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
};
