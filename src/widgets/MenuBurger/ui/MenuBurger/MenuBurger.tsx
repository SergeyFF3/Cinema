import { Drawer } from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './MenuBurger.module.css';
import { MenuBurgerList } from '../MenuBurgerList';

export const MenuBurger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.menuBurger}>
      <span onClick={toggleDrawer}>
        <MenuIcon color="primary" />
      </span>
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer}>
        <MenuBurgerList onToggle={toggleDrawer} />
      </Drawer>
    </div>
  );
};
