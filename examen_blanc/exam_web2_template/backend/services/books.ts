import path from "path";
import { Book } from "../types";
import { parse } from "../utils/json";
const jsonDbPath = path.join(__dirname, "/../data/drinks.json");

const defaultBooks: Book[] = [
    {
        id: 1,
        title: "Coca-Cola",
        author: "John Pemb",
        date: "2020-01-01",
        url_image: "https://plus.unsplash.com/premium_photo-1682255271649-866ebf8873d1?q=80&w=3594&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 2,
        title: "Pepsi",
        author: "John Pemb",
        date: "2020-01-01",
    },
];

function readAllBooks(): Book[] {
    const books = parse(jsonDbPath, defaultBooks);
    return books;
}
  
  function readOneBook(id: number): Book | undefined {
    const books = parse(jsonDbPath, defaultBooks);
    const book = books.find((book) => book.id === id);
    if (!book) {
      return undefined;
    }
    return book;
  }

export { readAllBooks, readOneBook };