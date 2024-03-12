import { makeAutoObservable } from 'mobx';
import { cinemaStore } from 'src/entities/Cinema';
import { findCinemaStore } from 'src/features/findCinemaByName';
import { searchStore } from 'src/features/SearchField';
import { filmsStore } from 'src/pages/FilmsPage';
import { serialsStore } from 'src/pages/SerialsPage';

export class RootStore {
  searchStore = new searchStore();
  filmsStore = new filmsStore();
  serialsStore = new serialsStore();
  cinemaStore = new cinemaStore();
  findCinemaStore = new findCinemaStore();

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
