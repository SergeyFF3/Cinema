interface IRating {
  kp: number;
  imdb: number;
}

interface IOnlyNames {
  name: string;
}

export interface ICinemaProps {
  id: number;
  name: string;
  alternativeName: string;
  rating: IRating;
  description: string;
  year: string;
  movieLength: number;
  countries: IOnlyNames[];
  genres: IOnlyNames[];
  poster: {
    url: string;
  };
}

export interface ICinemaList {
  docs: ICinemaProps[];
}
