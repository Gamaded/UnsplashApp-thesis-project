import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

function RedirectToFull () {
    const isAuth = useSelector(state => state.isAuth);

    if (isAuth) {
        return (
            <Link to="/fullscreen">
                <div
                    className="show-full"
                />
            </Link>
        );
    }
    if (!isAuth) {
        return (
            <div className="show-full" />
        );
    }
}

export default RedirectToFull;
