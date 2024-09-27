import { FC } from 'react';
import { configSwiperMoviePage } from 'src/shared/const/swiper';
import { IPerson } from 'src/shared/types';
import { SwiperAction } from 'src/widgets/SwiperAction';
import { SwiperSlide } from 'swiper/react';
import { PersonListItem } from '../PersonListItem';

export const PersonList: FC<{ persons: IPerson[] }> = ({ persons }) => (
  <SwiperAction config={configSwiperMoviePage}>
    <ul>
      {persons.map((person, index) => (
          <li key={`${index}-${person.id}`}>
          <SwiperSlide>
            <PersonListItem {...person} />
          </SwiperSlide>
        </li>
      ))}
    </ul>
  </SwiperAction>
);
