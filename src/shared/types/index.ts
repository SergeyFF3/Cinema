type StatusType =
  | 'completed'
  | 'announced'
  | 'filming'
  | 'post-production'
  | 'pre-production';

interface IRating {
  kp: number;
  imdb: number;
}

interface IWatchability {
  name: string;
  logo: {
    url: string;
  };
  url: string;
}

export interface ITrailer {
  url: string;
}

export interface IOnlyNames {
  name: string;
}

export interface IPerson {
  id: number;
  name: string;
  photo: string;
  description: string;
}

export interface IMovieProps {
  id: number;
  name: string;
  alternativeName: string;
  rating: IRating;
  description: string;
  year: number;
  isSerials: boolean;
  status: StatusType;
  watchability: {
    items: IWatchability[];
  };
  similarMovies: IMovieProps[];
  countries: IOnlyNames[];
  genres: IOnlyNames[];
  persons: IPerson[];
  poster: {
    url: string;
    previewUrl: string;
  };
  backdrop: {
    url: string;
    previewUrl: string;
  };
  ageRating: number;
  videos: {
    trailers: ITrailer[];
  };
}

export interface IMovieList {
  docs: IMovieProps[];
  page: number;
  pages: number;
}
