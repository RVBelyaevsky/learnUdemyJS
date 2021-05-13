'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели', '');

const persolalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const film1 = prompt('Один из последних просмотренных фильмов?', ''),
      point1 = prompt('На сколько оцените его?', ''),
      film2 = prompt('Один из последних просмотренных фильмов?', ''),
      point2 = prompt('На сколько оцените его?', '');
    
persolalMovieDB.movies[film1] = point1;
persolalMovieDB.movies[film2] = point2;

console.log(persolalMovieDB);