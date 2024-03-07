import { observer } from 'mobx-react';
import { AboutCinema } from 'src/entities/Cinema/ui/AboutCinema';
import { useRootData } from 'src/shared/lib/hooks/useRootData';

const CinemaPage = observer(() => {
  const { cinemaData } = useRootData((store) => store.cinemaStore);

  if (!cinemaData) {
    return null;
  }

  return (
    <>
      <AboutCinema {...cinemaData} />
    </>
  );
});

export default CinemaPage;
