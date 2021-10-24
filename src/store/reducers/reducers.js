import { handleActions } from "redux-actions";

const defaultState = {
    "photosList": [],
    "currentPhoto": null,
    "user": {
        "unauth": true,
        "username": "Гость",
        "profile_image": { "medium": "https://www.meme-arsenal.com/memes/5eae5104f379baa355e031fa1ded886c.jpg" }
    },
    "userLikes": [],
    "isAuth": false,
    "pageToGetPhotos": 1
};

const appData = handleActions({
    SET_CURRENT_PHOTO: (state, action) => {
        return {
            ...state,
            currentPhoto: action.payload
        };
    },
    AUTH: (state) => {
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
    SET_PHOTOS_LIST: (state, action) => {
        const newPhotosList = [...state.photosList, ...action.payload];
        return {
            ...state,
            pageToGetPhotos: state.pageToGetPhotos + 1,
            photosList: newPhotosList
        };
    }
}, defaultState);

export default appData;
