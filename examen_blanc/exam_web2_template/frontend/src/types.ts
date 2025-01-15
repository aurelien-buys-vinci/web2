interface Book {
    id: number;
    title: string;
    author: string;
    date: string;
    url_image?: string;
}

interface BookContext {
    books: Book[];
    loginUser: (user: User) => void;
    authenticatedUser: MaybeAuthenticatedUser;
    clearUser: () => void;
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

export type { Book, BookContext, User, AuthenticatedUser, MaybeAuthenticatedUser }