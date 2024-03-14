import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { MovieList } from 'src/entities/Movie';
import { useRootData } from 'src/shared/lib/hooks/useRootData';
import { Section } from 'src/shared/ui/Section';

const MainPage = observer(() => {
  const { getFilmsList, filmsList } = useRootData((store) => store.filmsStore);
  const { getSerialsList, serialsList } = useRootData(
    (store) => store.serialsStore,
  );
  const { getCartoonsList, cartoonsList } = useRootData(
    (store) => store.cartoonsStore,
  );

  useEffect(() => {
    getFilmsList(1, 12);
    getSerialsList(1, 12);
    getCartoonsList(1, 12);
  }, []);

  return (
    <>
      <Section title="Фильмы">
        <MovieList movieList={filmsList} category="films" />
      </Section>
      <Section title="Сериалы">
        <MovieList movieList={serialsList} category="serials" />
      </Section>
      <Section title="Мультфильмы">
        <MovieList movieList={cartoonsList} category="cartoons" />
      </Section>
    </>
  );
});

export default MainPage;
