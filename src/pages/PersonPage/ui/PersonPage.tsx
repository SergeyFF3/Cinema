import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AboutPerson } from 'src/entities/Person';
import { useRootData } from 'src/shared/lib/hooks/useRootData';
import { PageLoader } from 'src/widgets/PageLoader';
import styles from './PersonPage.module.css';

const PersonPage = observer(() => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { personData, isLoadingPersonPage, getPersonById } = useRootData(
    (store) => store.personStore,
  );
  const personId = searchParams.get('personId') || '';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSearchParams({ personId: personId });

    if (personId) {
      getPersonById(personId);
    }
  }, [personId]);

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
