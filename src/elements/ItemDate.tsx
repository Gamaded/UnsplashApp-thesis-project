import React from "react";
import styled from "styled-components";
import { getCreationDate } from "../helpers";
import { Photo } from "../store/reducers/types";

type Props = {
  photo: Photo;
}

const ItemDate: React.FC<Props> = ({ photo }) => {
  const whenPhotoWasCreated = getCreationDate(photo.created_at);
  return (
    <Date>
      {whenPhotoWasCreated}
    </Date>
  );
}

const Date = styled.div`
    align-self: flex-end;
    padding: 3px;
    color: #ffffff90;
    background-color: #42424230;
    border-radius: 5px;
`;

export default ItemDate;
