import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import SignUp from "../components/Signup/SignUp";
import Login from "../components/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[

        {
            path:"/signup",
            element:<SignUp></SignUp>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
    ]
  }
]);