import { Typography } from '@mui/material';
import { FC } from 'react';
import { IOnlyNames } from 'src/shared/types';
import styles from './FlistRow.module.css';

interface IFlistRowProps {
  name: string;
  value: IOnlyNames[] | string | number;
}

export const FlistRow: FC<IFlistRowProps> = ({ name, value }) => {
  if (Array.isArray(value) && value.length > 0) {
    return (
      <div className={styles.label}>
        <div className={styles.column}>
          <Typography color="gray">{name}:</Typography>
        </div>
        <div className={styles.column}>
          <ul className={styles.list}>
            {value.map(({ name }, index) => (
              <li key={name} className={styles.item}>
                <Typography color="white">
                  {index < value.length - 1 ? `${name},` : name}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  if (typeof value === 'string' || typeof value === 'number') {
    return (
      <div className={styles.label}>
        <div className={styles.column}>
          <Typography color="gray">{name}:</Typography>
        </div>
        <div className={styles.column}>
          <Typography color="white">{value}</Typography>
        </div>
      </div>
    );
  }

  return null;
};
