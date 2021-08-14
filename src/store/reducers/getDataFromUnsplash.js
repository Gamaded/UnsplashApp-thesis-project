import {createApi} from "unsplash-js";
import {addPhotosList, login, like, unlike, addPhoto} from "../actions/actions.js";

const clid = {
    "client_secret": "p5PHSSQPeNrXIES54icFqPiu-AAMDs9Bl8L3fgQ2gc0",
    "redirect_uri": "http://localhost:3000/auth",
    "client_id": "tislRE5tcfRlNjGf805hJ_vf917iV08JcjtfLWsdQ4w",
    "grant_type": "authorization_code"
};

const unsplash = createApi({
    "accessKey": clid.client_id,
    "secret": clid.client_secret,
    "callbackUrl": clid.redirect_uri,
    "headers": {
        "client_id": clid.client_id
    }
});

export function getCode () {
    const authUrl = `https://unsplash.com/oauth/authorize?client_id=${clid.client_id}&redirect_uri=${clid.redirect_uri}&response_type=code&scope=public write_likes read_user`;
    window.location.assign(authUrl);
}

let accKey = null;

if (localStorage.getItem("accKey")) {
    accKey = localStorage.getItem("accKey");
}

export function auth (code) {
    return function setProfile (dispatch) {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", `https://unsplash.com/oauth/token?client_id=${clid.client_id}&client_secret=${clid.client_secret}&redirect_uri=${clid.redirect_uri}&code=${code}&grant_type=${clid.grant_type}`);
        xhr.send();
        xhr.onload = () => {
            const token = JSON.parse(xhr.response);
            accKey = token.access_token;
            localStorage.setItem("accKey", accKey);
            xhr.open("GET", "https://api.unsplash.com/me");
            xhr.setRequestHeader("Authorization", `Bearer ${accKey}`);
            xhr.send();
            xhr.onload = () => {
                const profile = JSON.parse(xhr.response);
                localStorage.setItem("curUser", JSON.stringify(profile));
                console.log(profile);
                dispatch(login(profile));
            };
        };
    };
}

export function likePhoto (photoId) {
    return (dispatch) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", `https://api.unsplash.com/photos/${photoId}/like`);
        xhr.setRequestHeader("Authorization", `Bearer ${accKey}`);
        xhr.onload = () => {
            const likedPhoto = JSON.parse(xhr.response).photo;
            dispatch(like(likedPhoto));
        };
        xhr.send();
    };
}

export function unlikePhoto (photoId) {
    return (dispatch) => {
        const xhr = new XMLHttpRequest();
        xhr.open("DELETE", `https://api.unsplash.com/photos/${photoId}/like`);
        xhr.setRequestHeader("Authorization", `Bearer ${accKey}`);
        xhr.onload = () => {
            const unlikedPhoto = JSON.parse(xhr.response).photo;
            dispatch(unlike(unlikedPhoto));
        };
        xhr.send();
    };
}

export function getPhotosFromUnsplash (counter) {
    return async function fetchData (dispatch) {
        const resault = await unsplash.photos.list({"page": counter, "perPage": 24})
            .then(res => {
                console.log(unsplash);
                return res.response.results;
            });
        dispatch(addPhotosList(resault));
    };
}

export function getPhotosFromUnsplashWithToken (counter) {
    return (dispatch) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", `https://api.unsplash.com/photos?page=${counter}&per_page=24`);
        xhr.setRequestHeader("Authorization", `Bearer ${accKey}`);
        xhr.onload = () => {
            const resault = JSON.parse(xhr.response);
            dispatch(addPhotosList(resault));
        };
        xhr.send();
    };
}

export function getCurrentPhoto (photoId) {
    return (dispatch) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", `https://api.unsplash.com/photos/${photoId}`);
        xhr.setRequestHeader("Authorization", `Bearer ${accKey}`);
        xhr.onload = () => {
            const resault = JSON.parse(xhr.response);
            dispatch(addPhoto(resault));
        };
        xhr.send();
    };
}
