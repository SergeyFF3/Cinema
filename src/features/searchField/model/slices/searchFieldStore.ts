import { makeAutoObservable } from 'mobx';
import { ChangeEvent } from 'react';

export class searchFieldStore {
  searchValue: string = '';
  newSearchValue: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  changeSearchValue = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    this.searchValue = e.target.value;
  };

  setNewSearchValue = (value: string) => {
    this.newSearchValue = value;
  };

  removeValue = () => {
    this.searchValue = '';
  };
}

export default searchFieldStore;
