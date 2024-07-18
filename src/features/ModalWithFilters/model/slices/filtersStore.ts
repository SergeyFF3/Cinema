import { makeAutoObservable } from 'mobx';
import { IFiltersTypes } from '../types/filtersTypes';

export class filtersStore {
  currentFilters: IFiltersTypes = {
    type: [],
    countries: [],
    genres: [],
    years: [],
  };

  constructor() {
    makeAutoObservable(this);
  }

  addFilter = (type: string, value: string[]) => {
    switch (type) {
      case 'Тип':
        this.currentFilters.type = value;
        break;
      case 'Страна':
        this.currentFilters.countries = value;
        break;
      case 'Жанр':
        this.currentFilters.genres = value;
        break;
      case 'Год':
        this.currentFilters.years = value;
        break;
    }
  };

  removeFilter = (value: string) => {
    Object.keys(this.currentFilters).forEach((key) => {
      this.currentFilters[key] = this.currentFilters[key].filter(
        (filter) => filter !== value,
      );
    });
  };
}

export default filtersStore;
