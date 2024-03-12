import { Button, Typography } from '@mui/material';
import { observer } from 'mobx-react';
import { Link, useNavigate } from 'react-router-dom';
import { SearchField } from 'src/features/SearchField';
import { useRootData } from 'src/shared/lib/hooks/useRootData';
import { nvabarListItems } from '../../model/selectors/getNavbarItems';
import styles from './Navbar.module.css';

export const Navbar = observer(() => {
  const { searchCinemaByName } = useRootData((store) => store.findCinemaStore);
  const { searchValue } = useRootData((store) => store.searchStore);
  const navigate = useNavigate();

  const redirectToSearchPage = () => {
    searchCinemaByName(searchValue);
    navigate('/search-result');
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
        <SearchField />
        <span className={styles.button}>
          <Button onClick={redirectToSearchPage} variant="contained">
            Найти
          </Button>
        </span>
      </div>
    </header>
  );
});
