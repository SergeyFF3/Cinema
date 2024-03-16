import { Typography } from '@mui/material';
import { FC } from 'react';
import { IOnlyValueProp } from 'src/entities/Person';
import { IOnlyNames } from 'src/shared/types';
import styles from './FlistRow.module.css';

interface IFlistRowProps {
  name: string;
  value: string | number | IOnlyNames[] | IOnlyValueProp[];
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
            {value.map((item, index) => (
              <li key={index} className={styles.item}>
                <Typography color="white">
                  {typeof item === 'object' && 'name' in item
                    ? item.name
                    : item.value}
                  {index < value.length - 1 && ','}
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
