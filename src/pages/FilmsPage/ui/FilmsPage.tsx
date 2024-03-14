import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { MovieList } from 'src/entities/Movie';
import { useRootData } from 'src/shared/lib/hooks/useRootData';
import { Pagination } from 'src/widgets/Pagination';

const FilmsPage = observer(() => {
  const { getFilmsList, filmsList, page, pages, changePageHandler } =
    useRootData((store) => store.filmsStore);

  useEffect(() => {
    getFilmsList(page, 30);
  }, [page]);

  return (
    <>
      <MovieList movieList={filmsList} category="films" />
      <Pagination page={page} pageCount={pages} onChange={changePageHandler} />
    </>
  );
});

export default FilmsPage;
