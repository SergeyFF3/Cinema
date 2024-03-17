import { IMovieProps } from 'src/shared/types';
import { makeAutoObservable } from 'mobx';
import cartoonService from '../services/cartoonService';
import { setDataInLocalStorage } from 'src/shared/lib/setDataInLocalStorage';
import { CARTOON_PAGE_NUM_LOCALSTORAGE_KEY } from 'src/shared/const/localstorage';

export class cartoonsStore {
  cartoonsList: IMovieProps[] = [];
  page: number = 1;
  pages: number = 0;
  isLoadingCartoons: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setCartoonPageNumber = (num: number) => {
    this.page = num;
  };

  changePageHandler = (num: number) => {
    this.page = num;
    setDataInLocalStorage(CARTOON_PAGE_NUM_LOCALSTORAGE_KEY, num);
  };

  getCartoonsList = (pageNumber: number, limit: number) => {
    this.isLoadingCartoons = true;
    cartoonService
      .cartoonRequestService(pageNumber, limit)
      .then((res) => ((this.cartoonsList = res.docs), (this.pages = res.pages)))
      .catch((e) => console.log(e))
      .finally(() => (this.isLoadingCartoons = false));
  };
}

export default cartoonsStore;
