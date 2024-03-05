import { filmsStore } from 'src/pages/FilmsPage';
import { serialsStore } from 'src/pages/SerialsPage';

export class RootStore {
  filmsStore: filmsStore;
  serialsStore: serialsStore;

  constructor() {
    this.filmsStore = new filmsStore();
    this.serialsStore = new serialsStore();
  }
}

export const createStore = () => {
  return new RootStore();
};

export type TStore = ReturnType<typeof createStore>;

export default RootStore;
export const store = new RootStore();
