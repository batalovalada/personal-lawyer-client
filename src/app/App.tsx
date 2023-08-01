import React, {useState, useEffect} from 'react';
import { AuthContext } from '../shared/lib/context';
import { RouterProvider } from 'react-router-dom';
import { router } from './providers/withRouter';
import Loader from '../shared/UI/loader/Loader';
import './assets/styles/index.scss';

function App() {
    const [isAuth, setIsAuth] = useState<boolean>(false);
    //const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(():void => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true);
        }
        //setIsLoading(false);
    }, [])

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth}}>
            <RouterProvider 
                router={router}
                fallbackElement={
                    <div className="error">
                        <Loader />
                    </div>}
            />
        </AuthContext.Provider>
    );
}

export default App;
