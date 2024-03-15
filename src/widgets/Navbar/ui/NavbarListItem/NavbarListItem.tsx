import { Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { INavbarItem } from '../../model/types/navbar';

export const NavbarListItem: FC<INavbarItem> = ({ path, text }) => (
  <Link to={path}>
    <Typography color="white" fontSize="16px">
      {text}
    </Typography>
  </Link>
);
