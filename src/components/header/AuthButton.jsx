import React from "react";
import {useSelector} from "react-redux";
import styled from "styled-components";
import {getCode} from "../../store/reducers/getDataFromUnsplash.js";

function AuthButton () {
    const isAuth = useSelector(state => state.isAuth);

    if (isAuth) return null;

    return (
        <StAuthButton
            type="button"
            onClick={() => {
                getCode();
            }}
        >
            {"Войти"}
        </StAuthButton>
    );
}

const StAuthButton = styled.button`
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

export default AuthButton;
