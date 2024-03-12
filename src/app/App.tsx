import { Suspense } from 'react';
import styles from './styles/App.module.css';
import { Route, Routes } from 'react-router-dom';
import { MoviePage } from 'src/pages/MoviePage';
import { FilmsPage } from 'src/pages/FilmsPage';
import { MainPage } from 'src/pages/MainPage';
import { SerialsPage } from 'src/pages/SerialsPage';
import { Navbar } from 'src/widgets/Navbar';
import { SearchResultPage } from 'src/pages/SearchResultPage';

export const App = () => (
  <>
    <Navbar />
    <div className={styles.container}>
      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/films" element={<FilmsPage />} />
          <Route path="/serials" element={<SerialsPage />} />
          <Route path="/search-result" element={<SearchResultPage />} />
          <Route path="/:params/:id" element={<MoviePage />} />
        </Routes>
      </Suspense>
    </div>
  </>
);
