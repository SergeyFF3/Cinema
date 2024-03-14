import { getAllSerialsURL } from 'src/shared/config/apiListURL';
import { fetchData } from 'src/shared/config/fetch';
import { IMovieList } from 'src/shared/types';

export class serialsService {
  static serialsRequestService(
    pageNumber: number,
    limit: number,
  ): Promise<IMovieList> {
    return fetchData(`${getAllSerialsURL}&page=${pageNumber}&limit=${limit}`);
  }
}

export default serialsService;
