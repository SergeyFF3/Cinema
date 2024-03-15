import { Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IPerson } from 'src/shared/types';
import styles from './PersonListItem.module.css';

export const PersonListItem: FC<IPerson> = (props) => {
  const { id, description, enName, name, photo } = props;

  return (
    <Link to={`/person/${id}`} className={styles.item}>
      <img className={styles.image} src={photo} />
      <Typography color="white" textAlign="center">
        {name}
      </Typography>
      <Typography color="white" textAlign="center">
        {enName}
      </Typography>
      <Typography color="gray" textAlign="center">
        {description}
      </Typography>
    </Link>
  );
};
