import { makeAutoObservable } from 'mobx';
import { IMovieProps } from 'src/shared/types';
import filmsService from '../services/filmsService';

export class filmsStore {
  filmsList: IMovieProps[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  getFilmsList = () => {
    filmsService
      .filmsRequestService()
      .then((res) => (this.filmsList = res.docs));
  };
}

export default filmsStore;
