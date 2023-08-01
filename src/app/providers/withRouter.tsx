import HomePage from "../../pages/components/HomePage";
import AboutUsPage from "../../pages/components/AboutUsPage";
import ArticlesPage from "../../pages/components/ArticlesPage";
import ReadMorePage from "../../pages/components/ReadMorePage";
import ServicesPage from "../../pages/components/ServicesPage";
import ContactsPage from "../../pages/components/ContactsPage";
import SignUpPage from "../../pages/components/SignUpPage";
import SignInPage from "../../pages/components/SignInPage";
import ResetPage from "../../pages/components/ResetPage";
import NotFoundPage from "../../pages/components/NotFoundPage";
import ProfilePage from "../../pages/components/ProfilePage";
import Layout from "../../pages/layouts/Layout";
import { ProtectedRoute } from "../../pages/ProtectedRoute";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <HomePage/>,
            },
            {
                path: 'profile',
                element: <ProtectedRoute>
                            <ProfilePage />
                        </ProtectedRoute>,
            },
            {
                path: 'sign-in',
                element: <SignInPage />,
            },
            {
                path: 'sign-up',
                element: <SignUpPage />,
            },
            {
                path: 'reset',
                element: <ResetPage />,
            },
            {
                path: 'about-us',
                element: <AboutUsPage />,
            },
            {
                path: 'about/:id',
                element: <ReadMorePage />,
            },
            {
                path: 'contacts',
                element: <ContactsPage />,
            },
            {
                path: 'articles',
                element: <ArticlesPage />,
            },
            {
                path: 'articles/:id',
                element: <ReadMorePage/>,
            },
            {
                path: 'services',
                element: <ServicesPage />,
            },
            {
                path: 'services/:id',
                element: <ReadMorePage />,
            },
            {
                path: '*',
                element: <NotFoundPage/>,
            }
        ],
    },
]);