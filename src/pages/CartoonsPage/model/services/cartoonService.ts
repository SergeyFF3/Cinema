import { getAllCartoonURL } from 'src/shared/config/apiListURL';
import { fetchData } from 'src/shared/config/fetch';
import { IMovieList } from 'src/shared/types';

export class cartoonService {
  static cartoonRequestService(
    pageNumber: number,
    limit: number,
  ): Promise<IMovieList> {
    return fetchData(`${getAllCartoonURL}&page=${pageNumber}&limit=${limit}`);
  }
}

export default cartoonService;
