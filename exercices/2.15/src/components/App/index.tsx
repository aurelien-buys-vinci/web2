import { Outlet, useNavigate } from "react-router-dom";
import Header from "../Header/index";
import Footer from "../Footer/index";
import "./App.css";
import { CinemaContext, Movie, NewMovie } from "../../types";
import { useEffect, useState } from "react";

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

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fecthMovies();
  }, []);

  const fecthMovies = async () => {
    try {
      const response = await fetch("/api/films");

      if (!response.ok)
        throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`
        );
      
      const listmovies = await response.json();
      console.log("HomePage::fecthMovies: ", listmovies);
      setMovies(listmovies);
    } catch (err) {
      console.error("HomePage::error: ", err);
    }
  };

  const addMovie = async (newMovie: NewMovie) => {
    try {
      const options = {
        method: "POST",
        body: JSON.stringify(newMovie),
        headers: {
          "Content-Type": "application/json",
        },
      };

      await fetch("/api/films", options);

    } catch (err) {
      console.error("AddPizzaPage::error: ", err);
    }
    fecthMovies();
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
