import Index from "../Index.tsx";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import Pokemons from "../Pokemons.tsx";
import PokemonDetail from "../PokemonDetail.tsx";

const myRoutes = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Navigate to="/pokemons" replace />,
      },
      {
        path: "pokemons",
        element: <Pokemons />,
      },
      {
        path: "trainers",
        element: <Index />,
      },
      {
        path: "pokemon/:id",
        element: <PokemonDetail />,
      },
    ],
  },
]);

const MyRouter = () => {
  return <RouterProvider router={myRoutes} />;
};

export { MyRouter };
