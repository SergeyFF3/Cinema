import styles from './Year.module.css';
import { Typography } from '@mui/material';

export const Year = ({ year }: { year: number }) => (
  <span className={styles.label}>
    <Typography className={styles.year}>{year}</Typography>
  </span>
);
