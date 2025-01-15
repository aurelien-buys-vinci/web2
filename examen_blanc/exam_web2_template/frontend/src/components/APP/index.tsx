import { useEffect, useState } from "react";
import {
  clearAuthenticatedUser,
  getAuthenticatedUser,
  storeAuthenticatedUser,
} from "../../utils/session";
import "./App.css";
import { AuthenticatedUser, Book, BookContext, MaybeAuthenticatedUser, User } from "../../types";
import NavBar from "../Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const App = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [authenticatedUser, setAuthenticatedUser] =
    useState<MaybeAuthenticatedUser>(undefined);

  useEffect(() => {
    const authenticatedUser = getAuthenticatedUser();
    if (authenticatedUser) {
      setAuthenticatedUser(authenticatedUser);
      fecthBooks(authenticatedUser);
    }
  }, []);

  const fecthBooks = async (authenticatedUser: AuthenticatedUser) => {
    try {
      const options = {
        headers: {
          "Content-Type": "application/json",
          Authorization: authenticatedUser.token
        },
      };
      const response = await fetch("/api/books", options);

      if (!response.ok)
        throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`
        );
        
      const listBooks = await response.json();
      console.log("HomePage::fecthBooks: ", listBooks);
      setBooks(listBooks);
    } catch (err) {
      console.error("HomePage::error: ", err);
    }
  };

  const loginUser = async (user: User) => {
    try {
      const options = {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch("/api/auths/login", options);

      if (!response.ok)
        throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`
        );

      const authenticatedUser: AuthenticatedUser = await response.json();
      console.log("authenticatedUser: ", authenticatedUser);

      setAuthenticatedUser(authenticatedUser);
      storeAuthenticatedUser(authenticatedUser);
      fecthBooks(authenticatedUser);
    } catch (err) {
      console.error("loginUser::error: ", err);
      throw err;
    }
  };

  const clearUser = () => {
    clearAuthenticatedUser();
    setAuthenticatedUser(undefined);
  };

  const fullBooksContext: BookContext = {
    books,
    loginUser,
    authenticatedUser,
    clearUser,
  };

  return (
    <>
      <NavBar />
      <Outlet context={fullBooksContext}/>
      <Footer />
    </>
  );
};

export default App;
