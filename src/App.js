import React, {useState, useEffect} from 'react';
import { StrictMode } from 'react';
import './assets/styles/App.scss';
import { AuthContext } from './context';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';

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
            <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
                <BrowserRouter>
                    <div className="App">
                        <AppRouter />
                    </div>
                </BrowserRouter>
            </AuthContext.Provider>
        </StrictMode>
    );
}

export default App;
