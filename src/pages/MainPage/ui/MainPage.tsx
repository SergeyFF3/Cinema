import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { MovieList, MovieSliderList } from 'src/entities/Movie';
import { useRootData } from 'src/shared/lib/hooks/useRootData';
import { Section } from 'src/widgets/Section';
import { PageLoader } from 'src/widgets/PageLoader';
import useResize from 'src/shared/hooks/useResize';
import { IMovieProps } from 'src/shared/types';

const MainPage = observer(() => {
  const { categoriesMovies, isLoading, switchIsLoading, getMoviesByCategory } =
    useRootData((store) => store.moviesListStore);
  const [width] = useResize();

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

  const getAllCategoryMovies = async () => {
    try {
      switchIsLoading(true);

      const results = await Promise.allSettled([
        getMoviesByCategory('movie'),
        getMoviesByCategory('tv-series'),
        getMoviesByCategory('cartoon'),
      ]);

      results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
          const movies = result.value.docs;
          switch (index) {
            case 0:
              categoriesMovies.filmsList = movies;
              break;
            case 1:
              categoriesMovies.seriesList = movies;
              break;
            case 2:
              categoriesMovies.cartoonsList = movies;
              break;
          }
        }
      });
    } catch (error) {
      console.error('Не удалось получить данные', error);
    }
  };

  useEffect(() => {
    getAllCategoryMovies().finally(() => switchIsLoading(false));
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <main>
      {getSection('Фильмы', categoriesMovies.filmsList)}
      {getSection('Сериалы', categoriesMovies.seriesList)}
      {getSection('Мультфильмы', categoriesMovies.cartoonsList)}
    </main>
  );
});

export default MainPage;
