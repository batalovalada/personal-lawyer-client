import React, {useState, useEffect} from 'react';
import { AuthContext } from './context';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/appRouter/AppRouter';

function App() {
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(():void => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true);
        }
        setIsLoading(false);
    }, [])

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading}}>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
