import React from 'react';
import './assets/styles/App.scss';
import { Route, Routes} from 'react-router-dom';
import Layout from './tpl/layouts/Layout';
import HomePage from './components/pages/HomePage';
import { routes } from './router/routes';

function App() {
  return (
    <div className="App">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage />}/>
                    {routes.map(route => 
                        <Route path={route.path} element={route.component} key={route.path}/>
                    )}
                </Route>
            </Routes>
    </div>
  );
}

export default App;
