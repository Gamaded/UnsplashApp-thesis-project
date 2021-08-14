import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {addPhoto} from "../../store/actions/actions";
import {Link} from "react-router-dom";
import styled from "styled-components";

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
                <ShowFull
                    onClick={() => {
                        dispatch(addPhoto(item));
                    }}
                />
            </Link>
        );
    }
    if (!isAuth) {
        return (
            <ShowFull />
        );
    }
}

const ShowFull = styled.div`
    position: absolute;
    z-index: 3;
    top: calc(50% - 50px);
    left: calc(50% - 50px);
    width: 100px;
    height: 100px;
    background-image: url(data:image/png;base64,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);
    background-repeat: no-repeat;
    background-position: center;
    transform: scale(0.75);
    opacity: 0.5;
    transition: transform 0.5s;
    cursor: pointer;
    :hover {
        transform: scale(1);
    }
`;

export default RedirectToFull;
