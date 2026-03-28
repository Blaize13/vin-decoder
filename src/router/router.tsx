import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Variables from "../pages/Variables/Variables";
import VariableDetails from "../pages/VariableDetails/VariableDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "variables",
        element: <Variables />,
      },
      {
        path: "variables/:variableId",
        element: <VariableDetails />,
      },
    ],
  },
]);