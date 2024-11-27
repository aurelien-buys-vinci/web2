interface Movie {
    title: string;
    director: string;
    dureation: number;
    imageUrl?: string;
    description?: string;
    budget?: number;
}

interface CinemaContext {
    movies: Movie[];
    setMovies: (movies: Movie[]) => void;
    addMovie: (newMovie: Movie) => void;
  }

export type {Movie, CinemaContext};