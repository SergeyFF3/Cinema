import { getCinemaBySearchURL } from 'src/shared/config/apiListURL';
import { fetchData } from 'src/shared/config/fetch';
import { ICinemaList } from 'src/shared/types';

export class findCinemaService {
  static findCinemaRequestService(name: string): Promise<ICinemaList> {
    return fetchData(`${getCinemaBySearchURL}?query=${name}`);
  }
}
