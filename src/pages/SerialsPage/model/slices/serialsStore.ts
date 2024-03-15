import { makeAutoObservable } from 'mobx';
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

  changePageHandler = (num: number) => {
    this.page = num;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  getSerialsList = (pageNumber: number, limit: number) => {
    this.isLoadingSerials = true;
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
      .finally(() => (this.isLoadingSerials = false));
  };
}

export default serialsStore;
