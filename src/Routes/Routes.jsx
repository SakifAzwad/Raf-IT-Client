import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import SignUp from "../components/Signup/SignUp";
import Login from "../components/Login/Login";
import Home from "../components/Home/Home";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "../Private/PrivateRoute";
import AllUsers from "../AdminData/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[

        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/signup",
            element:<SignUp></SignUp>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
       
    ]
  },
  {
      path:"/dashboard",
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: "allusers",
          element:<AllUsers></AllUsers>
        },
      ],
  }
]);