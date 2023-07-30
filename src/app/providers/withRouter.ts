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
import React from "react";

export interface IRoute {
    path: string;
    component: React.FC;
}

export const privateRoutes: IRoute[] = [
    { path: 'profile', component: ProfilePage},
    { path: 'about-us', component: AboutUsPage},
    { path: 'articles', component: ArticlesPage},
    { path: 'articles/:id', component: ReadMorePage},
    { path: 'services', component: ServicesPage},
    { path: 'services/:id', component: ReadMorePage},
    { path: 'contacts', component: ContactsPage},
    { path: 'about/:id', component: ReadMorePage},
    { path: '*', component: NotFoundPage}
]

export const publicRoutes: IRoute[] = [
    { path: 'about-us', component: AboutUsPage},
    { path: 'articles', component: ArticlesPage},
    { path: 'articles/:id', component: ReadMorePage},
    { path: 'services', component: ServicesPage},
    { path: 'services/:id', component: ReadMorePage},
    { path: 'contacts', component: ContactsPage},
    { path: 'sign-up', component: SignUpPage},
    { path: 'sign-in', component: SignInPage},
    { path: 'reset', component: ResetPage},
    { path: 'about/:id', component: ReadMorePage},
    { path: '*', component: NotFoundPage}
]