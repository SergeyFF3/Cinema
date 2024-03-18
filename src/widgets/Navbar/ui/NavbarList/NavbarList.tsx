import { FC } from 'react';
import { nvabarListItems } from '../../model/selectors/getNavbarItems';
import styles from '../Navbar/Navbar.module.css';
import { NavbarListItem } from '../NavbarListItem';

export const NavbarList: FC = () => (
  <nav className={styles.menu}>
    <ul className={styles.list}>
      {nvabarListItems.map((item) => (
        <li key={item.path} className={styles.item}>
          <NavbarListItem {...item} />
        </li>
      ))}
    </ul>
  </nav>
);
