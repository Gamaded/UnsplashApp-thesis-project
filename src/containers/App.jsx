import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {auth, getCode, getPhotosFromUnsplash} from "../store/reducers/getDataFromUnsplash";

// import {
//     Route,
//     Switch,
//     Redirect,
//     withRouter
// } from "react-router-dom";

// import {addPhoto, login, getUsersLikes, addPhotosList, like, unlike} from "../store/actions/actions.js";

// import ShowFullscreen from "../components/fullscreen-viewing/ShowFullscreen.jsx";
// import ShowFeed from "../components/photos-feed/ShowFeed.jsx";
// import Header from "../components/header/Header.jsx";
// import Popup from "../components/Popup/Popup.jsx";

const code = window.location.search.split("code=")[1];

// if (localStorage.getItem("bearerToken")) {
//     unsplash.bearerToken = localStorage.getItem("bearerToken");
// }

function UnsplashApp () {
    const photosList = useSelector(state => state.photosList);
    const counter = useSelector(state => state.counter);
    const isAuth = useSelector(state => state.isAuth);
    console.log(photosList);
    console.log(counter);

    const dispatch = useDispatch();

    if (code && !isAuth) {
        dispatch(auth(code));
    }

    // const {history, appData} = props;
    // const [popup, setPopup] = useState(false);
    // const [windowOffset, setWindowOffset] = useState(0);

    // function setProfile () {
    //     if (unsplash.bearerToken !== undefined) {
    //         unsplash.currentUser.profile()
    //             .then(res => res.json())
    //             .then(json => {
    //                 login(json);
    //                 unsplash.users.likes(json.username)
    //                     .then(res => res.json())
    //                     .then(json1 => {
    //                         getUsersLikes(json1);
    //                     });
    //             });
    //     }
    // }

    //     setProfile();

    //     if (code !== undefined) {
    //         unsplash.auth.userAuthentication(code)
    //             .then(res => res.json())
    //             .then(json => {
    //                 unsplash.auth.setBearerToken(json.access_token);
    //                 localStorage.setItem("bearerToken", json.access_token);
    //                 setProfile();
    //             });
    //     }
    // });

    return (
        <div>
            <button
                type="button"
                onClick={() => {
                    dispatch(getPhotosFromUnsplash(counter));
                }}
            >
                {"get photos"}
            </button>

            <button
                type="button"
                onClick={() => {
                    getCode();
                }}
            >
                {"auth"}
            </button>
        </div>
    // <Switch>
    //     <Route history={history} exact path="/home">
    //         <Header
    //             unsplash={unsplash}
    //             user={appData.user}
    //             isAuth={appData.isAuth}
    //         />

    //         <main
    //             className="main-wrapper"
    //             onClick={(event) => {
    //                 if (appData.isAuth === false && (event.target.className === "show-full" || event.target.classList.contains("heart")) && popup === false) {
    //                     setPopup(true);
    //                 }
    //             }}
    //         >
    //             <ShowFeed
    //                 isAuth={appData.isAuth}
    //                 photosList={appData.photosList}
    //                 addPhoto={addPhoto}
    //                 usersLikes={appData.usersLikes}
    //                 like={like}
    //                 unlike={unlike}
    //                 unsplash={unsplash}
    //             />

    //             <button
    //                 className="show-more-photos"
    //                 type="button"
    //                 onClick={() => {
    //                     setWindowOffset(window.scrollY);

    //                     unsplash.photos.listPhotos(appData.counter + 1, 15)
    //                         .then(res => res.json())
    //                         .then(json => {
    //                             addPhotosList(json);
    //                             window.scrollTo(0, windowOffset);
    //                         });
    //                 }}
    //             >
    //                 {"Загрузить ещё"}
    //             </button>
    //             <Popup popup={popup} />
    //         </main>
    //     </Route>
    //     <Route path="/fullscreen">
    //         <ShowFullscreen
    //             unsplash={unsplash}
    //             appData={appData}
    //             like={like}
    //             unlike={unlike}
    //             history={history}
    //         />
    //     </Route>
    //     <Route history={history} exact path="/">
    //         <Redirect to="/home" />
    //     </Route>
    // </Switch>
    );
}

export default UnsplashApp;
