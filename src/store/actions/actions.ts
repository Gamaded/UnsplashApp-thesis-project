import { Photo } from "../reducers/types";
import { getPhotosFromUnsplashReq, getProfileReq, likePhotoReq, unlikePhotoReq, getCurrentPhotoReq, getTokenReq } from "./getDataFromUnsplash";

export function login (code?: string) {
  return (dispatch: any) => {
    if (!code) {
      dispatch({
        type: "AUTH"
      });
      return;
    }
    getTokenReq(code).then(response => {
      dispatch({
        type: "AUTH"
      })
    })
  }
}

export function setProfile (token: string) {
  return async (dispatch: any) => {
    const savedUser = localStorage.getItem(token);
    if (savedUser) {
      dispatch({
        type: "SET_PROFILE",
        payload: JSON.parse(savedUser)
      })
    }
    const user = await getProfileReq(token);
    localStorage.setItem(token, JSON.stringify(user));
    dispatch({
      type: "SET_PROFILE",
      payload: user
    })
  }
}

export function setCurrentPhoto(photo: Photo | string) {
  return async (dispatch: any) => {
    if (typeof photo !== "string") {
      dispatch({
        type: "SET_CURRENT_PHOTO",
        payload: photo
      });
      return;
    }
    const curPhoto = await getCurrentPhotoReq(photo);
    dispatch({
      type: "SET_CURRENT_PHOTO",
      payload: curPhoto
    })
  }
}

export function addPhotosList(counter: number) {
  return async (dispatch: any) => {
    const photosList = await getPhotosFromUnsplashReq(counter);
    dispatch({
      "type": "SET_PHOTOS_LIST",
      payload: photosList
    });
  }
}

export function likePhoto (photoId: string) {
  return (dispatch: any) => {
    likePhotoReq(photoId).then((photo: Photo) => dispatch({
      type: "I_LIKE_IT",
      payload: photo
    }));
  }
}

export function unlikePhoto (photoId: string) {
  return (dispatch: any) => {
    unlikePhotoReq(photoId).then((photo: Photo) => dispatch({
      type: "I_DONT_LIKE_IT",
      payload: photo
    }))
  }
}
