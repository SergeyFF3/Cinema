import { Suspense } from 'react';
import styles from './styles/App.module.css';
import { Route, Routes } from 'react-router-dom';
import { CinemaPage } from 'src/pages/CinemaPage';
import { FilmsPage } from 'src/pages/FilmsPage';
import { MainPage } from 'src/pages/MainPage';
import { SerialsPage } from 'src/pages/SerialsPage';

export const App = () => (
  <div className={styles.container}>
    <Suspense fallback="Loading...">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/films" element={<FilmsPage />} />
        <Route path="/serials" element={<SerialsPage />} />
        <Route path="/:params/:id" element={<CinemaPage />} />
      </Routes>
    </Suspense>
  </div>
);
