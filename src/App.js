import React from 'react';
import './assets/styles/App.scss';
import { Route, Routes, Navigate} from 'react-router-dom';
import Layout from './tpl/layouts/Layout';
import HomePage from './components/pages/HomePage';
import AboutUsPage from './components/pages/AboutUs';
import ServicesPage from './components/pages/ServicesPage';
import ArticlesPage from './components/pages/ArticlesPage';
import ContactsPage from './components/pages/ContactsPage';
import ReadMorePage from './components/pages/ReadMorePage';
import NotFoundPage from './components/pages/NotFoundPage';

function App() {
  return (
    <div className="App">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage />}/>
                    <Route path="about-us" element={<AboutUsPage />}/>
                    <Route path="about" element={<Navigate to="/about-us" replace/>} />
                    <Route path="articles" element={<ArticlesPage />}/>
                    <Route path="articles/:id" element={<ReadMorePage />} />
                    <Route path="services" element={<ServicesPage />} />
                    <Route path="services/:id" element={<ReadMorePage />}/>
                    <Route path="contacts" element={<ContactsPage />}/>
                    <Route path=":id" element={<ReadMorePage/>}/>
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
    </div>
  );
}

export default App;
