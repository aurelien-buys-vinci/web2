import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./components/App/index.tsx";
import HomePage from "./components/pages/HomePage.tsx";
import AddPizzaPage from "./components/pages/AddPizzaPage.tsx";
import RegisterPage from "./components/Register/index.tsx";
import LoginPage from "./components/Login/index.tsx";

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
        path: "add-pizza",
        element: <AddPizzaPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
