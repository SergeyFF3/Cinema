import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { CinemaList } from 'src/entities/Cinema';
import { useRootData } from 'src/shared/lib/hooks/useRootData';
import { Section } from 'src/shared/ui/Section';

const MainPage = observer(() => {
  const { getFilmsList, filmsList } = useRootData((store) => store.filmsStore);

  useEffect(() => {
    getFilmsList();
  }, []);

  return (
    <>
      <Section title="Фильмы">
        <CinemaList cinemaList={filmsList} category="films" />
      </Section>
    </>
  );
});

export default MainPage;
