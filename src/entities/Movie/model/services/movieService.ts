import { getMovieByIdURL } from 'src/shared/config/apiListURL';
import { fetchData } from 'src/shared/config/fetch';
import { IMovieProps } from 'src/shared/types';

export class movieService {
  static movieRequestService(id: string): Promise<IMovieProps> {
    return fetchData(`${getMovieByIdURL}/${id}`);
  }
}

export default movieService;
