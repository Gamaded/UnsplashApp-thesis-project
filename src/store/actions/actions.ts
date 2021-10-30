import { User, Photo, Action } from "../reducers/types";

export function addPhoto <Payload>(photo: Photo): Action<Photo> {
    return {
        "type": "SET_CURRENT_PHOTO",
        payload: photo
    };
}

export function setAuth (): {type: string} {
    return {
        "type": "AUTH"
    };
}

export function setProfile (user: User): Action<User> {
    return {
        "type": "SET_PROFILE",
        payload: user
    };
}

export function addPhotosList (photosList: Photo[]): Action<Photo[]> {
    return {
        "type": "SET_PHOTOS_LIST",
        payload: photosList
    };
}

export function like <Payload>(photo: Photo): Action<Photo> {
    return {
        "type": "I_LIKE_IT",
        payload: photo
    };
}

export function unlike <Payload>(photo: Photo): Action<Photo> {
    return {
        "type": "I_DONT_LIKE_IT",
        payload: photo
    };
}
