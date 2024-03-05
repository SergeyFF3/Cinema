import { getCinemaByIdURL } from 'src/shared/config/apiListURL';
import { fetchData } from 'src/shared/config/fetch';
import { ICinemaProps } from 'src/shared/types';

export class cinemaService {
  static cinemaRequestService(id: string): Promise<ICinemaProps> {
    return fetchData(`${getCinemaByIdURL}/${id}`);
  }
}

export default cinemaService;
