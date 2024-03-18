import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { MovieList } from 'src/entities/Movie';
import { SERIAL_PAGE_NUM_LOCALSTORAGE_KEY } from 'src/shared/const/localstorage';
import { useRootData } from 'src/shared/lib/hooks/useRootData';
import { PageLoader } from 'src/widgets/PageLoader';
import { Pagination } from 'src/widgets/Pagination';
import styles from './SerialsPage.module.css';

const SerialsPage = observer(() => {
  const {
    serialsList,
    page,
    pages,
    isLoadingSerials,
    setSerialPageNumber,
    getSerialsList,
    changePageHandler,
  } = useRootData((store) => store.serialsStore);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const pageNumber =
      Number(localStorage.getItem(SERIAL_PAGE_NUM_LOCALSTORAGE_KEY)) || 1;
    setSerialPageNumber(pageNumber);

    getSerialsList(pageNumber, 30);
  }, [page]);

  if (isLoadingSerials) {
    return <PageLoader />;
  }

  if (!serialsList || serialsList.length === 0) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <MovieList movieList={serialsList} />
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

export default SerialsPage;
