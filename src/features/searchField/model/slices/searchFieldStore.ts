import { makeAutoObservable } from 'mobx';
import { ChangeEvent } from 'react';

export class searchFieldStore {
  searchValue: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  changeSearchValue = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    this.searchValue = e.target.value;
  };

  removeValue = () => {
    this.searchValue = '';
  };
}

export default searchFieldStore;
