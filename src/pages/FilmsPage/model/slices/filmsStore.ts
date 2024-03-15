import { makeAutoObservable } from 'mobx';
import { IMovieProps } from 'src/shared/types';
import filmsService from '../services/filmsService';

export class filmsStore {
  filmsList: IMovieProps[] = [];
  page: number = 1;
  pages: number = 0;
  isLoadingFilms: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  changePageHandler = (num: number) => {
    this.page = num;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  getFilmsList = (pageNumber: number, limit: number) => {
    this.isLoadingFilms = true;
    filmsService
      .filmsRequestService(pageNumber, limit)
      .then(
        (res) => (
          (this.filmsList = res.docs),
          (this.page = res.page),
          (this.pages = res.pages)
        ),
      )
      .catch((error) => console.log(error))
      .finally(() => (this.isLoadingFilms = false));
  };
}

export default filmsStore;
