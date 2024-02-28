interface IRatingProps {
  kp: number;
  imdb: number;
}

export interface IMovieProps {
  rating: IRatingProps;
}

export interface IMovieList {
  docs: IMovieProps[];
}
