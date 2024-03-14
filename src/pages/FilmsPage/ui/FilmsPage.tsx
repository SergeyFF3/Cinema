import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { MovieList } from 'src/entities/Movie';
import { useRootData } from 'src/shared/lib/hooks/useRootData';
import { PageLoader } from 'src/widgets/PageLoader';
import { Pagination } from 'src/widgets/Pagination';
import styles from './FilmsPage.module.css';

const FilmsPage = observer(() => {
  const { filmsList, page, pages, isLoading, getFilmsList, changePageHandler } =
    useRootData((store) => store.filmsStore);

  useEffect(() => {
    getFilmsList(page, 30);
  }, [page]);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className={styles.wrapper}>
      <MovieList movieList={filmsList} category="films" />
      <div className={styles.pagination}>
        <Pagination
          page={page}
          pageCount={pages}
          onChange={changePageHandler}
        />
      </div>
    </div>
  );
});

export default FilmsPage;
