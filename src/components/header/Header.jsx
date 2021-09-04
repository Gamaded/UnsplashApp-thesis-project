import React from "react";
import {useSelector, useDispatch} from "react-redux";
import styled from "styled-components";
import {setProfile} from "../../store/actions/actions.js";
import {auth} from "../../store/reducers/getDataFromUnsplash";
import AuthButton from "./AuthButton";
import {getCookie} from "../../helpers";

function Header () {
    const user = useSelector(state => state.user);
    const isAuth = useSelector(state => state.isAuth);
    const dispatch = useDispatch();
    const code = window.location.search.split("code=")[1];

    if (code && !isAuth) {
        dispatch(auth(code));
    }

    if (localStorage.getItem(getCookie("accToken")) && isAuth && user.unauth) {
        const savedUser = JSON.parse(localStorage.getItem(getCookie("accToken")));
        dispatch(setProfile(savedUser));
    }

    return (
        <StHeader>
            <StUserAvatar alt="your avatar" src={user.profile_image.medium} />
            <StUsername>{user.username}</StUsername>
            <AuthButton />
        </StHeader>
    );
}

const StHeader = styled.header`
    position: fixed;
    z-index: 10;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    padding: 10px;
    background-color: #424242;
    box-shadow: 0 3px 20px;
`;

const StUserAvatar = styled.img`
    width: 64px;
    height: 64px;
    margin-right: 1%;
    border-radius: 100%;
`;

const StUsername = styled.div`
    margin-right: 1%;
    color: #ffffff;
`;

export default Header;
