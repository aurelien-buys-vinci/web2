import path from "node:path";
import { Film, newFilm } from "../types";
import { parse, serialize } from "../utils/json";
const jsonDbPath = path.join(__dirname, "/../data/pizzas.json");

const defaultFilms: Film[] = [
    {
      id: 1,
      title: "Inception",
      director: "Christopher Nolan",
      duration: 148,
      budget: 160,
      description: "A mind-bending thriller about dreams within dreams.",
      imageUrl: "https://example.com/inception.jpg"
    },
    {
      id: 2,
      title: "The Matrix",
      director: "The Wachowskis",
      duration: 136,
      description: "A hacker discovers reality as he knows it is a simulation.",
      imageUrl: "https://example.com/matrix.jpg"
    },
    {
      id: 3,
      title: "Interstellar",
      director: "Christopher Nolan",
      duration: 169,
      budget: 165
    },
    {
      id: 4,
      title: "Parasite",
      director: "Bong Joon Ho",
      duration: 132,
      description: "A darkly comedic thriller about class struggles.",
    }
  ];

function readAllFilms(minimumDuration: number | undefined): Film[] {
    const films = parse(jsonDbPath, defaultFilms);
    if (minimumDuration !== undefined) {
      return films.filter((film) => film.duration >= minimumDuration);
    }
    return films;
}

function readFilmById(id: number) {
  const films = parse(jsonDbPath, defaultFilms);
  return films.find((film) => film.id === id);
}

function createFilm(film: newFilm): Film {
  const films = parse(jsonDbPath, defaultFilms);
  const newFilm = { id: films.length + 1, ...film };
  films.push(newFilm);
  serialize(jsonDbPath, films);
  return newFilm;
}

function deleteFilm(id: number): Film | undefined {
  const films = parse(jsonDbPath, defaultFilms);
  const index = films.findIndex((film) => film.id === id);
  if (index === -1) {
    return undefined;
  }
  const deletedElements = films.splice(index, 1);
  serialize(jsonDbPath, films);
  return deletedElements[0];
}

function updateFilm(id: number, film: Partial<newFilm>): Film | undefined {
  const films = parse(jsonDbPath, defaultFilms);
  const filmToUpdate = films.find((film) => film.id === id);
  if (!filmToUpdate) {
    return undefined;
  }
  if(film.title !== undefined) {
    filmToUpdate.title = film.title;
  }
    if(film.director !== undefined) {
        filmToUpdate.director = film.director;
    }
    if(film.duration !== undefined) {
        filmToUpdate.duration = film.duration;
    }
    if(film.budget !== undefined) {
        filmToUpdate.budget = film.budget;
    }
    if(film.description !== undefined) {
        filmToUpdate.description = film.description;
    }
    if(film.imageUrl !== undefined) {
        filmToUpdate.imageUrl = film.imageUrl;
    }

  serialize(jsonDbPath, films);
  return filmToUpdate;
}

function put(id: number, filmm: newFilm): Film | undefined {
  const films = parse(jsonDbPath, defaultFilms);
  const film = films.find((film) => film.id === id);
  if (!film) {
    const newFilm = { id, ...filmm };
    films.push(newFilm);
    serialize(jsonDbPath, films);
    return newFilm;
  } else {
    const { title, director, duration, budget, description, imageUrl } = filmm;
    film.title = title;
    film.director = director;
    film.duration = duration;
    film.budget = budget;
    film.description = description;
    film.imageUrl = imageUrl;
  }
  serialize(jsonDbPath, films);
  return film;
}

export { readAllFilms, readFilmById, createFilm, deleteFilm, updateFilm, put };