import { getMoviesListURL } from 'src/shared/config/apiListURL';
import { fetchData } from 'src/shared/config/fetch';
import { IMovieList } from 'src/shared/types';

export class moviesListService {
  static moviesListRequestService(
    type: string,
    pageNumber: number,
    limit: number,
  ): Promise<IMovieList> {
    return fetchData(
      `${getMoviesListURL}?type=${type}&page=${pageNumber}&limit=${limit}`,
    );
  }
}

export default moviesListService;
