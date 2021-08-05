import React from "react";
import styled from "styled-components";

import "./ShowFullscreen.css";

function ShowFullscreeen () {

    // const month = {
    //     "1": "Января",
    //     "2": "Февраля",
    //     "3": "Марта",
    //     "4": "Апреля",
    //     "5": "Мая",
    //     "6": "Июня",
    //     "7": "Июля",
    //     "8": "Августа",
    //     "9": "Сентября",
    //     "10": "Октября",
    //     "11": "Ноября",
    //     "12": "Декабря"
    // };

    // const regexp = /[:T-]/gu;
    // const created = currentPhoto.created_at.split(regexp).splice(0, 3);

    // function Like () {
    //     const [likes, setLikes] = useState(currentPhoto.likes);

    //     for (let iter = 0; iter < usersLikes.length; iter++) {
    //         if (currentPhoto.id === usersLikes[iter].id) {
    //             return (
    //                 <div
    //                     className="fullscreen-viewing__likes likes"
    //                     onClick={() => {
    //                         unsplash.photos.unlikePhoto(currentPhoto.id)
    //                             .then(res => res.json())
    //                             .then(json => {
    //                                 unlike(currentPhoto);
    //                                 setLikes(likes - 1);
    //                                 console.log(json);
    //                             });
    //                     }}
    //                 >
    //                     <img className="heart-filled heart-hided" alt="i have already liked it" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABvElEQVQ4jc3PP2hTURTH8e+5yUt8vhZtBxFBJUqxmM10qa1DBhfB1UUsFKQRwcVNUMzQuUMVadxd3ESdBAkodLDRQSu2FASraXFIppg/789xaBL02eefJIO/5d13zj0f7oH/PRIuZAorFgwfj2vct7c/fSzms164H5ORlK+eGd4qb4T7XXByYdN2nWYe1Tlgf7tcUSggzjyACWq3VJgDRtvDVeC+k4zni7OpRhecXNi03b2NZ8DU7mvICyUQkOndF9WXQ0nrbHE21TAArtPMR2EAip6JxgBkutbwbgNIprBiie77+sOaPUWg6mx/PmDEHzrWLwagMFI/eCRlYsYK+sU68SQIjCf2F8AfhJeo7SmbUu7QN9DiAMDny9cP183OWe70qwncbX93MrG0/hTkXC+YwpPSlbHzAKZTtOLuJWC9h7ettYLETOevCy5fTld8188qvP8H7Z1KK/v26tHqLyDAm2vjZcScBh7/BfYo1mKqlDu59dN7o25PLG3MgN4DnFCrLuiNV7mxRUQ0PBcJAmQKa+Oi5gFwql16rRJcLOVOfIia+S0IkH64mrAryXmA+mjz5uqFdOtPMwPNd/Isj5aD4sfMAAAAAElFTkSuQmCC" />
    //                     <div className="likes-counter">{likes}</div>
    //                 </div>
    //             );
    //         } else if (iter === usersLikes.length - 1) {
    //             return (
    //                 <div
    //                     className="fullscreen-viewing__likes likes"
    //                     onClick={() => {
    //                         unsplash.photos.likePhoto(currentPhoto.id)
    //                             .then(res => res.json())
    //                             .then(json => {
    //                                 like(currentPhoto);
    //                                 setLikes(likes + 1);
    //                                 console.log(json);
    //                             });
    //                     }}
    //                 >
    //                     <img className="heart-empty heart-shown" alt="i like it!" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABWElEQVQ4jc2UsUpcURRF13kzI5pCMJV2OpIEQb9B0liIGMgHiJ2MGIhYpbOL2vkBIlgLwcLCQmsViV0UtJCkC6SLYGGybK5ymYxRnxYeOM3e+6x77oX34LlXNAtqDegHLoGziLhs8qtAL1AFTpv9yIIdwDwwAnxLA6+ADWAhxT4B48AJ8AcYALaA+Yi4yE/tUHfUKbXI9Ir6Qd1MPaNWMr9QG+q22p4DF9Wp295FnVan/+M31M83b6Ye5ps9tNKmh2q1AOrAUUT8LQtMs8dAvQAqQK0sLKsaUBTAd6DvCYB9wI8iIn4Dv9TXZUnqG+BnRJxfC2PqyiOAq+pos/hFfVcC9l5db2W8VL+qww+AvU0zXbcFetQDdeIesMmU7b4r2Jmuv6a+aOG3q8vpU2y9WYuhQp1T99TBTB9S99VZ9Z8/1X3Ag+qu+jH1bn5AqVLb1KXUbY+Clakrp7kYeRvuWdYAAAAASUVORK5CYII=" />
    //                     <div className="likes-counter">{likes}</div>
    //                 </div>
    //             );
    //         }
    //     }
    // }

    return (
        <FullScreenCont>
            {"fullscreen"}
            {/* <header className="fullscreen-viewing__header">
                <button
                    className="back-arrow"
                    type="button"
                    onClick={() => {
                        history.goBack();
                    }}
                />
                <div className="fullscreen-viewing__author author">
                    <img className="author__avatar" alt="author's avatar" src={currentPhoto.user.profile_image.medium} />
                    <div className="author__name">
                        <a href={currentPhoto.user.links.html} target="_blank" rel="noopener noreferrer">{currentPhoto.user.username}</a>
                    </div>
                </div>
            </header>
            <div className="fullscreen-viewing__content">
                <img className="fullscreen-viewing__photo" alt={currentPhoto.alt_description} src={currentPhoto.urls.full} />
                <div className="fullscreen-viewing__footer">
                    <div className="date-likes-container">
                        <div className="date">{`${created[2]} ${month[created[1]]} ${created[0]}`}</div>
                        <Like />
                    </div>
                </div>
            </div> */}
        </FullScreenCont>
    );
}

const FullScreenCont = styled.div`
    padding-top: 90px;
`;

export default ShowFullscreeen;
