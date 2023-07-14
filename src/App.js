import React, {useState, useEffect} from 'react';
import { StrictMode } from 'react';
import { AuthContext } from './context';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/appRouter/AppRouter';

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true);
        }
        setIsLoading(false);
    }, [])

    return (
        <StrictMode> 
            <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading, setIsLoading}}>
                <BrowserRouter>
                    <AppRouter />
                </BrowserRouter>
            </AuthContext.Provider>
        </StrictMode>
    );
}

export default App;
