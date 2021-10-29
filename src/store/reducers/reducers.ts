import { handleActions } from "redux-actions";
import { InitialState } from "./types";

const defaultUser = {
    "unauth": true,
    "username": "Гость",
    "profile_image": { "medium": "https://www.meme-arsenal.com/memes/5eae5104f379baa355e031fa1ded886c.jpg" }
}

const defaultState: InitialState = {
    photosList: [],
    currentPhoto: null,
    user: defaultUser,
    isAuth: false,
    pageToGetPhotos: 1
};

const appData = handleActions({
    SET_CURRENT_PHOTO: (state, action) => {
        return {
            ...state,
            currentPhoto: action.payload
        };
    },
    AUTH: (state, action) => {
        return {
            ...state,
            isAuth: true
        };
    },
    SET_PROFILE: (state, action) => {
        return {
            ...state,
            user: action.payload
        };
    },
    SET_PHOTOS_LIST: (state, action: any) => {
        console.log(action.payload);
        return {
            ...state,
            pageToGetPhotos: state.pageToGetPhotos + 1,
            photosList: action.payload
        };
    }
}, defaultState);

export default appData;
