import { getAllSerialsURL } from 'src/shared/config/apiListURL';
import { fetchData } from 'src/shared/config/fetch';
import { IMovieList } from 'src/shared/types';

export class serialsService {
  static serialsRequestService(): Promise<IMovieList> {
    return fetchData(getAllSerialsURL);
  }
}

export default serialsService;
