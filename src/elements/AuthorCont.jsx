import React from "react";
import styled from "styled-components";

function AuthorCont ({ item }) {
    return (
        <AuthorWrapper>
            <AuthorAvatar alt="author's avatar" src={item.user.profile_image.medium} />
            <AuthorName>
                <a href={item.user.links.html} target="_blank" rel="noopener noreferrer">{item.user.username}</a>
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
