import { makeAutoObservable } from 'mobx';
import { IPersonProps } from 'src/entities/Person';
import personService from '../services/personService';

export class personStore {
  personData: IPersonProps | null = null;
  isLoadingPersonPage: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  getPersonById = (personId: number) => {
    this.isLoadingPersonPage = true;
    personService
      .personRequestService(personId)
      .then((res) => (this.personData = res))
      .catch((e) => console.log(e))
      .finally(() => (this.isLoadingPersonPage = false));
  };
}

export default personStore;
