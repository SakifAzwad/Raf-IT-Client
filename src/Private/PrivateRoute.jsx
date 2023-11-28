/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthCon } from "../Provider/AuthProv";




const PrivateRoute = ({children}) => {

    const loc = useLocation();
    
    const {user,loading}=useContext(AuthCon);

    
    if(loading)
    {
        return <Navigate to={loc.pathname}></Navigate>
    }

    if(user)
    {
        return children;
    }

    return <Navigate state={loc.pathname} to="/login" ></Navigate>
};

export default PrivateRoute;