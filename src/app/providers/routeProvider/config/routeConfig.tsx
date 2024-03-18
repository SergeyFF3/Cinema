import { RouteProps } from 'react-router-dom';
import { CartoonsPage } from 'src/pages/CartoonsPage';
import { FilmsPage } from 'src/pages/FilmsPage';
import { MainPage } from 'src/pages/MainPage';
import { MoviePage } from 'src/pages/MoviePage';
import { NotFoundPage } from 'src/pages/NotFoundPage';
import { PersonPage } from 'src/pages/PersonPage';
import { SearchResultPage } from 'src/pages/SearchResultPage';
import { SerialsPage } from 'src/pages/SerialsPage';

export enum AppRoutes {
  MAIN = 'main',
  FILMS = 'films',
  SERIALS = 'serials',
  CARTOONS = 'cartoons',
  SEARCH_RESULT = 'search_result',
  MOVIE = 'movie',
  PERSON = 'person',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.FILMS]: '/films',
  [AppRoutes.SERIALS]: '/serials',
  [AppRoutes.CARTOONS]: '/cartoons',
  [AppRoutes.SEARCH_RESULT]: '/search-result',
  [AppRoutes.MOVIE]: '/movie/',
  [AppRoutes.PERSON]: '/person/',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.FILMS]: {
    path: RoutePath.films,
    element: <FilmsPage />,
  },
  [AppRoutes.SERIALS]: {
    path: RoutePath.serials,
    element: <SerialsPage />,
  },
  [AppRoutes.CARTOONS]: {
    path: RoutePath.cartoons,
    element: <CartoonsPage />,
  },
  [AppRoutes.SEARCH_RESULT]: {
    path: RoutePath.search_result,
    element: <SearchResultPage />,
  },
  [AppRoutes.MOVIE]: {
    path: `${RoutePath.movie}:id`,
    element: <MoviePage />,
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
