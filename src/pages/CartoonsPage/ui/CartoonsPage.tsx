import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { MovieList } from 'src/entities/Movie';
import { CARTOON_PAGE_NUM_LOCALSTORAGE_KEY } from 'src/shared/const/localstorage';
import { getDataFromLocalStorage } from 'src/shared/lib/getDataFromLocalStorage';
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
    setCartoonPageNumber,
    getCartoonsList,
    changePageHandler,
  } = useRootData((store) => store.cartoonsStore);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const pageNumber =
      Number(getDataFromLocalStorage(CARTOON_PAGE_NUM_LOCALSTORAGE_KEY)) || 1;
    setCartoonPageNumber(pageNumber);

    getCartoonsList(pageNumber, 30);
  }, [page]);

  if (isLoadingCartoons) {
    return <PageLoader />;
  }

  if (!cartoonsList || cartoonsList.length === 0) {
    return null;
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
