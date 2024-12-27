interface Movie {
    id: number;
    title: string;
    director: string;
    duration: number;
    imageUrl?: string;
    description?: string;
    budget?: number;
}

type NewMovie = Omit<Movie, "id">;

interface CinemaContext {
    movies: Movie[];
    setMovies: (movies: Movie[]) => void;
    addMovie: (newMovie: NewMovie) => void;
    deleteMovie: (id: number) => void;
    registerUser: (user: User) => void;
    loginUser: (user: User) => void;
    authenticatedUser: MaybeAuthenticatedUser;
  }

  interface User {
    username: string;
    password: string;
  }
  
  interface AuthenticatedUser {
    username: string;
    token: string;
  }
  
  type MaybeAuthenticatedUser = AuthenticatedUser | undefined;

export type {Movie, CinemaContext, NewMovie, User, AuthenticatedUser, MaybeAuthenticatedUser};