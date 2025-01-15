import { BookContext } from "../../types";
import { useNavigate, useOutletContext } from "react-router-dom";

const BooksPage = () => {
    const {books, authenticatedUser}: BookContext = useOutletContext();
    const navigate = useNavigate();
    return (
        <div>
            <h1>Books Page</h1>
            {authenticatedUser === undefined ? (<p>You need to be loged to see the books</p>) 
                : (books.map((book) => (
                        <div key={book.id}>
                            <h2>{book.title}</h2>
                            <p>{book.author}</p>
                            <p>{book.date}</p>
                            <button onClick={() => navigate(`/books/${book.id}`)}>Voir</button>
                        </div>
                )))
            }
        </div>
    );
    };

export default BooksPage;