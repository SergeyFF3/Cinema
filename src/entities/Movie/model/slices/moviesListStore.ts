import { makeAutoObservable } from 'mobx';
import { IMovieProps } from 'src/shared/types';
import moviesListService from '../services/moviesListService';

interface ICategoriesMovies {
  filmsList: IMovieProps[];
  seriesList: IMovieProps[];
  cartoonsList: IMovieProps[];
}

export class moviesListStore {
  moviesList: IMovieProps[] = [];
  categoriesMovies: ICategoriesMovies = {
    filmsList: [],
    seriesList: [],
    cartoonsList: [],
  };
  page: number = 1;
  pages: number = 0;
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  changePageNumber = (num: number) => {
    this.page = num;
  };

  switchIsLoading = (isLoading: boolean) => {
    this.isLoading = isLoading;
  };

  getMoviesList = (type: string, pageNumber: number, limit: number) => {
    this.isLoading = true;
    moviesListService
      .moviesListRequestService(type, pageNumber, limit)
      .then((res) => ((this.moviesList = res.docs), (this.pages = res.pages)))
      .catch((error) => console.log(error))
      .finally(() => (this.isLoading = false));
  };

  getMoviesByCategory = async (type: string) => {
    return moviesListService.moviesListRequestService(type, 1, 12);
  };
}

export default moviesListStore;
