import React from "react";
import AuthButton from "./AuthButton";

import "./Header.css";

function Header (props) {
    const {isAuth, unsplash, user} = props;

    return (
        <header className="header">
            <img className="userAvatar" alt="your avatar" src={user.profile_image.medium} />
            <div className="userName">{user.username}</div>
            <AuthButton isAuth={isAuth} unsplash={unsplash} />
        </header>
    );
}

export default Header;
