import { Loader } from 'src/shared/ui/Loader';
import styles from './PageLoader.module.css';

export const PageLoader = () => (
  <div className={styles.loader}>
    <Loader />
  </div>
);
