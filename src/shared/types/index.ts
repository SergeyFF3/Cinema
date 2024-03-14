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

export interface IMovieProps {
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
