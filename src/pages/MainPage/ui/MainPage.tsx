import { Typography } from '@mui/material';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { useRootData } from 'src/shared/lib/hooks/useRootData';

const MainPage = observer(() => {
  const { fetchAllMovieList, movieList } = useRootData(
    (store) => store.movieStore,
  );

  useEffect(() => {
    fetchAllMovieList();
  }, []);

  if (!movieList) {
    return null;
  }

  return movieList.case({
    pending: () => <Typography>Loading...</Typography>,
    rejected: () => <Typography>Error</Typography>,
    fulfilled: ({ docs }) => (
      <ul>
        {docs.map((movie) => (
          <li key={movie.rating.kp}>{movie.rating.kp}</li>
        ))}
      </ul>
    ),
  });
});

export default MainPage;
