import { FC } from 'react';
import YouTube from 'react-youtube';
import styles from './VideoPlayer.module.css';
import { ITrailer } from 'src/shared/types';

export const VideoPlayer: FC<{ trailers: ITrailer[] }> = ({ trailers }) => {
  const videoId = trailers[0].url.match(/embed\/([^/?]+)/)?.[1];

  if (!videoId || !trailers) return null;

  return (
    <div className={styles.videoPlayer}>
      <YouTube videoId={videoId} />
    </div>
  );
};
