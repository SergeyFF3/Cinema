import { observer } from 'mobx-react';
import { useRootData } from 'src/shared/lib/hooks/useRootData';

const CinemaPage = observer(() => {
  const { cinemaData } = useRootData((store) => store.cinemaStore);
  return <h1>{cinemaData?.name}</h1>;
});

export default CinemaPage;
