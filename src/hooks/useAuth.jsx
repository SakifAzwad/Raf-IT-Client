import { useContext } from "react";
import { AuthCon } from "../Provider/AuthProv";





const useAuth = () => {
    const auth = useContext(AuthCon);
    return auth;
};

export default useAuth;