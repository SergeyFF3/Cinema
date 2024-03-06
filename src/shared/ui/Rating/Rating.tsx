import { Typography } from '@mui/material';
import { FC } from 'react';

interface IRatingProps {
  name: string;
  rating: number;
  color: string;
}

export const Rating: FC<IRatingProps> = ({ name, rating, color }) => {
  const number = Math.floor(rating * 10) / 10;

  return (
    <div style={{ display: 'flex' }}>
      <Typography marginRight="3px" color={color}>
        {name.toUpperCase()}
      </Typography>
      <Typography color="white">{number}</Typography>
    </div>
  );
};
