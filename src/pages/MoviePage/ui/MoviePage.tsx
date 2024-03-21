import { observer } from 'mobx-react';
import styles from './MoviePage.module.css';
import { useRootData } from 'src/shared/lib/hooks/useRootData';
import { VideoPlayer } from 'src/widgets/VideoPlayer';
import { AboutMovie, MovieList } from 'src/entities/Movie';
import { useEffect } from 'react';
import { Typography } from '@mui/material';
import { PageLoader } from 'src/widgets/PageLoader';
import { PersonList } from 'src/entities/Person';
import { Section } from 'src/widgets/Section';
import { useSearchParams } from 'react-router-dom';

const MoviePage = observer(() => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { movieData, isLoadingMoviePage, getMovieById } = useRootData(
    (store) => store.movieStore,
  );

  const trailers = movieData?.videos?.trailers;
  const movieId = searchParams.get('movieId') || '';

  const trailerBlock =
    trailers && trailers.length > 0 ? (
      <div className={styles.videoWrapper}>
        <VideoPlayer trailers={trailers} />
      </div>
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
    setSearchParams({ movieId: movieId });

    if (movieId) {
      getMovieById(movieId);
    }
  }, [movieId]);

  if (isLoadingMoviePage) {
    return <PageLoader />;
  }

  if (!movieData) {
    return null;
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
      {movieData.similarMovies && movieData.similarMovies.length > 0 && (
        <Section title="Смотрите также">
          <MovieList movieList={movieData.similarMovies} />
        </Section>
      )}
    </div>
  );
});

export default MoviePage;
