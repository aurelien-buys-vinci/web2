import { useMatch, useOutletContext } from "react-router-dom";
import { CinemaContext } from "../../types";

const MoviePage = () => {
  const { movies }: CinemaContext = useOutletContext();
  const match = useMatch("/movies/:movieId");
  const movieId = match?.params.movieId;
  if (!movieId) return <p>User not found</p>;

  const movie = movies.find((movie) => movie.id.toString() === movieId);
  if (!movie) return <p>User not found</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
        <p>{movie.director}</p>
        <p>{movie.dureation}</p>
        <img src={movie.imageUrl} alt={movie.title} />
        <p>{movie.description}</p>
        <p>{movie.budget}</p>
    </div>
  );
};

export default MoviePage;
