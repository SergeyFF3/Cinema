import { makeAutoObservable } from 'mobx';
import { IMovieProps } from 'src/shared/types';
import movieService from '../services/movieService';

export class movieStore {
  movieData: IMovieProps | null = null;
  isLoadingMoviePage: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  getMovieById = (id: number) => {
    this.isLoadingMoviePage = true;
    movieService
      .movieRequestService(id)
      .then((res) => (this.movieData = res))
      .finally(() => (this.isLoadingMoviePage = false));
  };
}
