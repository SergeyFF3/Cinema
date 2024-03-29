import {
  getMovieByNameURL,
  getMoviesListURL,
} from 'src/shared/config/apiListURL';
import { fetchData } from 'src/shared/config/fetch';
import { IMovieList } from 'src/shared/types';

export class searchMovieService {
  static searchMovieByNameRequestService(
    name: string,
    pageNumber: number,
  ): Promise<IMovieList> {
    return fetchData(
      `${getMovieByNameURL}?query=${name}&page=${pageNumber}&limit=30`,
    );
  }

  static searchMovieByQueryRequestService(
    query: string,
    pageNumber: number,
  ): Promise<IMovieList> {
    return fetchData(
      `${getMoviesListURL}?${query}&page=${pageNumber}&limit=30`,
    );
  }
}
