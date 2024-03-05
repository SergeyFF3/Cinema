import { getAllFilmsURL } from 'src/shared/config/apiListURL';
import { fetchData } from 'src/shared/config/fetch';
import { ICinemaList } from 'src/shared/types';

export class filmsService {
  static filmsRequestService(): Promise<ICinemaList> {
    return fetchData(getAllFilmsURL);
  }
}

export default filmsService;
