import React from "react";
import styled from "styled-components";
import { Photo } from "../store/reducers/types";

type Props = {
  photo: Photo;
}

const AuthorCont: React.FC<Props> = ({ photo }) => {
  return (
    <AuthorWrapper>
      <AuthorAvatar alt="author's avatar" src={photo.user.profile_image.medium} />
      <AuthorName>
        <a href={photo.user.links.html} target="_blank" rel="noopener noreferrer">{photo.user.username}</a>
      </AuthorName>
    </AuthorWrapper>
  );
}

const AuthorWrapper = styled.div`
    display: flex;
    align-self: flex-start;
`;

const AuthorAvatar = styled.img`
    width: 64px;
    height: 64px;
    object-fit: contain;
    border-radius: 100%;
`;

const AuthorName = styled.div`
    align-self: center;
    margin-left: 10px;
    font-size: 18px;
    color: #ffffff;
`;

export default AuthorCont;
