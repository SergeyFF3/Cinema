import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { FilmsPage } from 'src/pages/FilmsPage';
import { MainPage } from 'src/pages/MainPage';

export const App = () => {
  return (
    <Suspense fallback="Loading...">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/films" element={<FilmsPage />} />
      </Routes>
    </Suspense>
  );
};
