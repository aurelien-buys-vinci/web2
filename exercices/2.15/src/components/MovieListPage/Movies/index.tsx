import {Movie} from "../../../types";

interface MoviesProps {
    movies: Movie[];
}

const Movies = ({movies}: MoviesProps) => {
    return (
        <div>
            {movies.map((movie) => (
                <div key={movie.id}>
                    <h2>{movie.title}</h2>
                    <p>{movie.director}</p>
                    <p>{movie.duration}</p>
                    <img src={movie.imageUrl} alt={movie.title} />
                    <p>{movie.description}</p>
                    <p>{movie.budget}</p>
                </div>
            ))}
        </div>
    );
};

export default Movies;