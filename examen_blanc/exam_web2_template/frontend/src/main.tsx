import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/APP/index.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './components/HomePage/index.tsx'
import BooksPage from './components/BooksPage/index.tsx'
import BookPage from './components/BooksPage/bookPage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "books",
        element: <BooksPage />,
      },
      {
        path: "books/:id",
        element: <BookPage />
      }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>  
  </StrictMode>,
)
