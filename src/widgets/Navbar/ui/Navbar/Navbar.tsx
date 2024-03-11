import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { nvabarListItems } from '../../model/selectors/getNavbarItems';
import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <menu className={styles.menu}>
        <div className={styles.logo}>
          <Link to="/" className={styles.logo}>
            <Typography fontSize="20px">Cine[Ma]tthew</Typography>
          </Link>
        </div>
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
    </div>
  );
};
