import { IMovieProps } from 'src/shared/types';
import { makeAutoObservable } from 'mobx';
import cartoonService from '../services/cartoonService';

export class cartoonsStore {
  cartoonsList: IMovieProps[] = [];
  page: number = 1;
  pages: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  getCartoonsList = (pageNumber: number, limit: number) => {
    cartoonService
      .cartoonRequestService(pageNumber, limit)
      .then(
        (res) => (
          (this.cartoonsList = res.docs),
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

export default cartoonsStore;
