import styles from './FlistRowList.module.css';
import { IOnlyValueProp } from 'src/entities/Person';
import { IOnlyNames } from 'src/shared/types';
import { FC } from 'react';
import { FlistRowListItem } from '../FlistRowListItem';

interface IFlistRowProps {
  name: string;
  value: IOnlyNames[] | IOnlyValueProp[];
}

export const FlistRowList: FC<IFlistRowProps> = ({ name, value }) => (
  <ul className={styles.list}>
    {value.map((item, index) => {
      return 'name' in item ? (
        <FlistRowListItem
          key={item.name}
          name={name}
          value={index < value.length - 1 ? `${item.name},` : item.name}
        />
      ) : (
        <FlistRowListItem
          key={item.value}
          name={name}
          value={index < value.length - 1 ? `${item.value}, ` : item.value}
        />
      );
    })}
  </ul>
);
