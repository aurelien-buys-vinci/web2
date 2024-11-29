interface Movie {
    id: number;
    title: string;
    director: string;
    dureation: number;
    imageUrl?: string;
    description?: string;
    budget?: number;
}

type NewMovie = Omit<Movie, "id">;

interface CinemaContext {
    movies: Movie[];
    setMovies: (movies: Movie[]) => void;
    addMovie: (newMovie: NewMovie) => void;
  }

export type {Movie, CinemaContext, NewMovie};