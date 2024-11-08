import Movie from "./movie";

interface CinemaProps {
    name: string;
    movies: Movie[];
  }
  
  
  
  const Cinema = (props: CinemaProps) => (
    <div>
      <h2>{props.name}</h2>
      <ul>
        {props.movies.map((movie) => (
          <li key={movie.id}>
            <Movie id={movie.id} title={movie.title} director={movie.director}  description={movie.description}/>
          </li>
        ))}
      </ul>
    </div>
  );

  export default Cinema;