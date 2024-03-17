import { Typography } from '@mui/material';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { MovieList } from 'src/entities/Movie';
import { SEARCH_RESULT_PAGE_NUM_LOCALSTORAGE_KEY } from 'src/shared/const/localstorage';
import { useRootData } from 'src/shared/lib/hooks/useRootData';
import { PageLoader } from 'src/widgets/PageLoader';
import { Pagination } from 'src/widgets/Pagination';
import styles from './SearchResultPage.module.css';

const SearchResultPage = observer(() => {
  const {
    searchResult,
    page,
    pages,
    isLoadingSearchPage,
    setSearchResultPageNumber,
    changePageHandler,
    searchMovieByName,
  } = useRootData((store) => store.searchMovieStore);
  const { newSearchValue } = useRootData((store) => store.searchFieldStore);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const pageNumber =
      Number(localStorage.getItem(SEARCH_RESULT_PAGE_NUM_LOCALSTORAGE_KEY)) ||
      1;
    setSearchResultPageNumber(pageNumber);

    searchMovieByName(newSearchValue, pageNumber);
  }, [newSearchValue, page]);

  if (isLoadingSearchPage) {
    return <PageLoader />;
  }

  if (!searchResult || searchResult.length === 0) {
    return (
      <div className={styles.wrapper}>
        <Typography textAlign="center" fontSize="20px" color="white">
          К сожалению поиск не дал результатов.
        </Typography>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <MovieList movieList={searchResult} category="search-result" />
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

export default SearchResultPage;
