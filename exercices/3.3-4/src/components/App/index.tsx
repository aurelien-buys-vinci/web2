import { Outlet, useNavigate } from "react-router-dom";
import Header from "../Header/index";
import Footer from "../Footer/index";
import "./App.css";
import { AuthenticatedUser, CinemaContext, MaybeAuthenticatedUser, Movie, NewMovie, User } from "../../types";
import { useEffect, useState } from "react";
import { clearAuthenticatedUser, getAuthenticatedUser, storeAuthenticatedUser } from "../../utils/session";


interface NavBarProps {
  authenticatedUser: MaybeAuthenticatedUser;
  clearUser: () => void;

}

const NavBar = ({authenticatedUser, clearUser} : NavBarProps) => {
  const navigate = useNavigate();
  return (
    <nav>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/cinema")}>cinema</button>
      <button onClick={() => navigate("/movies")}> movies</button>
      {authenticatedUser ? (
        <><button onClick={() => navigate("/add-movie")}>Add movie</button><button onClick={() => clearUser()}>Logout</button></>
      ) : (
        <><button onClick={() => navigate("/register")}>Register</button><button onClick={() => navigate("/login")}>Login</button></>
      )}
    </nav>
  );
};

const App = () => {
  const currentTheme = localStorage.getItem("theme") ?? "dark";
  const [movies, setMovies] = useState<Movie[]>([]);
  const [theme, setTheme] = useState<"light" | "dark">(
    currentTheme as "light" | "dark"
  );
  const [authenticatedUser, setAuthenticatedUser] =
    useState<MaybeAuthenticatedUser>(undefined);

  useEffect(() => {
    fecthMovies();
    const authenticatedUser = getAuthenticatedUser();
    if (authenticatedUser) {
      setAuthenticatedUser(authenticatedUser);
    }
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

  const deleteMovie = async (id: Number) => {
    try {
      if (!authenticatedUser) {
        throw new Error("You must be authenticated to add a movie");
      }
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: authenticatedUser.token
        },
      };

      await fetch(`/api/films/${id}`, options);

    } catch (err) {
      console.error("HomePage::error: ", err);
    }
    fecthMovies();
  }

  const addMovie = async (newMovie: NewMovie) => {
    try {
      if (!authenticatedUser) {
        throw new Error("You must be authenticated to add a movie");
      }
      const options = {
        method: "POST",
        body: JSON.stringify(newMovie),
        headers: {
          "Content-Type": "application/json",
          Authorization: authenticatedUser.token
        },
      };

      await fetch("/api/films", options);

    } catch (err) {
      console.error("AddPizzaPage::error: ", err);
    }
    fecthMovies();
  };

  const registerUser = async (newUser: User) => {
    try {
      const options = {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch("/api/auths/register", options);

      if (!response.ok)
        throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`
        );

      const createdUser: AuthenticatedUser = await response.json();

      setAuthenticatedUser(createdUser);
      storeAuthenticatedUser(createdUser);
      console.log("createdUser: ", createdUser);
    } catch (err) {
      console.error("registerUser::error: ", err);
      throw err;
    }
  }

  const loginUser = async (user: User) => {
    try {
      const options = {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch("/api/auths/login", options);

      if (!response.ok)
        throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`
        );

      const authenticatedUser: AuthenticatedUser = await response.json();
      console.log("authenticatedUser: ", authenticatedUser);

      setAuthenticatedUser(authenticatedUser);
      storeAuthenticatedUser(authenticatedUser);
    } catch (err) {
      console.error("loginUser::error: ", err);
      throw err;
    }
  };

  const clearUser = () => {
    clearAuthenticatedUser();
    setAuthenticatedUser(undefined);
  }

  const fullMoviesContext: CinemaContext = {
    movies,
    setMovies,
    addMovie,
    deleteMovie,
    registerUser,
    loginUser,
    authenticatedUser,
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  return (
    <div>
      <Header image="https://images.unsplash.com/photo-1727783842077-10ffa2df9832?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        theme={theme}
        toggleTheme={toggleTheme}>
        <h1>My Cinema</h1>
      </Header>
      <NavBar authenticatedUser={authenticatedUser} clearUser={clearUser} />
      <Outlet context={fullMoviesContext} />
      <Footer image="https://images.unsplash.com/photo-1729148074715-78de89a6bed2?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        theme={theme}>
        <p>My Cinema - 2021</p>
      </Footer>
    </div>
  );
};

export default App;
