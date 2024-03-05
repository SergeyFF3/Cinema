import { makeAutoObservable } from 'mobx';
import { ICinemaProps } from 'src/shared/types';
import cinemaService from '../services/cinemaService';

export class cinemaStore {
  cinemaData: ICinemaProps | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  getCinemaById = (id: string) => {
    cinemaService
      .cinemaRequestService(id)
      .then((res) => (this.cinemaData = res));
  };
}
