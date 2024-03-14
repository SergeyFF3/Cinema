import { makeAutoObservable } from 'mobx';
import { IMovieProps } from 'src/shared/types';
import serialsService from '../services/serialsService';

export class serialsStore {
  serialsList: IMovieProps[] = [];
  page: number = 1;
  pages: number = 0;
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  changePageHandler = (num: number) => {
    this.isLoading = true;
    this.page = num;
  };

  getSerialsList = (pageNumber: number, limit: number) => {
    serialsService
      .serialsRequestService(pageNumber, limit)
      .then(
        (res) => (
          (this.serialsList = res.docs),
          (this.page = res.page),
          (this.pages = res.pages)
        ),
      )
      .catch((e) => console.log(e))
      .finally(() => (this.isLoading = false));
  };
}

export default serialsStore;
