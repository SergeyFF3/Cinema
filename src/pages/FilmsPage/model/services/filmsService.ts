import { getAllFilmsURL } from 'src/shared/config/apiListURL';
import { fetchData } from 'src/shared/config/fetch';
import { IMovieList } from 'src/shared/types';

export class filmsService {
  static filmsRequestService(limit: string): Promise<IMovieList> {
    return fetchData(`${getAllFilmsURL}&limit=${limit}`);
  }
}

export default filmsService;
