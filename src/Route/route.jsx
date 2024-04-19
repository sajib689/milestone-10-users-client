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
        loader: () => fetch('https://milestone-10-users-server-git-main-sajib689s-projects.vercel.app/users')
    },
    {
        path: "/update/:id",
        element: <Update/>,
        loader: ({params}) => fetch(`https://milestone-10-users-server-git-main-sajib689s-projects.vercel.app/users/${params.id}`)
    }
  ]);
export default router;  