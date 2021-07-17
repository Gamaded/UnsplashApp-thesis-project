import React from "react";

function RedirectToFull (props) {
    const {isAuth, item, addPhoto, Link} = props;

    if (isAuth) {
        return (
            <Link to={{
                "pathname": "/fullscreen"
            }}
            >
                <div
                    className="show-full"
                    onClick={() => {
                        addPhoto(item);
                    }}
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
