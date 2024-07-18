import { makeAutoObservable } from 'mobx';
import { movieStore } from 'src/entities/Movie';
import { searchMovieStore } from 'src/features/findMovieByName';
import searchFieldStore from 'src/features/searchField/model/slices/searchFieldStore';
import moviesListStore from 'src/entities/Movie/model/slices/moviesListStore';
import { personStore } from 'src/entities/Person';
import { filtersStore } from 'src/features/ModalWithFilters';

export class RootStore {
  moviesListStore = new moviesListStore();
  searchMovieStore = new searchMovieStore();
  searchFieldStore = new searchFieldStore();
  movieStore = new movieStore();
  personStore = new personStore();
  filtersStore = new filtersStore();

  constructor() {
    makeAutoObservable(this);
  }
}

export const createStore = () => {
  return new RootStore();
};

export type TStore = ReturnType<typeof createStore>;

export default RootStore;
export const store = new RootStore();
