import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { MovieList } from 'src/entities/Movie';
import { useRootData } from 'src/shared/lib/hooks/useRootData';
import { Pagination } from 'src/widgets/Pagination';

const SerialsPage = observer(() => {
  const { getSerialsList, serialsList, page, pages, changePageHandler } =
    useRootData((store) => store.serialsStore);

  useEffect(() => {
    getSerialsList(page, 30);
  }, [page]);

  return (
    <>
      <MovieList movieList={serialsList} category="films" />
      <Pagination page={page} pageCount={pages} onChange={changePageHandler} />
    </>
  );
});

export default SerialsPage;
