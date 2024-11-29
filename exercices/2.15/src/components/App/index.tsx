import { Outlet, useNavigate } from "react-router-dom";
import Header from "../Header/index";
import Footer from "../Footer/index";
import "./App.css";
import { CinemaContext, Movie, NewMovie } from "../../types";
import { useState } from "react";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/cinema")}>cinema</button>
      <button onClick={() => navigate("/movies")}> movies</button>
      <button onClick={() => navigate("/add-movie")}>Add movie</button>
    </nav>
  );
};

const defaultMovies: Movie[] = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    dureation: 142,
    description: "Two imprisoned",
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    dureation: 175,
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
  },
  {
    id: 3,
    title: "The Dark Knight",
    director: "Christopher Nolan",
    dureation: 152,
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
  },
  {
    id: 4,
    title: "Interstellar",
    director: "Christopher Nolan",
    dureation: 169,
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    budget: 165,
  },
  {
    id: 5,
    title: "The Prestige",
    director: "Christopher Nolan",
    dureation: 130,
  },
];

const App = () => {
  const [movies, setMovies] = useState(defaultMovies);

  const addMovie = (newMovie: NewMovie) => {
    const movieAdded = { ...newMovie, id: nextMovieId(movies) };
    setMovies([...movies, movieAdded]);
  };

  const nextMovieId = (movies: Movie[]) => {
    const ids = movies.map((movie) => movie.id);
    return Math.max(...ids) + 1;
  };

  const fullMoviesContext: CinemaContext = {
    movies,
    setMovies,
    addMovie,
  };

  return (
    <div>
      <Header image="https://images.unsplash.com/photo-1727783842077-10ffa2df9832?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <h1>My Cinema</h1>
      </Header>
      <NavBar />
      <Outlet context={fullMoviesContext} />
      <Footer image="https://images.unsplash.com/photo-1729148074715-78de89a6bed2?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <p>My Cinema - 2021</p>
      </Footer>
    </div>
  );
};

export default App;
