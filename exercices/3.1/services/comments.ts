import path from "node:path";
import { Comment, newComment } from "../types";
import { parse, serialize } from "../utils/json";
import { readFilmById } from "./films";
const jsonDbPath = path.join(__dirname, "/../data/comments.json");

function readOne(idFilm : number ): Comment[] {
    if (!readFilmById(idFilm)) {
        return parse(jsonDbPath);
    }
    return (parse(jsonDbPath) as Comment[]).filter((comment) => comment.filmId === idFilm);
}

function createComment(comment: newComment): Comment | undefined {
    if (!readFilmById(comment.filmId)) {
        console.log("film not found");
        return undefined;
    }
    const comments = parse(jsonDbPath) as Comment[];
    if(comments.find((c) => c.filmId === comment.filmId && c.userId === comment.userId)) {
        console.log("comment already exists");
        return undefined
    }
    const newComment = { id: nextId(), ...comment };
    comments.push(newComment);
    serialize(jsonDbPath, comments);
    return newComment;
}

function deleteComment(userId: number, filmId: number): Comment | undefined {
    const comments = parse(jsonDbPath) as Comment[];
    const index = comments.findIndex((comment) => comment.filmId === filmId && comment.userId === userId);
    if (index === -1) {
        return undefined;
    }
    const deletedElements = comments.splice(index, 1);
    serialize(jsonDbPath, comments);
    return deletedElements[0];
}

function nextId(): number {
    const comments = parse(jsonDbPath) as Comment[];
    return comments.reduce((acc, comment) => {
        return comment.id > acc ? comment.id : acc;
    }, 0) + 1;
}

export { readOne, createComment, deleteComment };