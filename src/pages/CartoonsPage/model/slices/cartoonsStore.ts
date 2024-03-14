import { IMovieProps } from 'src/shared/types';
import { makeAutoObservable } from 'mobx';
import cartoonService from '../services/cartoonService';

export class cartoonsStore {
  cartoonsList: IMovieProps[] = [];
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
      .catch((e) => console.log(e))
      .finally(() => (this.isLoading = false));
  };
}

export default cartoonsStore;
