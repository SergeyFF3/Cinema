import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { MovieList } from 'src/entities/Movie';
import { useRootData } from 'src/shared/lib/hooks/useRootData';
import styles from './FilmsPage.module.css';

const FilmsPage = observer(() => {
  const { getFilmsList, filmsList } = useRootData((store) => store.filmsStore);

  useEffect(() => {
    getFilmsList('30');
  }, []);

  return (
    <div className={styles.wrapper}>
      <MovieList movieList={filmsList} category="films" />;
    </div>
  );
});

export default FilmsPage;
