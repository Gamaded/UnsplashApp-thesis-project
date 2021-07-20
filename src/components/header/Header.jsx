import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {login} from "../../store/actions/actions.js";
import AuthButton from "./AuthButton";

import "./Header.css";

function Header () {
    const user = useSelector(state => state.user);
    const isAuth = useSelector(state => state.isAuth);
    const dispatch = useDispatch();
    console.log(user);

    if (localStorage.getItem("curUser") && !isAuth) {
        const savedUser = JSON.parse(localStorage.getItem("curUser"));
        dispatch(login(savedUser));
    }

    return (
        <header className="header">
            <img className="userAvatar" alt="your avatar" src={user.profile_image.medium} />
            <div className="userName">{user.username}</div>
            <AuthButton />
        </header>
    );
}

export default Header;
