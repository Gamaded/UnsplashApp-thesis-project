import React from "react";
// import {Link} from "react-router-dom";

// import Likes from "./Likes";
// import RedirectToFull from "./RedirectToFull";

function ShowFeedItem (props) {
    const {item} = props;

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
        <li className="photos-feed-item">
            <img className="photos-feed-item__photo" alt={item.alt_description} src={item.urls.regular} />
            <div className="photos-feed-item__props">
                <div className="author">
                    <img className="author__avatar" alt="author's avatar" src={item.user.profile_image.medium} />
                    <div className="author__name"><a href={item.user.links.html} target="_blank" rel="noopener noreferrer">{item.user.username}</a></div>
                </div>
                <div className="date-likes-container">
                    <div className="date">{`${created[2]} ${month[created[1] - 1]} ${created[0]}`}</div>
                    {/* <Likes
                        item={item}
                        isAuth={isAuth}
                        usersLilkes={usersLikes}
                        unsplash={unsplash}
                        like={like}
                        unlike={unlike}
                    /> */}
                </div>
            </div>
            {/* <RedirectToFull
                isAuth={isAuth}
                item={item}
                addPhoto={addPhoto}
                Link={Link}
            /> */}
        </li>
    );
}

export default ShowFeedItem;
