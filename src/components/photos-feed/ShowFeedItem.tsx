import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import RedirectToFull from "./RedirectToFull";
import { DateLikesCont } from "../commonStyles";
import { ItemDate, Likes, AuthorCont } from "../../elements";
import { Photo } from "../../store/reducers/types"
import { useAppSelector } from "../../helpers";

type Props = {
  photo: Photo;
}

const ShowFeedItem: React.FC<Props> = ({ photo }) => {
  const isAuth = useAppSelector(state => state.isAuth);

  return (
    <PhotosFeedItem>
      <ItemPhoto alt={photo.alt_description || ""} src={photo.urls.small} />
      <ItemProps>
        <AuthorCont photo={photo} />
        <DateLikesCont>
          <ItemDate photo={photo} />
          <Likes photo={photo} isAuth={isAuth} />
        </DateLikesCont>
      </ItemProps>
      <RedirectToFull photo={photo} />
    </PhotosFeedItem>
  );
}

const PhotosFeedItem = styled.li`
    position: relative;
    z-index: 1;
    width: 100%;
    margin-bottom: 10px;
`;

const ItemPhoto = styled.img`
    width: 100%;
    max-height: 400px;
    min-height: 200px;
    -o-object-fit: cover;
    object-fit: cover;
`;

const ItemProps = styled.div`
    position: absolute;
    z-index: 2;
    top: 0;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    padding: 10px;
`;

export default ShowFeedItem;
