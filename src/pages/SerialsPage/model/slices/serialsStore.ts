import { makeAutoObservable } from 'mobx';
import { ICinemaProps } from 'src/shared/types';
import serialsService from '../services/serialsService';

export class serialsStore {
  serialsList: ICinemaProps[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  getSerialsList = () => {
    serialsService
      .serialsRequestService()
      .then((res) => (this.serialsList = res.docs));
  };
}

export default serialsStore;
