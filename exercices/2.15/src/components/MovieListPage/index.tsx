import { useOutletContext } from "react-router-dom";
import { CinemaContext, Movie } from "../../types";
import Movies from "./Movies/index";



const MovieListPage = () => {
    const { movies }: { movies: Movie[] } = useOutletContext<CinemaContext>();
    
    return (
        <div>
            <h1>Movies</h1>
            <Movies movies={movies} />
        </div>    
    );
};

export default MovieListPage;
