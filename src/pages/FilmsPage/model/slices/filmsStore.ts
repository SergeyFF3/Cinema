import { makeAutoObservable } from 'mobx';
import { IMovieProps } from 'src/shared/types';
import filmsService from '../services/filmsService';

export class filmsStore {
  filmsList: IMovieProps[] = [];
  page: number = 1;
  pages: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  getFilmsList = (pageNumber: number, limit: number) => {
    filmsService
      .filmsRequestService(pageNumber, limit)
      .then(
        (res) => (
          (this.filmsList = res.docs),
          (this.page = res.page),
          (this.pages = res.pages)
        ),
      )
      .catch((error) => console.log(error));
  };

  changePageHandler = (num: number) => {
    this.page = num;
  };
}

export default filmsStore;
