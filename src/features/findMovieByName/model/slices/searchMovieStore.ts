import { makeAutoObservable } from 'mobx';
import { SEARCH_RESULT_PAGE_NUM_LOCALSTORAGE_KEY } from 'src/shared/const/localstorage';
import { IMovieProps } from 'src/shared/types';
import { searchMovieService } from '../services/searchMovieService';

export class searchMovieStore {
  searchResult: IMovieProps[] = [];
  page: number = 1;
  pages: number = 0;
  isLoading: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  setFirstPage = () => {
    this.page = 1;
  };

  setSearchResultPageNumber = (num: number) => {
    this.page = num;
  };

  turnOnIsLoading = () => {
    this.isLoading = true;
  };

  changePageHandler = (num: number) => {
    this.page = num;
    localStorage.setItem(
      SEARCH_RESULT_PAGE_NUM_LOCALSTORAGE_KEY,
      JSON.stringify(num),
    );
  };

  searchMovieByName = (name: string, pageNumber: number) => {
    this.isLoading = true;
    searchMovieService
      .searchMovieRequestService(name, pageNumber)
      .then(
        (res) => (
          (this.searchResult = res.docs),
          (this.page = res.page),
          (this.pages = res.pages)
        ),
      )
      .catch((e) => console.log(e))
      .finally(() => (this.isLoading = false));
  };
}

export default searchMovieStore;
