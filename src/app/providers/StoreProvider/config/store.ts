import { movieStore } from 'src/pages/MainPage';

export class RootStore {
  movieStore: movieStore;

  constructor() {
    this.movieStore = new movieStore();
  }
}

export const createStore = () => {
  return new RootStore();
};

export type TStore = ReturnType<typeof createStore>;

export default RootStore;
export const store = new RootStore();
