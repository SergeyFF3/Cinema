import { Pagination as PaginationRounded } from '@mui/material';
import Stack from '@mui/material/Stack';
import { FC } from 'react';

interface IPaginationProps {
  page: number;
  pageCount: number;
  onChange: (num: number) => void;
}

export const Pagination: FC<IPaginationProps> = ({
  page,
  pageCount,
  onChange,
}) => {
  if (!Boolean(pageCount)) {
    return null;
  }

  return (
    <Stack spacing={2}>
      <PaginationRounded
        sx={{ display: 'flex', justifyContent: 'center' }}
        size="large"
        page={page}
        count={pageCount}
        onChange={(_, num) => onChange(num)}
        variant="outlined"
        shape="rounded"
      />
    </Stack>
  );
};
