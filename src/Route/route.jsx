import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import User from "../Components/User/User";
import Update from "../Components/Update/Update";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path: "/users",
        element: <User/>,
        loader: () => fetch('http://localhost:3000/users')
    },
    {
        path: "/update/:id",
        element: <Update/>,
        loader: ({params}) => fetch(`http://localhost:3000/users/${params.id}`)
    }
  ]);
export default router;  