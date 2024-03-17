import { Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { MOVIE_ID_LOCALSTORAGE_KEY } from 'src/shared/const/localstorage';
import { setDataInLocalStorage } from 'src/shared/lib/setDataInLocalStorage';
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

  return (
    <Link
      className={styles.item}
      to={`/films/${id}`}
      onClick={() => setDataInLocalStorage(MOVIE_ID_LOCALSTORAGE_KEY, id)}
    >
      <Typography color="black">{name}</Typography>
      <Typography color="gray">{alternativeName}</Typography>
      <Typography color="white">{description}</Typography>
      <Typography color="white">{textMapper[enProfession]}</Typography>
    </Link>
  );
};
