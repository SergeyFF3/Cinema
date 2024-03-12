import { observer } from 'mobx-react';
import { useRootData } from 'src/shared/lib/hooks/useRootData';
import styles from './SearchResultPage.module.css';

export const SearchResultPage = observer(() => {
  const { searchResult } = useRootData((store) => store.findCinemaStore);

  return (
    <div>
      {searchResult.map((cinema) => (
        <p>{cinema.name}</p>
      ))}
    </div>
  );
});
