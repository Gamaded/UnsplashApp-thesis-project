import React from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";
import RedirectToFull from "./RedirectToFull";
import {ItemDate, DateLikesCont, AuthorCont, AuthorAvatar, AuthorName} from "../commonStyles";

import Likes from "../commonBlocks/Likes";

function ShowFeedItem (props) {
    const {item} = props;
    const isAuth = useSelector(state => state.isAuth);
    const regexp = /[:T-]/gu;
    const created = item.created_at.split(regexp).splice(0, 3);

    console.log(item);

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
            <ItemPhoto alt={item.alt_description} src={item.urls.small} />
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
            <RedirectToFull item={item} />
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
