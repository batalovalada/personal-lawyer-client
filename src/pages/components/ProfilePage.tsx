import React, {useContext} from "react";
import { AuthContext } from "../../shared/lib/context";
import {Profile} from "../../features/AuthForms";
import {Intro} from "../../entities/Intro";
import {ScrollToTop} from "../lib/scroll";

const ProfilePage: React.FC = () => {
    //scroll to top
    ScrollToTop();
    //authorization
    const { setIsAuth} = useContext(AuthContext);

    const logout = ():void => {
        localStorage.removeItem('auth');
        setIsAuth(false);
    }

    return (
        <div className="page">
            <Intro title="Профиль"/>
            <Profile logout={logout}/>
        </div>
    )
}

export default ProfilePage;