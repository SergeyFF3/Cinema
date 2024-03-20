import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MovieList } from 'src/entities/Movie';
import { useRootData } from 'src/shared/lib/hooks/useRootData';
import { PageLoader } from 'src/widgets/PageLoader';
import { Pagination } from 'src/widgets/Pagination';
import styles from './MoviesListPage.module.css';

const MoviesListPage = observer(() => {
  const { moviesList, pages, isLoading, getMoviesList } = useRootData(
    (store) => store.moviesListStore,
  );

  const [searchParams, setSearchParams] = useSearchParams();
  const currentType = searchParams.get('type');
  const pageNumber = Number(searchParams.get('page'));

  const changePageNumber = (pageNum: number) => {
    setSearchParams((prev) => ({
      ...prev,
      type: currentType,
      page: String(pageNum),
    }));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setSearchParams((prev) => ({
      ...prev,
      type: currentType,
      page: String(pageNumber),
    }));

    if (pageNumber && currentType) {
      getMoviesList(currentType, pageNumber, 30);
    }
  }, [currentType, pageNumber]);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className={styles.wrapper}>
      <MovieList movieList={moviesList} />
      <div className={styles.pagination}>
        <Pagination
          page={pageNumber}
          pageCount={pages}
          onChange={changePageNumber}
        />
      </div>
    </div>
  );
});

export default MoviesListPage;
