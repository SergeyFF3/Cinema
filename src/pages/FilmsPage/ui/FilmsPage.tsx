import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { MovieList } from 'src/entities/Movie';
import { useRootData } from 'src/shared/lib/hooks/useRootData';
import { Pagination } from 'src/widgets/Pagination';
import styles from './FilmsPage.module.css';

const FilmsPage = observer(() => {
  const { getFilmsList, filmsList, isLoading, page, pages, changePageHandler } =
    useRootData((store) => store.filmsStore);

  useEffect(() => {
    getFilmsList(page, 30);
  }, [page]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={styles.wrapper}>
      <MovieList movieList={filmsList} category="films" />;
      <Pagination page={page} pageCount={pages} onChange={changePageHandler} />
    </div>
  );
});

export default FilmsPage;
