import { TextField } from '@mui/material';
import { Search as SearchIcon, Close } from '@mui/icons-material';
import styles from './SearchField.module.css';
import { useRootData } from 'src/shared/lib/hooks/useRootData';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';
import { FC } from 'react';
import useResize from 'src/shared/hooks/useResize';

export const SearchField: FC<{ onClose?: () => void }> = observer(
  ({ onClose }) => {
    const [width] = useResize();
    const navigate = useNavigate();
    const { setFirstPage, turnOnIsLoading } = useRootData(
      (store) => store.searchMovieStore,
    );
    const { searchValue, setNewSearchValue, changeSearchValue, removeValue } =
      useRootData((store) => store.searchFieldStore);

    const searchResultHandler = () => {
      turnOnIsLoading();
      setNewSearchValue(searchValue);
      setFirstPage();
      removeValue();
      navigate('/search-result');

      if (onClose) {
        onClose();
      }
    };

    const onKeyDownEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        searchResultHandler();
      }
    };

    const displaySearchIcon = () => {
      if (width > 850 && searchValue) {
        return (
          <span className={styles.icon} onMouseDown={removeValue}>
            <Close />
          </span>
        );
      }

      if (width > 850 && !searchValue) {
        return (
          <span className={styles.icon}>
            <SearchIcon />
          </span>
        );
      }

      if (width < 850 && !searchValue) {
        return (
          <span className={styles.iconMobile}>
            <SearchIcon />
          </span>
        );
      }

      if (width < 850 && searchValue) {
        return (
          <>
            <span className={styles.closeIconMobile} onMouseDown={removeValue}>
              <Close />
            </span>
            <span className={styles.iconMobile} onClick={searchResultHandler}>
              <SearchIcon />
            </span>
          </>
        );
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
        {displaySearchIcon()}
      </div>
    );
  },
);
