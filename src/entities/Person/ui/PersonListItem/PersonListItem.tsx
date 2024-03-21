import { Typography } from '@mui/material';
import { observer } from 'mobx-react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { PERSON_ID_LOCALSTORAGE_KEY } from 'src/shared/const/localstorage';
import { setDataInLocalStorage } from 'src/shared/lib/setDataInLocalStorage';
import { IPerson } from 'src/shared/types';
import styles from './PersonListItem.module.css';
import { MyImage } from 'src/widgets/MyImage';
import PersonImage from 'src/shared/assets/images/person.png';

export const PersonListItem: FC<IPerson> = observer((props) => {
  const { id, description, enName, name, photo } = props;

  return (
    <Link
      className={styles.item}
      to={`/person?personId=${id}`}
      onClick={() => setDataInLocalStorage(PERSON_ID_LOCALSTORAGE_KEY, id)}
    >
      <MyImage
        src={photo}
        placeholderSrc={PersonImage}
        className={styles.image}
        alt={name}
      />
      <Typography color="white" textAlign="center">
        {name}
      </Typography>
      <Typography color="white" textAlign="center">
        {enName}
      </Typography>
      <Typography color="gray" textAlign="center">
        {description}
      </Typography>
    </Link>
  );
});
