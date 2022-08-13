import { useContext, useEffect } from "react";
import { isAuthenticated } from "../api";
import { LoggedInContext } from "../contexts/LoggedInContext";

export function useLoggedIn(){
    const { isLoggedIn, setIsLoggedIn } = useContext(LoggedInContext);
    useEffect(() => {
        (async () => {
            console.log(isLoggedIn)
            if(isLoggedIn === null) {
               const isLogged = await isAuthenticated();
               if(!!isLogged) setIsLoggedIn(isLogged)
               else if(isLoggedIn === null) setIsLoggedIn(false);
            }
        })();
    }, [isLoggedIn, setIsLoggedIn]);

    return isLoggedIn;
}