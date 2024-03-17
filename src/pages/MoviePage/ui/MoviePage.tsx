import { observer } from 'mobx-react';
import styles from './MoviePage.module.css';
import { useRootData } from 'src/shared/lib/hooks/useRootData';
import { VideoPlayer } from 'src/widgets/VideoPlayer';
import { AboutMovie } from 'src/entities/Movie';
import { useEffect } from 'react';
import { Typography } from '@mui/material';
import { PageLoader } from 'src/widgets/PageLoader';
import { PersonList } from 'src/entities/Person';
import { Section } from 'src/shared/ui/Section';
import { NotFoundPage } from 'src/pages/NotFoundPage';
import { getDataFromLocalStorage } from 'src/shared/lib/getDataFromLocalStorage';
import { MOVIE_ID_LOCALSTORAGE_KEY } from 'src/shared/const/localstorage';

const MoviePage = observer(() => {
  const { movieData, isLoadingMoviePage, getMovieById } = useRootData(
    (store) => store.movieStore,
  );

  const trailers = movieData?.videos?.trailers;

  const trailerBlock =
    trailers && trailers.length > 0 ? (
      <VideoPlayer trailers={trailers} />
    ) : (
      <Typography
        fontSize="20px"
        color="white"
        textAlign="center"
        marginBottom="50px"
      >
        Упс, трейлера нет :)
      </Typography>
    );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const movieId = Number(getDataFromLocalStorage(MOVIE_ID_LOCALSTORAGE_KEY));

    if (movieId) {
      getMovieById(movieId);
    }
  }, []);

  if (isLoadingMoviePage) {
    return <PageLoader />;
  }

  if (!movieData) {
    return <NotFoundPage />;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.margin}>
        <AboutMovie {...movieData} />
      </div>
      {trailerBlock}
      <Section title="Актеры">
        <PersonList persons={movieData.persons} />
      </Section>
    </div>
  );
});

export default MoviePage;
