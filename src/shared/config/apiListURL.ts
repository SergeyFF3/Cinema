export const baseUrl = 'https://api.kinopoisk.dev/v1.4';

export const getMovieByIdURL = `${baseUrl}/movie`;

export const getPersonByIdURL = `${baseUrl}/person`;

export const getAllFilmsURL = `${baseUrl}/movie?type=movie`;

export const getAllSerialsURL = `${baseUrl}/movie?type=tv-series`;

export const getAllCartoonURL = `${baseUrl}/movie?type=cartoon`;

export const getMovieBySearchURL = `${baseUrl}/movie/search`;
