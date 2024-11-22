import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/index'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from './components/HomePage/index'
import CinemaPage from './components/CinemaPage/index'
import MovieListPage from './components/MovieListPage/index'


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
        path: "cinema",
        element: <CinemaPage />,
      },
      {
        path: "movies",
        element: <MovieListPage />,
      }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>  
  </StrictMode>,
)
