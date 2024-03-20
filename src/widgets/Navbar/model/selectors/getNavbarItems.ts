import { INavbarItem } from '../types/navbar';

export const nvabarListItems: INavbarItem[] = [
  {
    path: '/films?type=movie&page=1',
    text: 'Фильмы',
  },
  {
    path: '/series?type=tv-series&page=1',
    text: 'Сериалы',
  },
  {
    path: '/cartoons?type=cartoon&page=1',
    text: 'Мультфильмы',
  },
];
