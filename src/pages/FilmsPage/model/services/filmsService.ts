import { getAllFilmsURL } from 'src/shared/config/apiListURL';
import { fetchData } from 'src/shared/config/fetch';
import { IMovieList } from 'src/shared/types';

export class filmsService {
  static filmsRequestService(
    pageNumber: number,
    limit: number,
  ): Promise<IMovieList> {
    return fetchData(`${getAllFilmsURL}&page=${pageNumber}&limit=${limit}`);
  }
}

export default filmsService;
