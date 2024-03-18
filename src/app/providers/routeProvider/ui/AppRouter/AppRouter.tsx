import { Suspense } from 'react';
import { Route, Routes, RouteProps } from 'react-router-dom';
import { PageLoader } from 'src/widgets/PageLoader';
import { routeConfig } from '../../config/routeConfig';

export const AppRouter = () => {
  const renderWithWrapper = (route: RouteProps) => {
    return <Route key={route.path} path={route.path} element={route.element} />;
  };

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
    </Suspense>
  );
};
