import { IMovieProps } from 'src/shared/types';
import { makeAutoObservable } from 'mobx';
import cartoonService from '../services/cartoonService';

export class cartoonsStore {
  cartoonsList: IMovieProps[] = [];
  page: number = 1;
  pages: number = 0;
  isLoadingCartoons: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  changePageHandler = (num: number) => {
    this.page = num;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  getCartoonsList = (pageNumber: number, limit: number) => {
    this.isLoadingCartoons = true;
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
      .finally(() => (this.isLoadingCartoons = false));
  };
}

export default cartoonsStore;
