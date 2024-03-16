import { makeAutoObservable } from 'mobx';
import { movieStore } from 'src/entities/Movie';
import { searchMovieStore } from 'src/features/findMovieByName';
import { filmsStore } from 'src/pages/FilmsPage';
import { cartoonsStore } from 'src/pages/CartoonsPage';
import { serialsStore } from 'src/pages/SerialsPage';
import searchFieldStore from 'src/features/searchField/model/slices/searchFieldStore';
import { personStore } from 'src/pages/PersonPage';

export class RootStore {
  searchFieldStore = new searchFieldStore();
  filmsStore = new filmsStore();
  serialsStore = new serialsStore();
  cartoonsStore = new cartoonsStore();
  movieStore = new movieStore();
  personStore = new personStore();
  searchMovieStore = new searchMovieStore();

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
