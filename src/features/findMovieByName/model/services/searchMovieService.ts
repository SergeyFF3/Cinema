import { getMovieBySearchURL } from 'src/shared/config/apiListURL';
import { fetchData } from 'src/shared/config/fetch';
import { IMovieList } from 'src/shared/types';

export class searchMovieService {
  static searchMovieRequestService(name: string): Promise<IMovieList> {
    return fetchData(`${getMovieBySearchURL}?query=${name}`);
  }
}
