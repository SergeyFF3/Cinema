interface IRating {
  kp: number;
  imdb: number;
}

export interface ITrailer {
  url: string;
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
  countries: IOnlyNames[];
  genres: IOnlyNames[];
  poster: {
    url: string;
  };
  ageRating: number;
  videos: {
    trailers: ITrailer[];
  };
}

export interface ICinemaList {
  docs: ICinemaProps[];
}
