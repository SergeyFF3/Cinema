import { makeAutoObservable } from 'mobx';
import { ICinemaProps } from 'src/shared/types';
import filmsService from '../services/filmsService';

export class filmsStore {
  filmsList: ICinemaProps[] = [];

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
