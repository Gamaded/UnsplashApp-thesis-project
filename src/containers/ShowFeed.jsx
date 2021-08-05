import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import styled from "styled-components";
import {getPhotosFromUnsplash, getPhotosFromUnsplashWithToken} from "../store/reducers/getDataFromUnsplash.js";

import "./ShowFeed.css";
import ShowFeedColumnsWrapper from "../components/photos-feed/ShowFeedColumnsWrapper.jsx";

function ShowFeed () {
    const dispatch = useDispatch();
    const photosList = useSelector(state => state.photosList);
    const pageToGetPhotos = useSelector(state => state.pageToGetPhotos);
    const isAuth = useSelector(state => state.isAuth);
    useEffect(() => {
        if (photosList.length === 0 && pageToGetPhotos === 1) {
            if (!isAuth) {
                dispatch(getPhotosFromUnsplash(pageToGetPhotos));
            }
            if (isAuth) {
                dispatch(getPhotosFromUnsplashWithToken(pageToGetPhotos));
            }
        }
    });

    return (
        <StShowFeedContainer
            onClick={(event) => {
                console.log(event.target);
            }}
        >
            <ShowFeedColumnsWrapper
                photosList={photosList}
            />
            <StLoadMoreButton
                type="button"
                onClick={() => {
                    dispatch(getPhotosFromUnsplash(pageToGetPhotos));
                }}
            >
                {"Показать ещё"}
            </StLoadMoreButton>
        </StShowFeedContainer>
    );
}


const StShowFeedContainer = styled.main`
    max-width: 1440px;
    margin: 0 auto;
    padding-top: 100px;
    padding-bottom: 50px;
    text-align: center;
`;

const StLoadMoreButton = styled.button`
    width: 300px;
    height: 50px;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 30px;
    border: none;
    background-color: #424242;
    color: #ffffff;
    box-shadow: 0 3px 10px #000000;
    font-size: 18px;
    cursor: pointer;
    transition: color 0.3s, background-color 0.3s;
    :hover {
        color: #424242;
        background-color: #ffffff;
        font-weight: 500;
    }
`;

export default ShowFeed;
