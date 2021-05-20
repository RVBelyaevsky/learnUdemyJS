'use strict';

let numberOfFilm;

function start() {
  numberOfFilm = +prompt('Сколько фильмов вы уже посмотрели', '');

  while (numberOfFilm == '' || numberOfFilm == null || isNaN (numberOfFilm)) {
    numberOfFilm = +prompt('Сколько фильмов вы уже посмотрели', '');
  }
}

start();

const persolalMovieDB = {
  count: numberOfFilm,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

/* const film1 = prompt('Один из последних просмотренных фильмов?', ''),
      point1 = prompt('На сколько оцените его?', ''),
      film2 = prompt('Один из последних просмотренных фильмов?', ''),
      point2 = prompt('На сколько оцените его?', '');
    
persolalMovieDB.movies[film1] = point1;
persolalMovieDB.movies[film2] = point2; */

/* for(let i = 1; i < 3; i++) {
  const film = prompt('Один из последних просмотренных фильмов?', ''),
        point = prompt('На сколько оцените его?', '');

  if (film != null && point != null && film != '' && point != '' && film.length < 50){
    console.log('done');
    persolalMovieDB.movies[film] = point;
  } else {
    console.log('error');
    i--;
  }
} */

function rememberMyFilms() {
  for(let i = 1; i < 3; i++) {
    const film = prompt('Один из последних просмотренных фильмов?', ''),
          point = prompt('На сколько оцените его?', '');
  
    if (film != null && point != null && film != '' && point != '' && film.length < 50){
      console.log('done');
      persolalMovieDB.movies[film] = point;
    } else {
      console.log('error');
      i--;
    }
  }
}

rememberMyFilms();
/* let i = 1;
while ( i < 3) {
  const film = prompt('Один из последних просмотренных фильмов?', ''),
        point = prompt('На сколько оцените его?', '');
        i++;

  if (film != null && point != null && film != '' && point != '' && film.length < 50){
    console.log('done');
    persolalMovieDB.movies[film] = point;
  } else {
    console.log('error');
    i--;
  }
}
 */
/* let i = 1;
do {
  const film = prompt('Один из последних просмотренных фильмов?', ''),
        point = prompt('На сколько оцените его?', '');
        i++;

  if (film != null && point != null && film != '' && point != '' && film.length < 50){
    console.log('done');
    persolalMovieDB.movies[film] = point;
  } else {
    console.log('error');
    i--;
  }
}
while (i < 3); */

function detectPersonalLevel() {
  if (persolalMovieDB.count < 10) {
    console.log('Просмотрено мало фильмов');
  } else if(persolalMovieDB.count >= 10 && persolalMovieDB.count < 30){
    console.log('Вы классический зритель');
  } else if(persolalMovieDB.count >= 30){
    console.log('Вы киноман');
  } else {
    console.log('Произошла ошибка');
  }
}

detectPersonalLevel();

function showMyDB() {
  if (persolalMovieDB.privat == false) {
    console.log(persolalMovieDB);
  }else {
    console.log('error');
  }
}

showMyDB();

function writeYourGenres() {
  for(let i=0; i<3; i++) {
    const a = prompt(`Ваш любимый жанр по номером ${i+1}`,'');

    if (a !=null && a !=''){
      console.log('done');
      persolalMovieDB.genres[i] = a;
    } else {
      console.log('error');
      i--;
    }
  }
}

writeYourGenres();
/* console.log(persolalMovieDB); */
