import { createContext } from "react";

export type IAuth = {
    isAuth: boolean | null;
    setIsAuth: (isAuth: boolean) => void;
    isLoading: boolean| null;
}

export const AuthContext = createContext<IAuth>({isAuth: null, setIsAuth: () => {}, isLoading: null});