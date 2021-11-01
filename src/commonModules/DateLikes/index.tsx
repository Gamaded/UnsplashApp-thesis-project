import React from "react";
import styled from "styled-components";
import { Photo } from "../../store/reducers/types";
import PhotoDate from "./PhotoDate";
import Likes from "./Likes";

type Props = {
  photo: Photo;
  isAuth: boolean;
}

const DateLikes: React.FC<Props> = ({photo, isAuth}) => {
  return (
    <DateLikesCont>
      <PhotoDate photo={photo} />
      <Likes photo={photo} isAuth={isAuth} />
    </DateLikesCont>
  )
};

export const DateLikesCont = styled.div`
    display: flex;
    width: 100%;
    align-self: flex-end;
`;

export default DateLikes;
