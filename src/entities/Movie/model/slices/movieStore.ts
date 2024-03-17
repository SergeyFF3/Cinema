import { makeAutoObservable } from 'mobx';
import { IMovieProps } from 'src/shared/types';
import movieService from '../services/movieService';

export class movieStore {
  movieId: number = 1;
  movieData: IMovieProps | null = null;
  isLoadingMoviePage: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setMovieId = (id: number) => {
    this.movieId = id;
  };

  getMovieById = (id: number) => {
    this.isLoadingMoviePage = true;
    movieService
      .movieRequestService(id)
      .then((res) => (this.movieData = res))
      .finally(() => (this.isLoadingMoviePage = false));
  };
}
