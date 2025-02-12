import authorizedUserIcon from "../../assets/user-icon.avif";
import userIcon from "../../assets/user-icon.svg";
import {UserCard} from "./UserCard.tsx";
import {useProfile} from "../../context/profileContext.ts";
import {useRef, useState} from "react";
import {useOutsideClick} from "../../hooks/useOutsideClick.ts";
import {useLocation} from "react-router-dom";
import {Icon} from "../icon/Icon.tsx";

export const UserIdentity = () => {
    const {pathname} = useLocation();

    const ref = useRef<HTMLDivElement>(null);

    const {profile, onLogout} = useProfile();

    const [isUserCardOpen, setIsUserCardOpen] = useState(false);

    useOutsideClick(ref, () => setIsUserCardOpen(false));

    const handleUserLogoClick = () => setIsUserCardOpen(prevState => !prevState);

    const handleLogout = () => {
        setIsUserCardOpen(false);
        onLogout?.();
    }

    if (profile && profile.authenticated) {
        return (
            <>
                <img src={authorizedUserIcon} alt={profile.fullName} onClick={handleUserLogoClick} className="header-user-logo"/>
                {isUserCardOpen && (
                    <div className="user-card-wrapper" ref={ref}>
                        <UserCard
                            fullName={profile.fullName!}
                            onLogout={handleLogout}
                        />
                    </div>
                )}
            </>
        );
    }

    return (
        pathname === '/login'
            ? <a href='/register' className="login-button"><Icon src={userIcon} width={24} name="user-icon"/>Регистрация</a>
            : <a href='/login' className="login-button"><Icon src={userIcon} width={24} name="user-icon" />Войти</a>
    );
}