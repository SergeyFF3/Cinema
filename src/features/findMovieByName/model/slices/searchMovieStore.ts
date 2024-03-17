import { makeAutoObservable } from 'mobx';
import { SEARCH_RESULT_PAGE_NUM_LOCALSTORAGE_KEY } from 'src/shared/const/localstorage';
import { IMovieProps } from 'src/shared/types';
import { searchMovieService } from '../services/searchMovieService';

export class searchMovieStore {
  searchResult: IMovieProps[] = [];
  queryParams: string = '';
  page: number = 1;
  pages: number = 0;
  isLoadingSearchPage: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  turnOnIsLoading = () => {
    this.isLoadingSearchPage = true;
  };

  setFirstPage = () => {
    this.page = 1;
  };

  setSearchResultPageNumber = (num: number) => {
    this.page = num;
  };

  setSearchQueryParams = (query: string) => {
    this.queryParams = query;
  };

  changePageHandler = (num: number) => {
    this.page = num;
    localStorage.setItem(
      SEARCH_RESULT_PAGE_NUM_LOCALSTORAGE_KEY,
      JSON.stringify(num),
    );
  };

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
