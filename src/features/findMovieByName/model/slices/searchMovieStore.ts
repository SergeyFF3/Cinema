import { makeAutoObservable } from 'mobx';
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

  turnOnIsLoading = () => {
    this.isLoading = true;
  };

  changePageHandler = (num: number) => {
    this.page = num;
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
