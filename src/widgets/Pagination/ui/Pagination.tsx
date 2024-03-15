import { Pagination as PaginationRounded } from '@mui/material';
import Stack from '@mui/material/Stack';
import { FC } from 'react';
import useResize from 'src/shared/hooks/useResize';

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
  const [width] = useResize();

  if (!Boolean(pageCount)) {
    return null;
  }

  return (
    <Stack spacing={2}>
      <PaginationRounded
        sx={{ display: 'flex', justifyContent: 'center' }}
        size={width > 470 ? 'large' : 'medium'}
        variant="outlined"
        shape="rounded"
        color="primary"
        page={page}
        count={pageCount}
        onChange={(_, num) => onChange(num)}
        hideNextButton={width < 470}
        hidePrevButton={width < 470}
      />
    </Stack>
  );
};
