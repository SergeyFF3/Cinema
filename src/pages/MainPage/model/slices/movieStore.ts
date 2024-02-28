import { makeAutoObservable } from 'mobx';
import { fromPromise, IPromiseBasedObservable } from 'mobx-utils';
import { movieService as MS } from '../services/movieService';
import { IMovieList } from '../types/movieSchema';

export class movieStore {
  movieList?: IPromiseBasedObservable<IMovieList>;

  constructor() {
    makeAutoObservable(this);
  }

  fetchAllMovieList = () => {
    this.movieList = fromPromise(MS.movieRequestService());
  };
}

export default movieStore;
