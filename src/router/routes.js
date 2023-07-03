import AboutUsPage from "../components/pages/AboutUs";
import ArticlesPage from "../components/pages/ArticlesPage";
import ReadMorePage from "../components/pages/ReadMorePage";
import ServicesPage from "../components/pages/ServicesPage";
import ContactsPage from "../components/pages/ContactsPage";
import NotFoundPage from "../components/pages/NotFoundPage";

export const routes = [
    { path: 'about-us', component: <AboutUsPage/> },
    { path: 'articles', component: <ArticlesPage/> },
    { path: 'articles/:id', component: <ReadMorePage/> },
    { path: 'services', component: <ServicesPage/> },
    { path: 'services/:id', component: <ReadMorePage/> },
    { path: 'contacts', component: <ContactsPage/> },
    { path: ':id', component: <ReadMorePage/> },
    { path: '*', component: <NotFoundPage/> }
]