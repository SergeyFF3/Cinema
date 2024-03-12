import { observer } from 'mobx-react';
import styles from './MoviePage.module.css';
import { useRootData } from 'src/shared/lib/hooks/useRootData';
import { VideoPlayer } from 'src/widgets/VideoPlayer';
import { AboutMovie } from 'src/entities/Movie';

const MoviePage = observer(() => {
  const { movieData } = useRootData((store) => store.movieStore);

  if (!movieData) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.margin}>
        <AboutMovie {...movieData} />
      </div>
      <VideoPlayer trailers={movieData.videos.trailers} />
    </div>
  );
});

export default MoviePage;
