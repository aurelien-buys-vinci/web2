import { useMatch, useNavigate, useOutletContext } from "react-router-dom";
import { CinemaContext } from "../../types";

const MoviePage = () => {
  const { movies }: CinemaContext = useOutletContext();
  const { deleteMovie }: CinemaContext = useOutletContext();
  const navigate = useNavigate();

  const match = useMatch("/movies/:movieId");
  const movieId = match?.params.movieId;
  if (!movieId) return <p>movie not found</p>;

  const movie = movies.find((movie) => movie.id.toString() === movieId);
  if (!movie) return <p>movie not found</p>;

  const handleDelete =  () => {
    deleteMovie(movie.id);
    navigate("/movies");
  }

  return (
    <div>
      <h1>{movie.title}</h1>
        <p>{movie.director}</p>
        <p>{movie.duration}</p>
        <img src={movie.imageUrl} alt={movie.title} />
        <p>{movie.description}</p>
        <p>{movie.budget}</p>
        <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default MoviePage;
