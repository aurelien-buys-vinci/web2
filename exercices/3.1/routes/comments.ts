import { Router } from "express";
import { newComment } from "../types";
import {
  readOne,
  createComment,
  deleteComment
} from "../services/comments";
import { authorize } from "../utils/auths";
const router = Router();

router.get("/", authorize, (req, res) => {
    const idFilm = Number(req.query.filmId);
    if (idFilm !== undefined && (isNaN(idFilm) || idFilm <= 0)) {
        return res.sendStatus(400);
    }
    const comments = readOne(idFilm);
    return res.json(comments);
});

router.post("/", authorize, (req, res) => {
    const body: unknown = req.body;
    if (
        !body ||
        typeof body !== "object" ||
        !("filmId" in body) ||
        !("content" in body) ||
        typeof body.filmId !== "number" ||
        typeof body.content !== "string" ||
        isNaN(body.filmId) ||
        body.filmId <= 0 ||
        !body.content.trim() ||
        !("user" in req) ||
        typeof req.user !== "object" ||
        !req.user ||
        !("id" in req.user) ||
        typeof req.user.id !== "number" ||
        isNaN(req.user.id) ||
        req.user.id <= 0
    ) {
        console.log("bad request");
        return res.sendStatus(400);
    }
    const newComment = {
        filmId: body.filmId,
        userId: req.user.id,
        content: body.content
    };
    const comment = createComment(newComment as newComment);
    if (!comment) {
        return res.sendStatus(400);
    }
    return res.status(201).json(comment);
});

router.delete("/:id", authorize, (req, res) => {
    const filmId = Number(req.params.id);
    if (isNaN(filmId) || filmId <= 0) {
        return res.sendStatus(400);
    }
    if (!("user" in req) || typeof req.user !== "object" || !req.user || !("id" in req.user) || typeof req.user.id !== "number" || isNaN(req.user.id) || req.user.id <= 0) {
        return res.sendStatus(401);
    }
    const userId = req.user.id;
    const success = deleteComment(userId, filmId);
    if (!success) {
        return res.sendStatus(404);
    }
    return res.sendStatus(204);
});

export default router;