import { Typography } from '@mui/material';
import { observer } from 'mobx-react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useRootData } from 'src/shared/lib/hooks/useRootData';
import styles from './FlistRowListItem.module.css';

type FlistNameType = 'Год выхода' | 'Страна' | 'Категории' | 'Профессия';

type FilstTextMapper = Record<FlistNameType, string>;

const flistTextMapper: FilstTextMapper = {
  'Год выхода': '&year=',
  Страна: '&countries.name=',
  Категории: '&genres.name=',
  Профессия: '&persons.profession=',
};

interface IFlistRowProps {
  value: string | number;
  name: number | string;
}

export const FlistRowListItem: FC<IFlistRowProps> = observer(
  ({ value, name }) => {
    const { searchMovieByQuery } = useRootData(
      (store) => store.searchMovieStore,
    );

    if (
      name === 'Год выхода' ||
      name === 'Страна' ||
      name === 'Категории' ||
      name === 'Профессия'
    ) {
      return (
        <Link
          className={styles.item}
          to="/search-result"
          onClick={() =>
            searchMovieByQuery(`${flistTextMapper[name]}${value}`, 1)
          }
        >
          <Typography color="primary">{value}</Typography>
        </Link>
      );
    }

    return <Typography color="white">{value}</Typography>;
  },
);
