import { makeAutoObservable } from 'mobx';
import { IMovieProps } from 'src/shared/types';
import movieService from '../services/movieService';

export class movieStore {
  movieData: IMovieProps | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  getMovieById = (id: string) => {
    movieService.movieRequestService(id).then((res) => (this.movieData = res));
  };
}
