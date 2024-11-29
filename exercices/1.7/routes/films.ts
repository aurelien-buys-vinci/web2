import { Router } from "express";
import { newFilm } from "../types";
import {
  readAllFilms,
  readFilmById,
  createFilm,
  deleteFilm,
  updateFilm,
  put,
} from "../services/films";

const router = Router();

// ca marche dans l'ensemble si tu regarde un peu tu verra les probleme
// y a des erreur mal gérer ou meme pas du tout je crois
// aucaun challenge est fait

router.get("/", (req, res) => {
  const minDuration =
    "minimum-duration" in req.query
      ? Number(req.query["minimum-duration"])
      : undefined;

  if (minDuration !== undefined && (isNaN(minDuration) || minDuration <= 0)) {
    return res.sendStatus(400);
  }

  const filteredFilms = readAllFilms(minDuration);

  return res.send(filteredFilms);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.sendStatus(400);
  }
  const film = readFilmById(id);
  if (!film) {
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
    ("budget" in body &&
      (typeof body.budget !== "number" ||
        isNaN(body.budget) ||
        body.budget < 0)) ||
    ("description" in body &&
      (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body &&
      (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.sendStatus(400);
  }
  const { title, director, duration, budget, description, imageUrl } =
    body as newFilm;
  if (!title || !director || !duration) {
    return res.sendStatus(400);
  }
  const film = createFilm({
    title,
    director,
    duration,
    budget,
    description,
    imageUrl,
  });
  return res.json(film);
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.sendStatus(400);
  }
  const film = deleteFilm(id);
  if (!film) {
    return res.sendStatus(404);
  }
  return res.json(film);
});

router.patch("/:id", (req, res) => {
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
  ) {
    return res.sendStatus(400);
  }

  const {
    title,
    director,
    duration,
    budget,
    description,
    imageUrl,
  }: Partial<newFilm> = body;

  const id = Number(req.params.id);
  const film = updateFilm(id, {
    title,
    director,
    duration,
    budget,
    description,
    imageUrl,
  });
  if (!film) {
    return res.sendStatus(404);
  }
  return res.json(film);
});

router.put("/:id", (req, res) => {
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
    ("budget" in body &&
      (typeof body.budget !== "number" ||
        isNaN(body.budget) ||
        body.budget < 0)) ||
    ("description" in body &&
      (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body &&
      (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.sendStatus(400);
  }
  const { title, director, duration, budget, description, imageUrl }: newFilm =
    body as newFilm;

  if (!title || !director || !duration) {
    return res.sendStatus(400);
  }

  const film = put(Number(req.params.id), {
    title,
    director,
    duration,
    budget,
    description,
    imageUrl,
  });
  if (!film) {
    return res.sendStatus(404);
  }
  return res.json(film);
});

export default router;
