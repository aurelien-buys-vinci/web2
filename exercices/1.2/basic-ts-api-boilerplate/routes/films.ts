import { Router } from "express";
import { Film } from "../types";


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

router.get("/", (_req,res) => {
    return res.json(films);
});


export default router;
