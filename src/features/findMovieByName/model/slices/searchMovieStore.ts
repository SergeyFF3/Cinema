import { makeAutoObservable } from 'mobx';
import { IMovieProps } from 'src/shared/types';
import { searchMovieService } from '../services/searchMovieService';

export class searchMovieStore {
  searchResult: IMovieProps[] = [];
  pages: number = 0;
  isLoadingSearchPage: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  searchMovieByName = (name: string, pageNumber: number) => {
    this.isLoadingSearchPage = true;
    searchMovieService
      .searchMovieByNameRequestService(name, pageNumber)
      .then((res) => ((this.searchResult = res.docs), (this.pages = res.pages)))
      .catch((e) => console.log(e))
      .finally(() => (this.isLoadingSearchPage = false));
  };

  searchMovieByQuery = (query: string, pageNumber: number) => {
    this.isLoadingSearchPage = true;
    searchMovieService
      .searchMovieByQueryRequestService(query, pageNumber)
      .then((res) => ((this.searchResult = res.docs), (this.pages = res.pages)))
      .catch((e) => console.log(e))
      .finally(() => (this.isLoadingSearchPage = false));
  };
}

export default searchMovieStore;
