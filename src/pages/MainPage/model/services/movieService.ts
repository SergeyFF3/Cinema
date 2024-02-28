import { getAllMoviesURL } from 'src/shared/config/apiListURL';
import { request } from 'src/shared/config/fetch';
import { IMovieList } from '../types/movieSchema';

export class movieService {
  static movieRequestService(): Promise<IMovieList> {
    return request(getAllMoviesURL);
  }
}

export default movieService;
