import { Typography } from '@mui/material';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MovieList } from 'src/entities/Movie';
import { SEARCH_RESULT_PAGE_QUERY_LOCALSTORAGE_KEY } from 'src/shared/const/localstorage';
import { getDataFromLocalStorage } from 'src/shared/lib/getDataFromLocalStorage';
import { useRootData } from 'src/shared/lib/hooks/useRootData';
import { PageLoader } from 'src/widgets/PageLoader';
import { Pagination } from 'src/widgets/Pagination';
import styles from './SearchResultPage.module.css';

const SearchResultPage = observer(() => {
  const {
    searchResult,
    pages,
    isLoadingSearchPage,
    searchMovieByName,
    searchMovieByQuery,
  } = useRootData((store) => store.searchMovieStore);
  const [searchParams, setSearchParams] = useSearchParams();

  let queryParam = getDataFromLocalStorage(
    SEARCH_RESULT_PAGE_QUERY_LOCALSTORAGE_KEY,
  ) as string;
  queryParam = queryParam?.replace(/["\\]/g, '');

  const movieName = searchParams.get('search') || '';
  const queryValue = searchParams.get(queryParam || '');
  const pageNumber = Number(searchParams.get('page')) || 1;

  const сhangePageNumber = (num: number) => {
    if (movieName) {
      setSearchParams({ search: movieName, page: String(num) });
    }
    if (queryValue) {
      setSearchParams({ [queryParam]: queryValue, page: String(num) });
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (movieName) {
      searchMovieByName(movieName, pageNumber);
    }
    if (queryValue) {
      searchMovieByQuery(`${queryParam}=${queryValue}`, pageNumber);
    }
  }, [movieName, queryValue, pageNumber]);

  if (isLoadingSearchPage) {
    return <PageLoader />;
  }

  if (!searchResult || searchResult.length === 0) {
    return (
      <div className={styles.wrapper}>
        <Typography textAlign="center" fontSize="20px" color="white">
          К сожалению поиск не дал результатов :(
        </Typography>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <MovieList movieList={searchResult} />
      <div className={styles.pagination}>
        <Pagination
          page={pageNumber}
          pageCount={pages}
          onChange={сhangePageNumber}
        />
      </div>
    </div>
  );
});

export default SearchResultPage;
