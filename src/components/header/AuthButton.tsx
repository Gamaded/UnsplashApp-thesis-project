import React from "react";
import styled from "styled-components";
import { getCode } from "../../store/reducers/getDataFromUnsplash.js";

type Props = {
    isAuth: boolean;
}

const AuthButton: React.FC<Props> = ({isAuth}) => {
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
