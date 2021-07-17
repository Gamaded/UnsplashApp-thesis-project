import React from "react";

function AuthButton (props) {
    const {isAuth, unsplash} = props;
    if (!isAuth) {
        return (
            <button
                className="auth"
                type="button"
                onClick={() => {
                    const authenticationUrl = unsplash.auth.getAuthenticationUrl(["public", "write_likes"]);
                    window.location.assign(authenticationUrl);
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
