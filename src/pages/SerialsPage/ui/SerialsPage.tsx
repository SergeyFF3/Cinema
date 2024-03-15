import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { MovieList } from 'src/entities/Movie';
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
    getSerialsList,
    changePageHandler,
  } = useRootData((store) => store.serialsStore);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    getSerialsList(page, 30);
  }, [page]);

  if (isLoadingSerials) {
    return <PageLoader />;
  }

  return (
    <div className={styles.wrapper}>
      <MovieList movieList={serialsList} category="films" />
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
