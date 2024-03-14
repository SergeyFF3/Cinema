import { makeAutoObservable } from 'mobx';
import { IMovieProps } from 'src/shared/types';
import serialsService from '../services/serialsService';

export class serialsStore {
  serialsList: IMovieProps[] = [];
  page: number = 1;
  pages: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

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
      .catch((e) => console.log(e));
  };

  changePageHandler = (num: number) => {
    this.page = num;
  };
}

export default serialsStore;
