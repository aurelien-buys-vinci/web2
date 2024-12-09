import path from "node:path";
import { Film, newFilm } from "../types";
import { parse, serialize } from "../utils/json";
const jsonDbPath = path.join(__dirname, "/../data/films.json");

const defaultFilms: Film[] = [
  {
    id: 1,
    title: "Shang-Chi and the Legend of the Ten Rings",
    director: "Destin Daniel Cretton",
    duration: 132,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/74/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg",
    description:
      "Shang-Chi, the master of unarmed weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.",
    budget: 150,
  },
  {
    id: 2,
    title: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    duration: 136,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    budget: 63,
  },
  {
    id: 3,
    title: "Summer Wars",
    director: "Mamoru Hosoda",
    duration: 114,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/7d/Summer_Wars_poster.jpg",
    description:
      "A young math genius solves a complex equation and inadvertently puts a virtual world's artificial intelligence in a position to destroy Earth.",
    budget: 18.7,
  },
  {
    id: 4,
    title: "The Meyerowitz Stories",
    director: "Noah Baumbach",
    duration: 112,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/af/The_Meyerowitz_Stories.png",
    description:
      "An estranged family gathers together in New York City for an event celebrating the artistic work of their father.",
  },
  {
    id: 5,
    title: "her",
    director: "Spike Jonze",
    duration: 126,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/44/Her2013Poster.jpg",
    description:
      "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
    budget: 23,
  },
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