import { makeAutoObservable } from 'mobx';
import { SERIAL_PAGE_NUM_LOCALSTORAGE_KEY } from 'src/shared/const/localstorage';
import { IMovieProps } from 'src/shared/types';
import serialsService from '../services/serialsService';

export class serialsStore {
  serialsList: IMovieProps[] = [];
  page: number = 1;
  pages: number = 0;
  isLoadingSerials: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setSerialPageNumber = (num: number) => {
    this.page = num;
  };

  changePageHandler = (num: number) => {
    this.page = num;
    localStorage.setItem(SERIAL_PAGE_NUM_LOCALSTORAGE_KEY, JSON.stringify(num));
  };

  getSerialsList = (pageNumber: number, limit: number) => {
    this.isLoadingSerials = true;
    serialsService
      .serialsRequestService(pageNumber, limit)
      .then((res) => ((this.serialsList = res.docs), (this.pages = res.pages)))
      .catch((e) => console.log(e))
      .finally(() => (this.isLoadingSerials = false));
  };
}

export default serialsStore;
