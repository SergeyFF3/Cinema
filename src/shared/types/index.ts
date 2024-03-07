interface IRating {
  kp: number;
  imdb: number;
}

export interface IOnlyNames {
  name: string;
}

export interface ICinemaProps {
  id: number;
  name: string;
  alternativeName: string;
  rating: IRating;
  description: string;
  year: number;
  movieLength: number;
  countries: IOnlyNames[];
  genres: IOnlyNames[];
  poster: {
    url: string;
  };
  ageRating: number;
}

export interface ICinemaList {
  docs: ICinemaProps[];
}
