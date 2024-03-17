import { Typography } from '@mui/material';
import { FC } from 'react';
import styles from './AboutPerson.module.css';
import { IPersonProps } from '../../model/types/person';
import { Section } from 'src/shared/ui/Section';
import { PersonFactsList } from '../AboutPersonLists/PersonFactsList';
import { PersonMoviesList } from '../AboutPersonLists/PersonMoviesList';
import { FlistRow } from 'src/widgets/FlistRow';

export const AboutPerson: FC<IPersonProps> = (props) => {
  const { age, birthday, enName, facts, movies, name, photo, profession, sex } =
    props;

  const originalDate = new Date(birthday);

  const formattedDate = originalDate.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.column}>
        <div className={styles.image}>
          <img src={photo} alt={name} />
        </div>
      </div>
      <div className={styles.column}>
        {name && (
          <Typography fontSize="20px" color="white" textAlign="center">
            {name}
          </Typography>
        )}
        {enName && (
          <Typography
            fontSize="20px"
            color="gray"
            textAlign="center"
            marginBottom="20px"
          >
            {enName}
          </Typography>
        )}
        <div className={styles.description}>
          <FlistRow name="День рождения" value={formattedDate} />
          <FlistRow name="Возраст" value={age} />
          <FlistRow name="Пол" value={sex} />
          <FlistRow name="Профессия" value={profession} />
        </div>
        {facts && facts.length > 0 && (
          <Section title="Интересные факты">
            <PersonFactsList list={facts} />
          </Section>
        )}
        {movies && movies.length > 0 && (
          <Section title="Картины и роли">
            <PersonMoviesList movies={movies} />
          </Section>
        )}
      </div>
    </div>
  );
};
