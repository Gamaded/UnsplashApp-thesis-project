import React from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";
// import {Link} from "react-router-dom";

import Likes from "./Likes";

function ShowFeedItem (props) {
    const {item} = props;
    const isAuth = useSelector(state => state.isAuth);
    console.log(item);
    const regexp = /[:T-]/gu;
    const created = item.created_at.split(regexp).splice(0, 3);

    const month = [
        "Января",
        "Февраля",
        "Марта",
        "Апреля",
        "Мая",
        "Июня",
        "Июля",
        "Августа",
        "Сентября",
        "Октября",
        "Ноября",
        "Декабря"
    ];

    return (
        <PhotosFeedItem>
            <ItemPhoto alt={item.alt_description} src={item.urls.regular} />
            <ItemProps>
                <AuthorCont>
                    <AuthorAvatar alt="author's avatar" src={item.user.profile_image.medium} />
                    <AuthorName>
                        <a href={item.user.links.html} target="_blank" rel="noopener noreferrer">{item.user.username}</a>
                    </AuthorName>
                </AuthorCont>
                <DateLikesCont>
                    <ItemDate>
                        {`${created[2]} ${month[created[1] - 1]} ${created[0]}`}
                    </ItemDate>
                    <Likes
                        item={item}
                        isAuth={isAuth}
                    />
                </DateLikesCont>
            </ItemProps>
            {/* <RedirectToFull
                isAuth={isAuth}
                item={item}
                addPhoto={addPhoto}
                Link={Link}
            /> */}
        </PhotosFeedItem>
    );
}

const PhotosFeedItem = styled.li`
    position: relative;
    z-index: 1;
    max-width: 530px;
    margin-bottom: 10px;
`;

const ItemPhoto = styled.img`
    max-width: 100%;
    -o-object-fit: contain;
    object-fit: contain;
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

const AuthorCont = styled.div`
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

const DateLikesCont = styled.div`
    display: flex;
    width: 100%;
    align-self: flex-end;
`;

const ItemDate = styled.div`
    align-self: flex-end;
    padding: 3px;
    color: #ffffff90;
    background-color: #42424230;
    border-radius: 5px;
`;

export default ShowFeedItem;
