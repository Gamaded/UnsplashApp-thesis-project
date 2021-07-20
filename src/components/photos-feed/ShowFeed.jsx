import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {getPhotosFromUnsplash} from "../../store/reducers/getDataFromUnsplash.js";

import "./ShowFeed.css";
// import ShowFeedItem from "./ShowFeedItem.jsx";

function ShowFeed () {
    const dispatch = useDispatch();
    const photosList = useSelector(state => state.photosList);
    const counter = useSelector(state => state.counter);

    if (counter === 1) {
        dispatch(getPhotosFromUnsplash(counter));
    }

    console.log(photosList);
    // const {unsplash, addPhoto, like, unlike, isAuth, photosList, usersLikes} = props;
    // const [numberForAdapt, setNumberForAdapt] = useState(null);

    // function checkWindowWidth () {
    //     if (window.innerWidth > 1024) {
    //         setNumberForAdapt(3);
    //     }
    //     if (window.innerWidth <= 1024 && window.innerWidth > 575) {
    //         setNumberForAdapt(2);
    //     }
    //     if (window.innerWidth < 575) {
    //         setNumberForAdapt(1);
    //     }
    // }

    // checkWindowWidth();

    // useEffect(() => {
    //     window.onresize = () => {
    //         checkWindowWidth();
    //     };
    // });

    // const columnA = [];
    // const columnB = [];
    // const columnC = [];

    // for (let iter = 0, jter = 0; jter < photosList.length; iter++, jter++) {
    //     iter = iter === numberForAdapt ? 0 : iter;

    //     switch (iter) {
    //     case 0:
    //         columnA.push(photosList[jter]);
    //         break;
    //     case 1:
    //         columnB.push(photosList[jter]);
    //         break;
    //     case 2:
    //         columnC.push(photosList[jter]);
    //         break;
    //     default: break;
    //     }
    // }

    return (
        <div />
        // <div className="photos-feed">
        //     <ol className="photos-feed-container">
        //         {columnA.map(item => {
        //             return (
        //                 <ShowFeedItem
        //                     key={item.id}
        //                     item={item}
        //                     isAuth={isAuth}
        //                     addPhoto={addPhoto}
        //                     usersLikes={usersLikes}
        //                     like={like}
        //                     unlike={unlike}
        //                     unsplash={unsplash}
        //                 />
        //             );
        //         })}
        //     </ol>
        //     <ol className="photos-feed-container photos-feed-container-second">
        //         {columnB.map(item => {
        //             return (
        //                 <ShowFeedItem
        //                     key={item.id}
        //                     item={item}
        //                     isAuth={isAuth}
        //                     addPhoto={addPhoto}
        //                     usersLikes={usersLikes}
        //                     like={like}
        //                     unlike={unlike}
        //                     unsplash={unsplash}
        //                 />
        //             );
        //         })}
        //     </ol>
        //     <ol className="photos-feed-container photos-feed-container-third">
        //         {columnC.map(item => {
        //             return (
        //                 <ShowFeedItem
        //                     key={item.id}
        //                     item={item}
        //                     isAuth={isAuth}
        //                     addPhoto={addPhoto}
        //                     usersLikes={usersLikes}
        //                     like={like}
        //                     unlike={unlike}
        //                     unsplash={unsplash}
        //                 />
        //             );
        //         })}
        //     </ol>
        // </div>
    );
}

export default ShowFeed;
