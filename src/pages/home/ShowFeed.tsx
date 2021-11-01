import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addPhotosList } from "../../store/actions/actions";
import ShowFeedColumnsWrapper from "./ShowFeedColumnsWrapper";
import PleaseWait from "../../components/PleaseWait";
import { useAppSelector } from "../../helpers";

function ShowFeed () {
  const dispatch = useDispatch();
  const photosList = useAppSelector(state => state.photosList);
  const pageToGetPhotos = useAppSelector(state => state.pageToGetPhotos);

  useEffect(() => {
    if (photosList.length === 0 && pageToGetPhotos === 1) {
      dispatch(addPhotosList(pageToGetPhotos));
    }
  }, []);

  if (photosList.length === 0) {
    return (
      <ShowFeedContainer>
        <PleaseWait background="light" />
      </ShowFeedContainer>
    );
  }

  return (
    <ShowFeedContainer
      onClick={(event) => {
        console.log(event.target);
      }}
    >
      <ShowFeedColumnsWrapper
        photosList={photosList}
      />
      <LoadMoreButton
        type="button"
        onClick={() => {
          dispatch(addPhotosList(pageToGetPhotos));
        }}
      >
        {"Показать ещё"}
      </LoadMoreButton>
    </ShowFeedContainer>
  );
}

const ShowFeedContainer = styled.main`
    max-width: 1440px;
    min-width: 320px;
    margin: 0 auto;
    padding-top: 100px;
    padding-bottom: 50px;
    text-align: center;
`;

const LoadMoreButton = styled.button`
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
