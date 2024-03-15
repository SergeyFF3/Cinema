import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { MovieList } from 'src/entities/Movie';
import { useRootData } from 'src/shared/lib/hooks/useRootData';
import { PageLoader } from 'src/widgets/PageLoader';
import { Pagination } from 'src/widgets/Pagination';
import styles from './CartoonsPage.module.css';

const CartoonsPage = observer(() => {
  const {
    cartoonsList,
    page,
    pages,
    isLoadingCartoons,
    getCartoonsList,
    changePageHandler,
  } = useRootData((store) => store.cartoonsStore);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    getCartoonsList(page, 30);
  }, [page]);

  if (isLoadingCartoons) {
    return <PageLoader />;
  }

  return (
    <div className={styles.wrapper}>
      <MovieList movieList={cartoonsList} category="films" />
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

export default CartoonsPage;
