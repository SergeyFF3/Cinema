import { makeAutoObservable } from 'mobx';
import { FILM_PAGE_NUM_LOCALSTORAGE_KEY } from 'src/shared/const/localstorage';
import { setDataInLocalStorage } from 'src/shared/lib/setDataInLocalStorage';
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

  setFilmsPageNumber = (num: number) => {
    this.page = num;
  };

  changePageHandler = (num: number) => {
    this.page = num;
    setDataInLocalStorage(FILM_PAGE_NUM_LOCALSTORAGE_KEY, num);
  };

  getFilmsList = (pageNumber: number, limit: number) => {
    this.isLoadingFilms = true;
    filmsService
      .filmsRequestService(pageNumber, limit)
      .then((res) => ((this.filmsList = res.docs), (this.pages = res.pages)))
      .catch((error) => console.log(error))
      .finally(() => (this.isLoadingFilms = false));
  };
}

export default filmsStore;
