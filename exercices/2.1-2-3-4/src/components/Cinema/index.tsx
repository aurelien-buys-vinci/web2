interface CinemaProps {
    name: string;
    movies: Movie[];
  }
  
  interface Movie {
    id: number;
    title: string;
    director: string;
  }
  
  const Cinema = (props: CinemaProps) => (
    <div>
      <h2>{props.name}</h2>
      <ul>
        {props.movies.map((movie) => (
          <li key={movie.id}>
            <strong>{movie.title}</strong> - {movie.director}
          </li>
        ))}
      </ul>
    </div>
  );

  export default Cinema;