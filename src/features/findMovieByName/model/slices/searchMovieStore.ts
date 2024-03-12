import { makeAutoObservable } from 'mobx';
import { IMovieProps } from 'src/shared/types';
import { searchMovieService } from '../services/searchMovieService';

export class searchMovieStore {
  searchResult: IMovieProps[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  searchMovieByName = (name: string) => {
    searchMovieService
      .searchMovieRequestService(name)
      .then((res) => (this.searchResult = res.docs));
  };
}

export default searchMovieStore;
