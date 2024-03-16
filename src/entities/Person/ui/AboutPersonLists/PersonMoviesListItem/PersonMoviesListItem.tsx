import { Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useRootData } from 'src/shared/lib/hooks/useRootData';
import { EnProfessionsType, IPersonMovie } from '../../../model/types/person';
import styles from './PersonMoviesListItem.module.css';

export type TextMapper = Record<EnProfessionsType, string>;

const textMapper: TextMapper = {
  actor: 'Актёр',
  cameo: 'Камео',
  composer: 'Композитор',
  design: 'Дизайн',
  director: 'Режиссер',
  director_ussr: 'Режиссер СССР',
  editor: 'Монтажер',
  group_cameo: 'Камео группы',
  group_uncredited: 'Группа без титров',
  operator: 'Оператор',
  producer: 'Продюсер',
  sound_designer: 'звукорежиссер',
  translator: 'Переводчик',
  uncredited: 'Без титров',
  voice_director: 'Режиссер озвучивания',
  voiceover: 'Закадровый текст',
  writter: 'Автор сценария',
};

export const PersonMoviesListItem: FC<IPersonMovie> = (props) => {
  const { alternativeName, description, enProfession, id, name } = props;
  const { setMovieId } = useRootData((store) => store.movieStore);

  return (
    <Link
      className={styles.item}
      to={`/films/${id}`}
      onClick={() => setMovieId(id)}
    >
      <Typography color="white">{name}</Typography>
      <Typography color="white">{alternativeName}</Typography>
      <Typography color="white">{description}</Typography>
      <Typography color="white">{textMapper[enProfession]}</Typography>
    </Link>
  );
};
