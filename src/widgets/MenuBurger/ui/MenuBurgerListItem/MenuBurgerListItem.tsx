import { ListItemButton, Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { INavbarItem } from 'src/widgets/Navbar';

export const MenuBurgerListItem: FC<INavbarItem> = ({ path, text }) => (
  <ListItemButton>
    <Link to={path}>
      <Typography sx={{ color: 'white' }}>{text}</Typography>
    </Link>
  </ListItemButton>
);
