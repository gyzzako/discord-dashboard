import { createContext } from "react";

type LoggedInContextType = {
    isLoggedIn: boolean | null;
    setIsLoggedIn: (value: boolean) => void;
}

export const LoggedInContext = createContext<LoggedInContextType>({
    isLoggedIn: false,
    setIsLoggedIn: () => {},
})