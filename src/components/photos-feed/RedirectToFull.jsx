import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {addPhoto} from "../../store/actions/actions";
import {Link} from "react-router-dom";

function RedirectToFull (props) {
    const dispatch = useDispatch();
    const {item} = props;
    const isAuth = useSelector(state => state.isAuth);

    if (isAuth) {
        return (
            <Link to={{
                "pathname": "/fullscreen",
                "search": `?photoId=${item.id}`
            }}
            >
                <div
                    className="show-full"
                    onClick={() => {
                        dispatch(addPhoto(item));
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
