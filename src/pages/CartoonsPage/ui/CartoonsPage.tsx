import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { MovieList } from 'src/entities/Movie';
import { useRootData } from 'src/shared/lib/hooks/useRootData';
import { Pagination } from 'src/widgets/Pagination';
import styles from './CartoonsPage.module.css';

const CartoonsPage = observer(() => {
  const { getCartoonsList, cartoonsList, page, pages, changePageHandler } =
    useRootData((store) => store.cartoonsStore);

  useEffect(() => {
    getCartoonsList(page, 30);
  }, [page]);

  return (
    <>
      <MovieList movieList={cartoonsList} category="films" />
      <Pagination page={page} pageCount={pages} onChange={changePageHandler} />
    </>
  );
});

export default CartoonsPage;
