import { cinemaStore } from 'src/entities/Cinema';
import { filmsStore } from 'src/pages/FilmsPage';
import { serialsStore } from 'src/pages/SerialsPage';

export class RootStore {
  filmsStore: filmsStore;
  serialsStore: serialsStore;
  cinemaStore: cinemaStore;

  constructor() {
    this.filmsStore = new filmsStore();
    this.serialsStore = new serialsStore();
    this.cinemaStore = new cinemaStore();
  }
}

export const createStore = () => {
  return new RootStore();
};

export type TStore = ReturnType<typeof createStore>;

export default RootStore;
export const store = new RootStore();
