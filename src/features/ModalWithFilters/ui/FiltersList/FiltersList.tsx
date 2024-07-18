import { FC } from 'react';
import { FilterMapper } from '../../model/types/filtersTypes';
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Chip,
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { observer } from 'mobx-react';
import { useRootData } from 'src/shared/lib/hooks/useRootData';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface IFiltersList {
  filters: string[];
  category: string;
}

export const FiltersList: FC<IFiltersList> = observer(
  ({ filters, category }) => {
    const { currentFilters, addFilter } = useRootData(
      (store) => store.filtersStore,
    );
    const filterMapper: FilterMapper = {
      Тип: 'type',
      Страна: 'countries',
      Жанр: 'genres',
      Год: 'year',
    };

    const handleChange = (e: SelectChangeEvent<typeof currentFilters.type>) => {
      const {
        target: { value },
      } = e;

      const test = typeof value === 'string' ? value.split(',') : value;

      addFilter(category, test);
    };

    return (
      <Box>
        <FormControl fullWidth>
          <InputLabel>{category}</InputLabel>
          <Select
            multiple
            label={category}
            onChange={handleChange}
            value={filterMapper}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {filters.map((filter) => (
              <MenuItem key={filter} value={filter}>
                {filter}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    );
  },
);
