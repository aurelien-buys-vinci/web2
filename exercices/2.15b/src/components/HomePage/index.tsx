import { Link, useOutletContext } from "react-router-dom";
import { CinemaContext } from "../../types";

const HomePage = () => {
  const { movies }: CinemaContext = useOutletContext();

  return (
    <div>
      <div>
        <h1>Home Page</h1>
        <p>Welcome to the home page!</p>
      </div>      
      <div>
        <h2>Latest Movies</h2>
        {movies.map((movie) => (
          <Link
            key={movie.id}
            to={`/movies/${movie.id}`}
            style={{ display: "block" }}
          >
            {movie.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
