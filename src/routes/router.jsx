import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home/Home";
import GameDetails from "../pages/GameDetails/GameDetails";
import Login from "../pages/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/game-details/:eventTypeId/:eventId",
        element: <GameDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
