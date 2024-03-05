import { FC, ReactNode } from 'react';
import styles from './Section.module.css';
import { Typography } from '@mui/material';

interface ISectionProps {
  title: string;
  children: ReactNode;
}

export const Section: FC<ISectionProps> = ({ title, children }) => (
  <section>
    <h1 className={styles.title}>
      <Typography>{title}</Typography>
    </h1>
    {children}
  </section>
);
