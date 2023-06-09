import React from 'react';
import './assets/styles/App.scss';
import { Route, Routes} from 'react-router-dom';
import Layout from './tpl/layouts/Layout';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUs';
import ServicesPage from './pages/ServicesPage';
import ArticlesPage from './pages/ArticlesPage';
import ContactsPage from './pages/ContactsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="App">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage />}/>
                    <Route path="aboutus" element={<AboutUsPage />}/>
                    <Route path="articles" element={<ArticlesPage />}/>
                    <Route path="services" element={<ServicesPage />}/>
                    <Route path="contacts" element={<ContactsPage />}/>
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
    </div>
  );
}

export default App;
