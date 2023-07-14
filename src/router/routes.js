import AboutUsPage from "../components/pages/AboutUs";
import ArticlesPage from "../components/pages/ArticlesPage";
import ReadMorePage from "../components/pages/ReadMorePage";
import ServicesPage from "../components/pages/ServicesPage";
import ContactsPage from "../components/pages/ContactsPage";
import SignUpPage from "../components/pages/SignUpPage";
import SignInPage from "../components/pages/SignInPage";
import ResetPage from "../components/pages/ResetPage";
import NotFoundPage from "../components/pages/NotFoundPage";
import ProfilePage from "../components/pages/ProfilePage";
import PrivateAuth from "../hoc/PrivateAuth";

export const privateRoutes = [
    { path: 'profile', component: <PrivateAuth><ProfilePage /></PrivateAuth>},
    { path: 'about-us', component: <AboutUsPage /> },
    { path: 'articles', component: <ArticlesPage /> },
    { path: 'articles/:id', component: <ReadMorePage /> },
    { path: 'services', component: <ServicesPage /> },
    { path: 'services/:id', component: <ReadMorePage /> },
    { path: 'contacts', component: <ContactsPage /> },
    { path: 'about/:id', component: <ReadMorePage /> },
    { path: '*', component: <NotFoundPage /> }
]

export const publicRoutes = [
    { path: 'about-us', component: <AboutUsPage/> },
    { path: 'articles', component: <ArticlesPage/> },
    { path: 'articles/:id', component: <ReadMorePage/> },
    { path: 'services', component: <ServicesPage/> },
    { path: 'services/:id', component: <ReadMorePage/> },
    { path: 'contacts', component: <ContactsPage/> },
    { path: 'sign-up', component: <SignUpPage/> },
    { path: 'sign-in', component: <SignInPage/> },
    { path: 'reset', component: <ResetPage/> },
    { path: 'about/:id', component: <ReadMorePage/> },
    { path: '*', component: <NotFoundPage/> }
]