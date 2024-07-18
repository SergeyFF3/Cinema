import { observer } from 'mobx-react';
import { useRootData } from 'src/shared/lib/hooks/useRootData';
import styles from './CurrentFilters.module.css';

export const CurrentFilters = observer(() => {
  const { currentFilters, removeFilter } = useRootData(
    (store) => store.filtersStore,
  );

  return (
    <ul className={styles.list}>
      {Object.values(currentFilters).map((filter) =>
        filter.map((item) => (
          <li className={styles.item} key={item}>
            {item}
            <button onClick={() => removeFilter(item)}>X</button>
          </li>
        )),
      )}
    </ul>
  );
});
