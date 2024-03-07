import { observer } from 'mobx-react';
import styles from './CinemaPage.module.css';
import { useRootData } from 'src/shared/lib/hooks/useRootData';
import { VideoPlayer } from 'src/widgets/VideoPlayer';
import { AboutCinema } from 'src/entities/Cinema';

const CinemaPage = observer(() => {
  const { cinemaData } = useRootData((store) => store.cinemaStore);

  if (!cinemaData) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.margin}>
        <AboutCinema {...cinemaData} />
      </div>
      <VideoPlayer trailers={cinemaData.videos.trailers} />
    </div>
  );
});

export default CinemaPage;
