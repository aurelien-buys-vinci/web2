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
    return res.sendStatus(400);
  }
  const durationMin = Number(req.query["minimum-duration"]);
  const filteredFilm = films.filter((film) => {
    return film.duration >= durationMin ;
  });
  return res.json(filteredFilm);
});

router.get("/:id", (req, res) => {
  
  const id = Number(req.params.id);
  if(isNaN(id)){
    return res.sendStatus(400);
  }
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

  const conflict = films.some((film) => film.title === title && film.director === director); // some parcour la liste et renvoi true si il y a une fois la condition vrai
  if (conflict) {
    return res.sendStatus(409); 
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

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = films.findIndex((film) => film.id === id);
  if (index === -1) {
    return res.sendStatus(404);
  }
  const deletedElements = films.splice(index, 1); // splice() returns an array of the deleted elements
  return res.json(deletedElements[0]);
});


router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  const film = films.find((film) => film.id === id);
  if (!film) {
    return res.sendStatus(404);
  }

  const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object" ||
    ("title" in body &&
      (typeof body.title !== "string" || !body.title.trim())) ||
    ("director" in body &&
      (typeof body.director !== "string" || !body.director.trim())) ||
    ("duration" in body &&
      (typeof body.duration !== "number" || body.duration <= 0)) ||
    ("budget" in body && 
      (typeof body.budget !== "number" || body.budget <= 0)) ||
    ("description" in body &&
      (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body &&
      (typeof body.imageUrl !== "string" || !body.imageUrl.trim())) 
    )  
  {
    return res.sendStatus(400);
  }

  const { title, director, duration, budget, description, imageUrl }: Partial<newFilm> = body;

  if (title) {
    film.title = title;
  }
  if (director) {
    film.director = director;
  }
  if (duration) {
    film.duration = duration;
  }
  if (budget) {
    film.budget = budget; 
  }
  if (description) {
    film.description = description;
  }
  if (imageUrl) {
    film.imageUrl = imageUrl;
  }

  return res.json(film);
});


router.put("/:id", (req, res) => {
  const body: unknown = req.body;

  if(
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
    (("imageUrl" in body) && (typeof body.imageUrl !== "string" || !body.imageUrl.trim())
  )) {
    return res.sendStatus(400);
  }
  const { title, director, duration, budget, description, imageUrl }: newFilm = body as newFilm;
  const id = Number(req.params.id);
  const film = films.find((film) => film.id === id);
  if (!title || !director || !duration) {
    return res.sendStatus(400);
  }
  if (!film) {
    const newFilm = { id, title, director, duration, budget, description, imageUrl };
    films.push(newFilm);
    res.json(newFilm);
  } else {
    film.title = title;
    film.director = director;
    film.duration = duration;
    if(budget){
      film.budget = budget;
    }
    if(description){
      film.description = description;
    }
    if(imageUrl){
      film.imageUrl = imageUrl;
    }
  }
  return res.json(film);
});

export default router;
