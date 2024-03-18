import { Suspense } from 'react';
import { withErrorBoundary } from 'react-error-boundary';
import { Route, Routes, RouteProps } from 'react-router-dom';
import { NotFoundPage } from 'src/pages/NotFoundPage';
import { PageLoader } from 'src/widgets/PageLoader';
import { routeConfig } from '../../config/routeConfig';

const AppRouter = () => {
  const renderWithWrapper = (route: RouteProps) => {
    return <Route key={route.path} path={route.path} element={route.element} />;
  };

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
    </Suspense>
  );
};

export default withErrorBoundary(AppRouter, {
  fallback: <NotFoundPage />,
});
