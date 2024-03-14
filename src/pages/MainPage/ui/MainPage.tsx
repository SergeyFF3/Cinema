import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { MovieList } from 'src/entities/Movie';
import { NotFoundPage } from 'src/pages/NotFoundPage';
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

  if (
    (filmsList.length === 0 &&
      serialsList.length === 0 &&
      cartoonsList.length === 0) ||
    (!filmsList && !serialsList && !cartoonsList)
  ) {
    return <NotFoundPage />;
  }

  return (
    <>
      {filmsList.length > 0 && (
        <Section title="Фильмы">
          <MovieList movieList={filmsList} category="films" />
        </Section>
      )}
      {serialsList.length > 0 && (
        <Section title="Сериалы">
          <MovieList movieList={serialsList} category="serials" />
        </Section>
      )}
      {cartoonsList.length > 0 && (
        <Section title="Мультфильмы">
          <MovieList movieList={cartoonsList} category="cartoons" />
        </Section>
      )}
    </>
  );
});

export default MainPage;
