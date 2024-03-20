import { makeAutoObservable } from 'mobx';
import { movieStore } from 'src/entities/Movie';
import { searchMovieStore } from 'src/features/findMovieByName';
import searchFieldStore from 'src/features/searchField/model/slices/searchFieldStore';
import { personStore } from 'src/pages/PersonPage';
import moviesListStore from 'src/entities/Movie/model/slices/moviesListStore';

export class RootStore {
  moviesListStore = new moviesListStore();
  movieStore = new movieStore();
  searchMovieStore = new searchMovieStore();
  searchFieldStore = new searchFieldStore();
  personStore = new personStore();

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
