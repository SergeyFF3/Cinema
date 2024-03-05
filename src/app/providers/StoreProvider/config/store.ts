import { filmsStore } from 'src/pages/FilmsPage';

export class RootStore {
  filmsStore: filmsStore;

  constructor() {
    this.filmsStore = new filmsStore();
  }
}

export const createStore = () => {
  return new RootStore();
};

export type TStore = ReturnType<typeof createStore>;

export default RootStore;
export const store = new RootStore();
