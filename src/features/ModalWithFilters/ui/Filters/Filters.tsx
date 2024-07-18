import { Box, Button, Typography, Modal } from '@mui/material';
import { useState } from 'react';
import {
  filterTypes,
  filterCountries,
  filterGenres,
  filterYears,
} from '../../model/selectors/getFiltersCategories';
import { CurrentFilters } from '../CurrentFilters';
import { FiltersList } from '../FiltersList';
import styles from './Filters.module.css';

const filtersData = {
  type: filterTypes,
  countries: filterCountries,
  genres: filterGenres,
  years: filterYears,
};

export const Filters = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>Фильтры</Button>
      <Modal open={open} onClose={handleClose}>
        <Box className={styles.box}>
          <Typography variant="h6" color="white" textAlign="center">
            Выберите фильтры для поиска
          </Typography>
          <CurrentFilters />
          <FiltersList filters={filtersData.type} category="Тип" />
          <FiltersList filters={filtersData.countries} category="Страна" />
          <FiltersList filters={filtersData.genres} category="Жанр" />
          <FiltersList filters={filtersData.years} category="Год" />
        </Box>
      </Modal>
    </>
  );
};
