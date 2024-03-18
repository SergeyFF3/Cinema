import styles from './styles/App.module.css';
import { Navbar } from 'src/widgets/Navbar';
import { AppRouter } from './providers/routeProvider';

export const App = () => (
  <>
    <Navbar />
    <div className={styles.container}>
      <AppRouter />
    </div>
  </>
);
