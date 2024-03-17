import { Typography } from '@mui/material';
import { FC } from 'react';
import { IOnlyValueProp } from 'src/entities/Person';
import { IOnlyNames } from 'src/shared/types';
import { FlistRowList } from '../FlistRowList';
import { FlistRowListItem } from '../FlistRowListItem';
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
          <FlistRowList name={name} value={value} />
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
          <FlistRowListItem name={name} value={value} />
        </div>
      </div>
    );
  }

  return null;
};
