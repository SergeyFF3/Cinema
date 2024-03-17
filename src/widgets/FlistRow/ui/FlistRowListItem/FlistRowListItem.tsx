import { Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { SEARCH_RESULT_PAGE_QUERY_LOCALSTORAGE_KEY } from 'src/shared/const/localstorage';
import { setDataInLocalStorage } from 'src/shared/lib/setDataInLocalStorage';
import styles from './FlistRowListItem.module.css';

type FlistNameType = 'Год выхода' | 'Страна' | 'Категории';

type FilstTextMapper = Record<FlistNameType, string>;

const flistTextMapper: FilstTextMapper = {
  'Год выхода': 'year=',
  Страна: 'countries.name=',
  Категории: 'genres.name=',
};

interface IFlistRowProps {
  value: string | number;
  name: number | string;
}

export const FlistRowListItem: FC<IFlistRowProps> = ({ value, name }) => {
  if (name === 'Год выхода' || name === 'Страна' || name === 'Категории') {
    return (
      <Link
        className={styles.item}
        to="/search-result"
        onClick={() =>
          setDataInLocalStorage(
            SEARCH_RESULT_PAGE_QUERY_LOCALSTORAGE_KEY,
            flistTextMapper[name] + `${value}`,
          )
        }
      >
        <Typography color="primary">{value}</Typography>
      </Link>
    );
  }

  return <Typography color="white">{value}</Typography>;
};
