import { useMatch, useOutletContext } from "react-router-dom";
import { Book, BookContext } from "../../types";
import { useState, useEffect } from "react";
import defaultCover from "../../assets/cover.jpg"; 

const BookPage = () => {
    const { authenticatedUser }: BookContext = useOutletContext();
    const [book, setBook] = useState<Book | undefined>(undefined);

    const match = useMatch("/books/:id");
    const bookId = match?.params.id;
    if (!bookId) return <p>Book not found</p>;

    useEffect(() => {
        if (bookId) {
            fecthBook(parseInt(bookId));
        }
    }, [bookId]);

    const fecthBook = async (id: number) => {
        try {
          if (!authenticatedUser) {
            throw new Error("You must be authenticated to add a movie");
          }
          const options = {
            headers: {
              "Content-Type": "application/json",
              Authorization: authenticatedUser.token
            },
          };
          const response = await fetch(`/api/books/${id}`, options);
    
          if (!response.ok)
            throw new Error(
              `fetch error : ${response.status} : ${response.statusText}`
            );
    
          const book = await response.json();
          console.log("HomePage::fecthBook: ", book);
          setBook(book);
        } catch (err) {
          console.error("HomePage::error: ", err);
        }
      };

    if (!book) return <p>No book found</p>;
      
    return (
        <div>
        {authenticatedUser === undefined ? (<p>You need to be logged in to see the book details</p>)
            : (
                <div>
                    <h1>{book.title}</h1>
                    <p>{book.author}</p>
                    <p>{book.date}</p>
                    {book.url_image ? (<img src={book.url_image} alt={book.title} />) 
                    : (<img src={defaultCover} alt={book.title} />)}
                </div>
            )
        }
        </div>
    );
};

export default BookPage;