export type EnProfessionsType =
  | 'actor'
  | 'cameo'
  | 'composer'
  | 'design'
  | 'director'
  | 'director_ussr'
  | 'editor'
  | 'group_cameo'
  | 'group_uncredited'
  | 'operator'
  | 'producer'
  | 'sound_designer'
  | 'translator'
  | 'uncredited'
  | 'voice_director'
  | 'voiceover'
  | 'writter';

export interface IOnlyValueProp {
  value: string;
}

export type IPersonMovie = {
  id: number;
  name: string;
  alternativeName: string;
  description: string;
  enProfession: EnProfessionsType;
};

export interface IPersonProps {
  id: number;
  name: string;
  enName: string;
  photo: string;
  age: number;
  birthday: string;
  movies: IPersonMovie[];
  profession: IOnlyValueProp[];
  facts: IOnlyValueProp[];
  sex: string;
}
