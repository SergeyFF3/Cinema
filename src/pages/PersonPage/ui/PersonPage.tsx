import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { AboutPerson } from 'src/entities/Person';
import { PERSON_ID_LOCALSTORAGE_KEY } from 'src/shared/const/localstorage';
import { getDataFromLocalStorage } from 'src/shared/lib/getDataFromLocalStorage';
import { useRootData } from 'src/shared/lib/hooks/useRootData';
import { PageLoader } from 'src/widgets/PageLoader';
import styles from './PersonPage.module.css';

const PersonPage = observer(() => {
  const { personData, isLoadingPersonPage, getPersonById } = useRootData(
    (store) => store.personStore,
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const personId = Number(
      getDataFromLocalStorage(PERSON_ID_LOCALSTORAGE_KEY),
    );

    if (personId) {
      getPersonById(personId);
    }
  }, []);

  if (isLoadingPersonPage) {
    return <PageLoader />;
  }

  if (!personData) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.margin}>
        <AboutPerson {...personData} />
      </div>
    </div>
  );
});

export default PersonPage;
