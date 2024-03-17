import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { MovieList } from 'src/entities/Movie';
import { useRootData } from 'src/shared/lib/hooks/useRootData';
import { Section } from 'src/shared/ui/Section';
import { PageLoader } from 'src/widgets/PageLoader';

const MainPage = observer(() => {
  const { getFilmsList, filmsList, isLoadingFilms } = useRootData(
    (store) => store.filmsStore,
  );
  const { getSerialsList, serialsList, isLoadingSerials } = useRootData(
    (store) => store.serialsStore,
  );
  const { getCartoonsList, cartoonsList, isLoadingCartoons } = useRootData(
    (store) => store.cartoonsStore,
  );

  useEffect(() => {
    getFilmsList(1, 12);
    getSerialsList(1, 12);
    getCartoonsList(1, 12);
  }, []);

  const filmsSection = filmsList.length > 0 && (
    <Section title="Фильмы">
      <MovieList movieList={filmsList} category="films" />
    </Section>
  );

  const serialsSection = serialsList.length > 0 && (
    <Section title="Сериалы">
      <MovieList movieList={serialsList} category="serials" />
    </Section>
  );

  const cartoonsSection = cartoonsList.length > 0 && (
    <Section title="Мультфильмы">
      <MovieList movieList={cartoonsList} category="cartoons" />
    </Section>
  );

  if (isLoadingFilms || isLoadingSerials || isLoadingCartoons) {
    return <PageLoader />;
  }

  if (!filmsSection && !serialsSection && !cartoonsSection) {
    return null;
  }

  return (
    <>
      {filmsSection}
      {serialsSection}
      {cartoonsSection}
    </>
  );
});

export default MainPage;
