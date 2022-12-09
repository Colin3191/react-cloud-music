import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../application/Home";
import Rank from "../application/Rank";
import Recommend from "../application/Recommend";
import Singers from "../application/Singers";

export default createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Navigate to="/recommend" />,
      },
      {
        path: "/recommend",
        element: <Recommend />,
      },
      {
        path: "/singers",
        element: <Singers />,
      },
      {
        path: "/rank",
        element: <Rank />,
      },
    ],
  },
]);
