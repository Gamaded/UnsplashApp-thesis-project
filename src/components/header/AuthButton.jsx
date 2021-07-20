import React from "react";
import {useSelector} from "react-redux";
import {getCode} from "../../store/reducers/getDataFromUnsplash.js";

function AuthButton () {
    const isAuth = useSelector(state => state.isAuth);

    if (!isAuth) {
        return (
            <button
                className="auth"
                type="button"
                onClick={() => {
                    getCode();
                }}
            >
                {"Войти"}
            </button>
        );
    }
    if (isAuth) {
        return null;
    }
}

export default AuthButton;
