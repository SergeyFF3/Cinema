import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { MovieList } from 'src/entities/Movie';
import { useRootData } from 'src/shared/lib/hooks/useRootData';
import { Section } from 'src/shared/ui/Section';

const MainPage = observer(() => {
  const { getFilmsList, filmsList } = useRootData((store) => store.filmsStore);

  useEffect(() => {
    getFilmsList();
  }, []);

  return (
    <>
      <Section title="Фильмы">
        <MovieList movieList={filmsList} category="films" />
      </Section>
    </>
  );
});

export default MainPage;
