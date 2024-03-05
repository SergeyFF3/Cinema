import { getAllSerialsURL } from 'src/shared/config/apiListURL';
import { fetchData } from 'src/shared/config/fetch';
import { ICinemaList } from 'src/shared/types';

export class serialsService {
  static serialsRequestService(): Promise<ICinemaList> {
    return fetchData(getAllSerialsURL);
  }
}

export default serialsService;
