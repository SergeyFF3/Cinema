import { observer } from 'mobx-react';
import { useRootData } from 'src/shared/lib/hooks/useRootData';

export const SearchResultPage = observer(() => {
  const { searchResult } = useRootData((store) => store.searchMovieStore);

  return (
    <div>
      {searchResult.map((movie) => (
        <p>{movie.name}</p>
      ))}
    </div>
  );
});
