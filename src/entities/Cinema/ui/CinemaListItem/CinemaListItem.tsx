import { Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IWatchability } from 'src/shared/types';
import styles from './CinemaListItem.module.css';

export const CinemaListItem: FC<IWatchability> = ({ logo, name, url }) => (
  <Link to={url} target="_blank" className={styles.link}>
    <img src={logo.url} style={{ width: '30px', height: '30px' }} />
    <Typography color="white">{name}</Typography>
  </Link>
);
