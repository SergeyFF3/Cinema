import { Suspense } from 'react';
import styles from './styles/App.module.css';
import { Route, Routes } from 'react-router-dom';
import { MoviePage } from 'src/pages/MoviePage';
import { FilmsPage } from 'src/pages/FilmsPage';
import { MainPage } from 'src/pages/MainPage';
import { SerialsPage } from 'src/pages/SerialsPage';
import { Navbar } from 'src/widgets/Navbar';
import { SearchResultPage } from 'src/pages/SearchResultPage';
import { CartoonsPage } from 'src/pages/CartoonsPage';
import { PageLoader } from 'src/widgets/PageLoader';
import { NotFoundPage } from 'src/pages/NotFoundPage';
import { PersonPage } from 'src/pages/PersonPage';

export const App = () => (
  <>
    <Navbar />
    <div className={styles.container}>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/films" element={<FilmsPage />} />
          <Route path="/serials" element={<SerialsPage />} />
          <Route path="/cartoons" element={<CartoonsPage />} />
          <Route path="/search-result" element={<SearchResultPage />} />
          <Route path="/:params/:id" element={<MoviePage />} />
          <Route path="/person/:id" element={<PersonPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  </>
);
