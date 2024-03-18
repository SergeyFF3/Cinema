import { Button, Typography } from '@mui/material';
import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SearchField } from 'src/features/searchField';
import useResize from 'src/shared/hooks/useResize';
import { useRootData } from 'src/shared/lib/hooks/useRootData';
import { MenuBurger } from 'src/widgets/MenuBurger';
import { NavbarList } from '../NavbarList';
import styles from './Navbar.module.css';

export const Navbar = observer(() => {
  const navigate = useNavigate();
  const [width] = useResize();
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  const { searchValue, setNewSearchValue, removeValue } = useRootData(
    (store) => store.searchFieldStore,
  );
  const { turnOnIsLoading, setFirstPage } = useRootData(
    (store) => store.searchMovieStore,
  );

  const stylesHeader = visible
    ? `${styles.header} ${styles.headerVisible}`
    : `${styles.header} ${styles.headerHidden}`;

  const redirectToSearchPage = () => {
    if (searchValue) {
      turnOnIsLoading();
      setNewSearchValue(searchValue);
      removeValue();
      setFirstPage();
      navigate('/search-result');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <header className={stylesHeader}>
      <div className={styles.wrapper}>
        <Link to="/" className={styles.logo}>
          <Typography fontSize={width < 850 ? '24px' : '20px'}>
            Cine[Ma]tthew
          </Typography>
        </Link>
        <NavbarList />
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
