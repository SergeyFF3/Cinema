import { FC } from 'react';
import { IPerson } from 'src/shared/types';
import { PersonListItem } from '../PersonListItem';
import styles from './PersonList.module.css';

export const PersonList: FC<{ persons: IPerson[] }> = ({ persons }) => {
  const filteredPersons: IPerson[] = persons.filter(
    (person, index) => person.enProfession === 'actor' && index < 8,
  );

  return (
    <ul className={styles.menu}>
      {filteredPersons.map((person) => (
        <li key={person.id}>
          <PersonListItem {...person} />
        </li>
      ))}
    </ul>
  );
};
