import { makeAutoObservable } from 'mobx';
import { IMovieProps } from 'src/shared/types';
import movieService from '../services/movieService';

export class movieStore {
  movieId: number | undefined = undefined;
  movieData: IMovieProps | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setMovieId = (id: number) => {
    this.movieId = id;
  };

  getMovieById = (id: number) => {
    movieService.movieRequestService(id).then((res) => (this.movieData = res));
  };
}
