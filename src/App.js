import React, {useState} from 'react';
import './assets/styles/App.scss';
import { AuthContext } from './context';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';

function App() {
    const [isAuth, setIsAuth] = useState(false);

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            <BrowserRouter>
                <div className="App">
                    <AppRouter />
                </div>
            </BrowserRouter>
        </AuthContext.Provider>

    );
}

export default App;
