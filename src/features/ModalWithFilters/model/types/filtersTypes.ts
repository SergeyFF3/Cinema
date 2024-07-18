export enum FilterCategory {
  TYPE = 'Тип',
  COUNTRIES = 'Страна',
  GENRES = 'Жанр',
  YEARS = 'Год',
}

export type FilterMapper = Record<FilterCategory, string>;

export type IFiltersTypes = Record<string, string[]>;
