import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { MovieList } from 'src/entities/Movie';
import { FILM_PAGE_NUM_LOCALSTORAGE_KEY } from 'src/shared/const/localstorage';
import { getDataFromLocalStorage } from 'src/shared/lib/getDataFromLocalStorage';
import { useRootData } from 'src/shared/lib/hooks/useRootData';
import { PageLoader } from 'src/widgets/PageLoader';
import { Pagination } from 'src/widgets/Pagination';
import styles from './FilmsPage.module.css';

const FilmsPage = observer(() => {
  const {
    filmsList,
    page,
    pages,
    isLoadingFilms,
    setFilmsPageNumber,
    getFilmsList,
    changePageHandler,
  } = useRootData((store) => store.filmsStore);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const pageNumber =
      Number(getDataFromLocalStorage(FILM_PAGE_NUM_LOCALSTORAGE_KEY)) || 1;
    setFilmsPageNumber(pageNumber);

    getFilmsList(pageNumber, 30);
  }, [page]);

  if (isLoadingFilms) {
    return <PageLoader />;
  }

  if (!filmsList || filmsList.length === 0) {
    return null;
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
