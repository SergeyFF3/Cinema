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

const MoviePage = observer(() => {
  const { movieId, movieData, isLoadingMoviePage, getMovieById } = useRootData(
    (store) => store.movieStore,
  );

  const trailers = movieData?.videos.trailers;

  const trailerBlock =
    trailers && trailers.length > 0 ? (
      <VideoPlayer trailers={trailers} />
    ) : (
      <Typography fontSize="20px" color="white" textAlign="center">
        Упс, трейлера нет :)
      </Typography>
    );

  useEffect(() => {
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
    </div>
  );
});

export default MoviePage;
