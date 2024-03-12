export const baseUrl = 'https://api.kinopoisk.dev/v1.4';

export const getCinemaByIdURL = `${baseUrl}/movie`;

export const getAllFilmsURL = `${baseUrl}/movie?type=movie`;

export const getAllSerialsURL = `${baseUrl}/movie?type=tv-series`;

export const getCinemaBySearchURL = `${baseUrl}/movie/search`;
