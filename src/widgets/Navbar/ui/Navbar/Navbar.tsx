import { Button, Typography } from '@mui/material';
import { observer } from 'mobx-react';
import { Link, useNavigate } from 'react-router-dom';
import { SearchField } from 'src/features/searchField';
import { useRootData } from 'src/shared/lib/hooks/useRootData';
import { MenuBurger } from 'src/widgets/MenuBurger';
import { nvabarListItems } from '../../model/selectors/getNavbarItems';
import styles from './Navbar.module.css';

export const Navbar = observer(() => {
  const navigate = useNavigate();
  const { searchValue, setNewSearchValue, removeValue } = useRootData(
    (store) => store.searchFieldStore,
  );
  const { turnOnIsLoading, setFirstPage } = useRootData(
    (store) => store.searchMovieStore,
  );

  const redirectToSearchPage = () => {
    if (searchValue) {
      turnOnIsLoading();
      setNewSearchValue(searchValue);
      removeValue();
      setFirstPage();
      navigate('/search-result');
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link to="/" className={styles.logo}>
          <Typography fontSize="20px">Cine[Ma]tthew</Typography>
        </Link>
        <menu className={styles.menu}>
          <ul className={styles.list}>
            {nvabarListItems.map((item) => (
              <li key={item.path} className={styles.item}>
                <Link to={item.path}>
                  <Typography color="white" fontSize="16px">
                    {item.text}
                  </Typography>
                </Link>
              </li>
            ))}
          </ul>
        </menu>
        <div className={styles.searchWrapper}>
          <SearchField />
        </div>
        <div className={styles.buttonWrapper}>
          <Button onClick={redirectToSearchPage} variant="contained">
            <Typography sx={{ color: 'white' }}>Найти</Typography>
          </Button>
        </div>
        <MenuBurger />
      </div>
    </header>
  );
});
