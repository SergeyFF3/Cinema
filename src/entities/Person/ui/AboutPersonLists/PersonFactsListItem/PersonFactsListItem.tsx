import { Typography } from '@mui/material';
import { FC } from 'react';

export const PersonFactsListItem: FC<{ value: string }> = ({ value }) => (
  <li>
    <Typography color="gray" marginBottom="10px">
      {value}
    </Typography>
  </li>
);
