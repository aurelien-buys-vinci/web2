import { Router } from "express";
import { newFilm,Film } from "../types";


const router = Router();

const films: Film[] = [
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



router.get("/", (req, res) => {
  if (!req.query["minimum-duration"]) {
    // Cannot call req.query.minimum-duration as "-" is an operator
    return res.json(films);
  }
  const durationMin = Number(req.query["minimum-duration"]);
  const filteredFilm = films.filter((film) => {
    return film.duration >= durationMin ;
  });
  return res.json(filteredFilm);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const film = films.find((film) => film.id === id);
  if (!films) {
    return res.sendStatus(404);
  }
  return res.json(film);
});

router.post("/", (req, res) => {
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration !== "number" ||
    !body.title.trim() ||
    !body.director.trim() ||
    isNaN(body.duration) ||
    body.duration <= 0 ||
    (("budget" in body) && (typeof body.budget !== "number" ||isNaN(body.budget)|| body.budget < 0)) ||
    (("description" in body) && (typeof body.description !== "string" || !body.description.trim())) ||
    (("imageUrl" in body) && (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.sendStatus(400);
  }





  const {title, director, duration, budget, description, imageUrl} = body as newFilm;
  if (!title || !director || !duration){ 
    return res.sendStatus(400);
  }

  const nextId =
    films.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0) +
    1;

  const newFilm: Film = {
    id: nextId,
    title,
    director,
    duration,
    budget,
    description,
    imageUrl
  };

  films.push(newFilm);
  return res.json(newFilm);
});



export default router;
