import { getAllFilmsURL } from 'src/shared/config/apiListURL';
import { request } from 'src/shared/config/fetch';
import { ICinemaList } from 'src/shared/types';

export class filmsService {
  static filmsRequestService(): Promise<ICinemaList> {
    return request(getAllFilmsURL);
  }
}

export default filmsService;
