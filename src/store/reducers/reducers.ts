import { handleActions } from "redux-actions";
import { InitialState } from "./types";

const defaultUser = {
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
  SET_CURRENT_PHOTO: (state, action: any) => {
    return {
      ...state,
      currentPhoto: action.payload
    };
  },
  AUTH: (state) => {
    return {
      ...state,
      isAuth: state.isAuth === false
    };
  },
  SET_PROFILE: (state, action: any) => {
    return {
      ...state,
      user: action.payload
    };
  },
  REMOVE_PROFILE: (state) => {
    return {
      ...state,
      user: defaultUser
    }
  },
  SET_PHOTOS_LIST: (state, action: any) => {

    return {
      ...state,
      pageToGetPhotos: state.pageToGetPhotos + 1,
      photosList: [...state.photosList, ...action.payload]
    };
  }
}, defaultState);

export default appData;
