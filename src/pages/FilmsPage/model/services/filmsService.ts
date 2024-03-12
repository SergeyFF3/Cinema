import { getAllFilmsURL } from 'src/shared/config/apiListURL';
import { fetchData } from 'src/shared/config/fetch';
import { IMovieList } from 'src/shared/types';

export class filmsService {
  static filmsRequestService(): Promise<IMovieList> {
    return fetchData(getAllFilmsURL);
  }
}

export default filmsService;
