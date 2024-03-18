import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { MovieList, MovieSliderList } from 'src/entities/Movie';
import { useRootData } from 'src/shared/lib/hooks/useRootData';
import { Section } from 'src/widgets/Section';
import { PageLoader } from 'src/widgets/PageLoader';
import useResize from 'src/shared/hooks/useResize';
import { IMovieProps } from 'src/shared/types';

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

  const [width] = useResize();

  useEffect(() => {
    getFilmsList(1, 12);
    getSerialsList(1, 12);
    getCartoonsList(1, 12);
  }, []);

  const getSection = (title: string, list: IMovieProps[]) => {
    if (list.length > 0 && width > 850) {
      return (
        <Section title={title}>
          <MovieList movieList={list} />
        </Section>
      );
    }

    if (list.length > 0 && width < 850) {
      return (
        <Section title={title}>
          <MovieSliderList movieList={list} />
        </Section>
      );
    }
  };

  if (isLoadingFilms || isLoadingSerials || isLoadingCartoons) {
    return <PageLoader />;
  }

  if (
    !filmsList ||
    (filmsList.length === 0 && !serialsList) ||
    (serialsList.length === 0 && !cartoonsList) ||
    cartoonsList.length === 0
  ) {
    return null;
  }

  return (
    <>
      {getSection('Фильмы', filmsList)}
      {getSection('Сериалы', serialsList)}
      {getSection('Мультфильмы', cartoonsList)}
    </>
  );
});

export default MainPage;
