import { makeAutoObservable } from 'mobx';
import { ICinemaProps } from 'src/shared/types';
import { findCinemaService } from '../services/findCinemaService';

export class findCinemaStore {
  searchResult: ICinemaProps[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  searchCinemaByName = (name: string) => {
    findCinemaService
      .findCinemaRequestService(name)
      .then((res) => (this.searchResult = res.docs));
  };
}

export default findCinemaStore;
