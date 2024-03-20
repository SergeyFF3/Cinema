import { RouteProps } from 'react-router-dom';
import { MainPage } from 'src/pages/MainPage';
import { MoviePage } from 'src/pages/MoviePage';
import MoviesListPage from 'src/pages/MoviesListPage/ui/MoviesListPage';
import { NotFoundPage } from 'src/pages/NotFoundPage';
import { PersonPage } from 'src/pages/PersonPage';
import { SearchResultPage } from 'src/pages/SearchResultPage';

export enum AppRoutes {
  MAIN = 'main',
  MOVIES = 'movies',
  MOVIE = 'movie',
  SEARCH_RESULT = 'search_result',
  PERSON = 'person',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.MOVIES]: '/:params',
  [AppRoutes.MOVIE]: '/movie/',
  [AppRoutes.SEARCH_RESULT]: '/search-result',

  [AppRoutes.PERSON]: '/person/',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.MOVIES]: {
    path: `${RoutePath.movies}`,
    element: <MoviesListPage />,
  },
  [AppRoutes.MOVIE]: {
    path: `${RoutePath.movie}:id`,
    element: <MoviePage />,
  },
  [AppRoutes.SEARCH_RESULT]: {
    path: RoutePath.search_result,
    element: <SearchResultPage />,
  },
  [AppRoutes.PERSON]: {
    path: `${RoutePath.person}:id`,
    element: <PersonPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
