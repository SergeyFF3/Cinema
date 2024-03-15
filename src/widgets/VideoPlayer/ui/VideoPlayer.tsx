import { FC } from 'react';
import YouTube from 'react-youtube';
import styles from './VideoPlayer.module.css';
import { ITrailer } from 'src/shared/types';
import { Typography } from '@mui/material';

export const VideoPlayer: FC<{ trailers: ITrailer[] }> = ({ trailers }) => {
  const videoId = trailers[1].url.match(/embed\/([^/?]+)/)?.[1];

  if (!videoId || !trailers) return null;

  return <YouTube className={styles.videoPlayer} videoId={videoId} />;
};
