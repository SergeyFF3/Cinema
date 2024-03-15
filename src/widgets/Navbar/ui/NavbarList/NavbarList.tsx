import { FC } from 'react';
import { nvabarListItems } from '../../model/selectors/getNavbarItems';
import styles from '../Navbar/Navbar.module.css';
import { NavbarListItem } from '../NavbarListItem';

export const NavbarList: FC = () => (
  <menu className={styles.menu}>
    <ul className={styles.list}>
      {nvabarListItems.map((item) => (
        <li key={item.path} className={styles.item}>
          <NavbarListItem {...item} />
        </li>
      ))}
    </ul>
  </menu>
);
