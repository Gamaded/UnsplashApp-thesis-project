import React from "react";

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

// const code = window.location.search.split("code=")[1];

// const unsplash = new Unsplash({
//     "accessKey": "tislRE5tcfRlNjGf805hJ_vf917iV08JcjtfLWsdQ4w",
//     "secret": "p5PHSSQPeNrXIES54icFqPiu-AAMDs9Bl8L3fgQ2gc0",
//     "callbackUrl": "http://localhost:3000/",
//     "headers": {
//         "client_id": "tislRE5tcfRlNjGf805hJ_vf917iV08JcjtfLWsdQ4w"
//     }
// });

// if (localStorage.getItem("bearerToken")) {
//     unsplash.bearerToken = localStorage.getItem("bearerToken");
// }

function UnsplashApp (props) {
    console.log(props);
    console.log("hello");
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

    // useEffect(() => {
    //     if (appData.counter === 1) {
    //         unsplash.photos.listPhotos(1, 15)
    //             .then(res => res.json())
    //             .then(json => {
    //                 addPhotosList(json);
    //             });
    //     }

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
        <div />
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
