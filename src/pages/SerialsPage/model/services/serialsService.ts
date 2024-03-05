import { getAllSerialsURL } from 'src/shared/config/apiListURL';
import { request } from 'src/shared/config/fetch';
import { ICinemaList } from 'src/shared/types';

export class serialsService {
  static serialsRequestService(): Promise<ICinemaList> {
    return request(getAllSerialsURL);
  }
}

export default serialsService;
