import { TextField } from '@mui/material';
import { Search as SearchIcon, Close } from '@mui/icons-material';
import styles from './SearchField.module.css';
import { useRootData } from 'src/shared/lib/hooks/useRootData';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';

export const SearchField = observer(() => {
  const navigate = useNavigate();
  const { searchCinemaByName } = useRootData((store) => store.findCinemaStore);
  const { changeSearchValue, removeValue, searchValue } = useRootData(
    (store) => store.searchStore,
  );

  const onKeyDownEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      searchCinemaByName(searchValue);
      navigate('/search-result');
    }
  };

  return (
    <div className={styles.wrapper}>
      <TextField
        type="text"
        className={styles.search}
        placeholder="Введите название"
        fullWidth
        size="small"
        value={searchValue}
        onChange={(e) => changeSearchValue(e)}
        onKeyDown={(e) => onKeyDownEnter(e)}
      />
      {searchValue ? (
        <span className={styles.icon} onMouseDown={removeValue}>
          <Close />
        </span>
      ) : (
        <span className={styles.icon}>
          <SearchIcon />
        </span>
      )}
    </div>
  );
});
