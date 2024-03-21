import { IPersonProps } from 'src/entities/Person';
import { getPersonByIdURL } from 'src/shared/config/apiListURL';
import { fetchData } from 'src/shared/config/fetch';

export class personService {
  static personRequestService(
    personId: number | string,
  ): Promise<IPersonProps> {
    return fetchData(`${getPersonByIdURL}/${personId}`);
  }
}

export default personService;
